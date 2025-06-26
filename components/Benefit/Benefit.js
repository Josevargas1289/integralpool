import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { useTranslation } from 'next-i18next';
import img from 'public/images/imgAPI';
import Title from '../Title';
import useStyles from './benefit-style';

function Benefit() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <div className={classes.root}>
      <div className={classes.parallaxImg}>
        {!isTablet && (
          <ParallaxProvider>
            <Parallax
              translateY={[10, 40]}
              className="figure"
            >
              <img src={img.hosting[3]} alt="parallax-bg" />
            </Parallax>
          </ParallaxProvider>
        )}
      </div>
      <Container fixed>
        <div className={classes.wrapper}>
          <Grid container>
            <Grid item md={5} xs={12}>
              <div className={classes.desc}>
                <Title
                  caption={t('hosting-landing.benefit_headtitle')}
                  text={t('hosting-landing.benefit_title')}
                  align="left"
                  dark
                />
                <ul className={classes.list}>
                  <li>Vestibulum faucibus</li>
                  <li>Vivamus sit amet interdum elit</li>
                  <li>Donec dignissim</li>
                  <li>Quisque lacinia purus</li>
                  <li>Fusce placerat enim et odio molestie</li>
                  <li>Pellentesque ac bibendum tortor</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>And more…</li>
                </ul>
                <Button variant="contained" color="secondary" size="large">
                  {t('hosting-landing.getstarted')}
                </Button>
              </div>
            </Grid>
            <Grid item md={7} xs={12}>
              {!isTablet && (
                <figure className={classes.img}>
                  <img src={img.hosting[4]} alt="benefit" />
                </figure>
              )}
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Benefit;
