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
    { key: 'process', href: '#pricing' },
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
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="Twitter" className={classes.margin} size="small">
                  <i className="ion-logo-twitter" />
                </IconButton>
              </a>
              <a href="https://www.facebook.com/share/15gF7rWhUi/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="Facebook" className={classes.margin} size="small">
                  <i className="ion-logo-facebook" />
                </IconButton>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="Instagram" className={classes.margin} size="small">
                  <i className="ion-logo-instagram" />
                </IconButton>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="LinkedIn" className={classes.margin} size="small">
                  <i className="ion-logo-linkedin" />
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
