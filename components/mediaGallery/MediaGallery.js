import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import Title from '../Title';
import Slider from 'react-slick';
import useStyles from './mediaGallery-style';
import mediaListRaw from '../mediaGallery/mediaList.json';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// ✅ Flechas personalizadas para escritorio
const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: 'absolute',
      left: -12,
      top: '35%',
      zIndex: 2,
      width: 36,
      height: 36,
      backgroundColor: '#333',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    }}
  >
    <ArrowBackIosNewIcon sx={{ color: '#fff', fontSize: 18 }} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: 'absolute',
      right: -12,
      top: '35%',
      zIndex: 2,
      width: 36,
      height: 36,
      backgroundColor: '#333',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    }}
  >
    <ArrowForwardIosIcon sx={{ color: '#fff', fontSize: 18 }} />
  </div>
);

function MediaGallery() {
  const { t } = useTranslation('common');
  const { classes } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [currentSlide, setCurrentSlide] = useState(0);

  const mediaList = [
    // ...mediaListRaw.filter(item => item.type === 'video'),
    ...mediaListRaw.filter(item => item.type === 'image')
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    arrows: !isMobile,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, next) => setCurrentSlide(next),
    prevArrow: !isMobile && <PrevArrow />,
    nextArrow: !isMobile && <NextArrow />,
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

        {/* Dots tipo Instagram ya existentes */}
        {isMobile && (
          <div className={classes.customDots}>
            {[...Array(5)].map((_, i) => {
              const groupIndex = currentSlide % 5;
              return (
                <span
                  key={i}
                  className={`${classes.dot} ${i === groupIndex ? classes.activeDot : ''}`}
                />
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
}

export default MediaGallery;
