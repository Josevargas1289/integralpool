import React from 'react';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import Title from '../Title';
import Slider from 'react-slick';
import useStyles from './mediaGallery-style';
import mediaListRaw from '../mediaGallery/mediaList.json';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function MediaGallery() {
  const { t } = useTranslation('common');
  const { classes } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // ✅ Ordena primero los videos, luego las imágenes
  const mediaList = [
    ...mediaListRaw.filter(item => item.type === 'video'),
    ...mediaListRaw.filter(item => item.type === 'image')
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: !isMobile,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className={classes.root}>
      <Container fixed>
        <div className={classes.title}>
          <Title
            caption={t('hosting-landing.gallery_headtitle')}
            text={t('hosting-landing.gallery_title')}
            align="center"
          />
          <p>{t('hosting-landing.gallery_description')}</p>
        </div>

        <Slider {...settings}>
          {mediaList.map((media, index) => (
            <div key={index} className={classes.mediaItem}>
              {media.type === 'image' ? (
                <img src={media.src} alt={`media-${index}`} loading="lazy" />
              ) : (
                <video src={media.src} controls preload="none" />
              )}
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default MediaGallery;
