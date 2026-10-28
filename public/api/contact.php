<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['sent' => false]);
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$requestHost = strtolower(preg_replace('/:\\d+$/', '', $_SERVER['HTTP_HOST'] ?? ''));
$originHost = $origin !== '' ? strtolower((string) parse_url($origin, PHP_URL_HOST)) : '';

if ($originHost !== '' && $requestHost !== '' && $originHost !== $requestHost) {
    respond(403, ['sent' => false]);
}

$contentType = strtolower($_SERVER['CONTENT_TYPE'] ?? '');
if (strpos($contentType, 'application/json') !== 0) {
    respond(415, ['sent' => false]);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 20000) {
    respond(413, ['sent' => false]);
}

$rawBody = file_get_contents('php://input');
$data = json_decode($rawBody ?: '', true);
if (!is_array($data)) {
    respond(400, ['sent' => false]);
}

if (($data['consent'] ?? false) !== true) {
    respond(422, ['sent' => false]);
}

function field(array $data, string $name, int $maxLength): string
{
    $value = $data[$name] ?? '';
    if (!is_string($value)) {
        respond(422, ['sent' => false]);
    }

    $value = trim($value);
    $length = function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
    if ($length > $maxLength) {
        respond(422, ['sent' => false]);
    }

    return $value;
}

$name = field($data, 'from_name', 120);
$email = field($data, 'from_email', 254);
$phone = field($data, 'phone', 60);
$company = field($data, 'company', 160);
$message = field($data, 'message', 5000);

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['sent' => false]);
}

// Limita cada dirección IP a cinco solicitudes cada diez minutos.
$clientIp = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR)
    . DIRECTORY_SEPARATOR
    . 'integralpool-contact-'
    . hash('sha256', $clientIp)
    . '.json';
$now = time();
$attempts = [];

if (is_readable($rateFile)) {
    $storedAttempts = json_decode((string) file_get_contents($rateFile), true);
    if (is_array($storedAttempts)) {
        $attempts = array_values(array_filter($storedAttempts, static function ($timestamp) use ($now) {
            return is_int($timestamp) && $timestamp > $now - 600;
        }));
    }
}

if (count($attempts) >= 5) {
    respond(429, ['sent' => false]);
}

$attempts[] = $now;
@file_put_contents($rateFile, json_encode($attempts), LOCK_EX);

$configPath = dirname(rtrim($_SERVER['DOCUMENT_ROOT'] ?? '', DIRECTORY_SEPARATOR))
    . DIRECTORY_SEPARATOR
    . 'contact-config.php';

if (!is_readable($configPath)) {
    error_log('Integral Pool contact form: private SMTP configuration is missing.');
    respond(500, ['sent' => false]);
}

$config = require $configPath;
if (!is_array($config) || empty($config['smtp_password'])) {
    error_log('Integral Pool contact form: SMTP password is not configured.');
    respond(500, ['sent' => false]);
}

require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';

function escapeHtml(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function displayValue(string $value): string
{
    return $value === '' ? 'No proporcionado' : escapeHtml($value);
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@integralpool.com';
    $mail->Password = (string) $config['smtp_password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;

    $mail->setFrom('info@integralpool.com', 'Formulario web - Integral Pool');
    $mail->Sender = 'info@integralpool.com';
    $mail->addAddress('ceo@integralpool.com');
    $mail->addAddress('info@integralpool.com');
    $mail->addAddress('sebas@integralpool.com');
    $mail->addReplyTo($email, $name);

    $replyUrl = 'mailto:' . $email
        . '?subject=' . rawurlencode('Respuesta a tu consulta en Integral Pool');

    $mail->isHTML(true);
    $mail->Subject = 'Nuevo mensaje desde integralpool.com';
    $mail->Body = '<h2>Nuevo mensaje desde el formulario web</h2>'
        . '<p><strong>Nombre:</strong> ' . escapeHtml($name) . '</p>'
        . '<p><strong>Correo:</strong> ' . escapeHtml($email) . '</p>'
        . '<p><strong>Teléfono:</strong> ' . displayValue($phone) . '</p>'
        . '<p><strong>Empresa:</strong> ' . displayValue($company) . '</p>'
        . '<p><strong>Mensaje:</strong><br>' . nl2br(displayValue($message)) . '</p>'
        . '<p style="margin-top:28px">'
        . '<a href="' . escapeHtml($replyUrl) . '" '
        . 'style="display:inline-block;padding:13px 24px;background:#ff9900;color:#ffffff;'
        . 'font-family:Arial,sans-serif;font-size:16px;font-weight:700;text-decoration:none;'
        . 'border-radius:8px">Responder al cliente</a>'
        . '</p>';
    $mail->AltBody = "Nuevo mensaje desde el formulario web\n\n"
        . "Nombre: {$name}\n"
        . "Correo: {$email}\n"
        . 'Teléfono: ' . ($phone !== '' ? $phone : 'No proporcionado') . "\n"
        . 'Empresa: ' . ($company !== '' ? $company : 'No proporcionado') . "\n"
        . 'Mensaje: ' . ($message !== '' ? $message : 'No proporcionado');

    $mail->send();
    respond(200, ['sent' => true]);
} catch (Exception $exception) {
    error_log('Integral Pool contact form SMTP error: ' . $mail->ErrorInfo);
    respond(502, ['sent' => false]);
} catch (Throwable $throwable) {
    error_log('Integral Pool contact form error: ' . $throwable->getMessage());
    respond(500, ['sent' => false]);
}
