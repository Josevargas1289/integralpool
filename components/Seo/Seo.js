import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const origin = 'https://integralpool.com';

function Seo({ title, description, locale, path }) {
  const suffix = path ? path + '/' : '';
  const canonical = origin + '/' + locale + '/' + suffix;
  const alternateEn = origin + '/en/' + suffix;
  const alternateEs = origin + '/es/' + suffix;
  const image = origin + '/og.png';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={alternateEn} />
      <link rel="alternate" hrefLang="es" href={alternateEs} />
      <link rel="alternate" hrefLang="x-default" href={alternateEn} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Integral Pool" />
      <meta property="og:locale" content={locale === 'es' ? 'es_US' : 'en_US'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  locale: PropTypes.oneOf(['en', 'es']).isRequired,
  path: PropTypes.string.isRequired,
};

export default Seo;