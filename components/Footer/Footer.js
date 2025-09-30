import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { useTranslation } from 'next-i18next';
import brand from 'public/text/brand';
import SelectLang from '../LangSwitch/Select';
import useStyles from './footer-style';

function Footer({ toggleDir }) {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  const footerLinks = [
    { key: 'about', href: '#promotion' },
    { key: 'services', href: '#feature' },
    { key: 'partners', href: '#benefit' },
    // { key: 'process', href: '#pricing' },
    { key: 'contact', href: '/contact/' },
    { key: 'faq', href: '/faq/' },
  ];

  return (
    <div className={classes.footer}>
      <Container fixed component="footer">
        <Grid container spacing={6}>
          {/* Columna 1: Logo + descripción */}
          <Grid item xs={12} md={4}>
            <div className={classes.logo}>
              <img src={brand.hosting.img} alt="logo" />
              <Typography variant="h6" color="textPrimary">
                {brand.hosting.projectName}
              </Typography>
            </div>
            <Typography
              color="textPrimary"
              className={classes.footerDesc}
              gutterBottom
            >
              {t('hosting-landing.banner_title')}
            </Typography>
          </Grid>

          {/* Columna 2: Enlaces rápidos */}
          <Grid item xs={12} md={4}>
            <div className={classes.quickLinks}>
              <Typography
                variant="h6"
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                {t('hosting-landing.footer_link')}
              </Typography>
              <ul>
                {footerLinks.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {t(`hosting-landing.footer_links.${item.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>

          {/* Columna 3: Redes sociales + idioma */}
          <Grid item xs={12} md={4} className={classes.alignCenter}>
  <div className={classes.socmed}>
    <a href="https://www.youtube.com/@integralpool" target="_blank" rel="noopener noreferrer">
      <IconButton aria-label="YouTube" className={classes.margin} size="small">
        <svg width="20" height="20" viewBox="0 0 576 512" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path d="M549.7 124.1c-6.3-23.7-24.9-42.4-48.5-48.7C458.7 64 288 64 288 64s-170.7 0-213.2 11.4c-23.6 6.3-42.2 25-48.5 48.7C16 168.2 16 256 16 256s0 87.8 10.3 131.9c6.3 23.7 24.9 42.4 48.5 48.7C117.3 448 288 448 288 448s170.7 0 213.2-11.4c23.6-6.3 42.2-25 48.5-48.7C560 343.8 560 256 560 256s0-87.8-10.3-131.9zM232 336V176l142 80-142 80z" />
        </svg>
      </IconButton>
    </a>

    <a href="https://www.facebook.com/share/15gF7rWhUi/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
      <IconButton aria-label="Facebook" className={classes.margin} size="small">
        <svg width="20" height="20" viewBox="0 0 320 512" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path d="M279.14 288l14.22-92.66h-88.91V127.12c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.43 0 225.36 0c-73.22 0-121 44.38-121 124.72v70.62H22.89V288h81.47v224h100.2V288z" />
        </svg>
      </IconButton>
    </a>

    <a href="https://www.instagram.com/integralpoolservices/?igsh=eGt1YzB3emg5bDI%3D#" target="_blank" rel="noopener noreferrer">
      <IconButton aria-label="Instagram" className={classes.margin} size="small">
        <svg width="20" height="20" viewBox="0 0 448 512" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM398.8,128A54.19,54.19,0,0,0,344.6,73.8C311.9,64,256.5,64,224,64s-87.9,0-120.6,9.8A54.19,54.19,0,0,0,49.2,128C39.4,160.1,39.4,215.5,39.4,248s0,87.9,9.8,120.6a54.19,54.19,0,0,0,54.2,54.2c32.7,9.8,88.1,9.8,120.6,9.8s87.9,0,120.6-9.8a54.19,54.19,0,0,0,54.2-54.2c9.8-32.7,9.8-88.1,9.8-120.6S408.6,160.1,398.8,128ZM224,338.66A82.66,82.66,0,1,1,306.66,256,82.75,82.75,0,0,1,224,338.66Zm85.33-148a19.33,19.33,0,1,1,19.34-19.33A19.36,19.36,0,0,1,309.33,190.66Z" />
        </svg>
      </IconButton>
    </a>

    <a href="https://www.tiktok.com/@integral.pools?_t=ZP-8yKwcyCarVf&_r=1 " target="_blank" rel="noopener noreferrer">
      <IconButton aria-label="TikTok" className={classes.margin} size="small">
        <svg width="20" height="20" viewBox="0 0 256 256" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path d="M226.5 76.5c-27.2 0-49.2-22-49.2-49.2h-32.8v149.3c0 17-13.8 30.8-30.8 30.8s-30.8-13.8-30.8-30.8 13.8-30.8 30.8-30.8c5.1 0 9.9 1.3 14.2 3.6V115.4c-4.7-.7-9.5-1.1-14.2-1.1-34.6 0-62.7 28.1-62.7 62.7S108.3 240 142.9 240s62.7-28.1 62.7-62.7V93.6c10.3 5.7 22.2 9 35 9v-26z"/>
        </svg>
      </IconButton>
    </a>
  </div>

  <div className={classes.langWrapper}>
    <SelectLang toggleDir={toggleDir} />
  </div>
</Grid>

        </Grid>

        {/* Copyright centrado */}
        <div className={classes.copyWrapper}>
          <Typography variant="body2" display="block" color="textSecondary">
            &copy;  {brand.hosting.footerText}
          </Typography>
        </div>
      </Container>
    </div>
  );
}

Footer.propTypes = {
  toggleDir: PropTypes.func,
};

Footer.defaultProps = {
  toggleDir: () => {},
};

export default Footer;
