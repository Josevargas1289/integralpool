# Configuración del formulario en Hostinger

1. Copia `contact-config.example.php` como `contact-config.php`.
2. Reemplaza el valor de `smtp_password` con la contraseña de `info@integralpool.com`.
3. Sube `contact-config.php` a la carpeta del dominio que contiene `public_html`, no dentro de `public_html`.
4. Sube el contenido compilado del sitio dentro de `public_html`.

El formulario utiliza `info@integralpool.com` como remitente SMTP y entrega cada mensaje a:

- `ceo@integralpool.com`
- `info@integralpool.com`
- `sebas@integralpool.com`

La dirección escrita por el visitante se utiliza como `Reply-To`.
