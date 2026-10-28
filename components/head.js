import React from 'react';
import { Head } from 'next/document';
import theme from '../theme/palette';

const HeadComponent = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="emotion-insertion-point" content="" />
    <link rel="icon" href="/favicons/iprIco.png" />
    <link rel="apple-touch-icon" href="/favicons/iprIco.png" />
    <meta name="theme-color" content={theme.cloud.palette.primary.main} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link href="https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css" rel="stylesheet" />
  </Head>
);

export default HeadComponent;