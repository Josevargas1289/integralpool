import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import Slider from 'react-slick';
import Title from '../Title';
import useStyles from './benefit-style';

// Importación directa de imágenes
import jandyLogo from 'public/images/ally/imgjLogoJandy.png';
import pentairLogo from 'public/images/ally/imgLogoPentair.png';
import haywardLogo from 'public/images/ally/imgLogoHayward.svg';
import specPoon from 'public/images/ally/speckPoon.svg';


function Allies() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const allies = [
    {
      name: 'Jandy',
      url: 'https://www.jandy.com/',
      image: jandyLogo
    },
    {
      name: 'Pentair',
      url: 'https://www.pentair.com/',
      image: pentairLogo
    },
    {
      name: 'Hayward',
      url: 'https://www.hayward-pool.com/',
      image: haywardLogo
    },
     {
      name: 'speck',
      url: 'https://usa.speck-pumps.com/',
      image: specPoon
    },
    {
      name: 'Jandy',
      url: 'https://www.jandy.com/',
      image: jandyLogo
    },
    {
      name: 'Pentair',
      url: 'https://www.pentair.com/',
      image: pentairLogo
    },
    {
      name: 'Hayward',
      url: 'https://www.hayward-pool.com/',
      image: haywardLogo
    },
     {
      name: 'speck',
      url: 'https://usa.speck-pumps.com/',
      image: specPoon
    },
     {
      name: 'Jandy',
      url: 'https://www.jandy.com/',
      image: jandyLogo
    },
    {
      name: 'Pentair',
      url: 'https://www.pentair.com/',
      image: pentairLogo
    },
    {
      name: 'Hayward',
      url: 'https://www.hayward-pool.com/',
      image: haywardLogo
    },
     {
      name: 'speck',
      url: 'https://usa.speck-pumps.com/',
      image: specPoon
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

 return (
  <div className={classes.root}>
    <Container fixed>
      <div className={classes.wrapper}>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={5} xs={12}>
            <div className={classes.desc}>
              <Title
                caption={t('hosting-landing.allies_headtitle')}
                text={t('hosting-landing.allies_title')}
                align="left"
                dark
              />
              <p style={{ color: '#fff', marginBottom: 24 }}>
                {t('hosting-landing.allies_description')}
              </p>
              <Button variant="contained" color="secondary" size="large" href="/contact">
                {t('hosting-landing.getstarted')}
              </Button>
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <div className={classes.carouselWrapper}>
              <Slider {...settings}>
                {allies.map((ally, index) => (
                  <div key={index} className={classes.logoItem}>
                    <a href={ally.url} target="_blank" rel="noopener noreferrer">
                      <img src={ally.image} alt={ally.name} className={classes.logoImage} />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  </div>
);

}

export default Allies;
