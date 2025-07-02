import React, { useState, useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';

import { useText } from 'theme/common';
import useStyles from './banner-style';
import fondoBanner from '../../public/images/fondoBanner.png'

function Banner() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const elem = useRef(null);

  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  // Media Query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Translation Function
  const { t } = useTranslation('common');

  const [hide, setHide] = useState(false);

  return (
    <div className={classes.root} ref={elem}>
      <div className={classes.decoWrap}>
        <div className={cx(classes.decoInner, hide && classes.hide)}>
          <div className={classes.illustration} ref={myRef} />
        </div>
      </div>
      <div className={classes.decoWrap}>
        <img
          src={fondoBanner}
          alt="imagen banner"
          className={classes.imageResponsive}
        />
      </div>
      <Container maxWidth="md">
        <div className={classes.bannerWrap}>
          <div className={classes.text}>
            <Typography variant="h4" className={text.title2}>
              {t("hosting-landing.banner_title")}
            </Typography>
            <Typography component="p" className={text.subtitle2}>
              {t("hosting-landing.banner_subtitle")}
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
