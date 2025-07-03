import React from 'react';
import { Head } from 'next/document';
import theme from '../theme/palette';
import brand from '../public/text/brand';

const HeadComponent = () => (
  <Head>
    <meta charSet="utf-8" />
    {/* Use minimum-scale=1 to enable GPU rasterization */}
    <meta
      name="description"
      content={brand.hosting.desc}
    />
    {/* Favicon */}
    <link rel="icon" href="/favicons/iprIco.png" />
    <link rel="apple-touch-icon" sizes="57x57" href="/favicons/iprIco.png-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/favicons/iprIco.png-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/favicons/iprIco.png-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/favicons/iprIco.png-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/favicons/iprIco.png-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/favicons/iprIco.png-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/favicons/iprIco.png-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/favicons/iprIco.png-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/iprIco.png-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/iprIco.png-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicons/iprIco.png-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/iprIco.png-16x16.png" />
    <link rel="manifest" href="/favicons/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/favicons/iprIco.png-16x16.png" />
    {/* PWA primary color */}
    <meta name="theme-color" content={theme.cloud.palette.primary.main} />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link href="https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css" rel="stylesheet" />
    {/*  Facebook */}
    <meta property="author" content="Integral Pool repairs" />
    <meta property="og:site_name" content="integralpool.com" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    {/*  Twitter */}
    <meta property="twitter:site" content="integralpool.com" />
    <meta property="twitter:domain" content="integralpool.com" />
    <meta property="twitter:creator" content="Integral Pool repairs" />
    <meta property="twitter:card" content="Integral Pool repairs" />
    <meta property="twitter:image:src" content="/images/hosting-logo.png" />
    <meta property="og:url" content={brand.hosting.url} />
    <meta property="og:title" content={brand.hosting.desc} />
    <meta
      property="og:description"
      content={brand.hosting.desc}
    />
    <meta name="twitter:site" content={brand.hosting.url} />
    <meta name="twitter:card" content={brand.hosting.url} />
    <meta name="twitter:image" content={brand.hosting.img} />
    <meta property="og:image" content={brand.hosting.img} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <script src="/scripts/vanta/three.r119.min.js" />
  </Head>
);

export default HeadComponent;
