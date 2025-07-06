import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useTranslation } from 'next-i18next';
import useStyles from './style';

const images = [
  { src: '/images/carousel/img1.jpg', titleKey: 'carousel.title1', subtitleKey: 'carousel.subtitle1' },
  { src: '/images/carousel/img2.jpg', titleKey: 'carousel.title2', subtitleKey: 'carousel.subtitle2' },
  { src: '/images/carousel/img3.jpg', titleKey: 'carousel.title3', subtitleKey: 'carousel.subtitle3' },
  { src: '/images/carousel/img4.jpg', titleKey: 'carousel.title4', subtitleKey: 'carousel.subtitle4' },
  { src: '/images/carousel/img5.jpg', titleKey: 'carousel.title5', subtitleKey: 'carousel.subtitle5' },
  { src: '/images/carousel/img6.jpg', titleKey: 'carousel.title6', subtitleKey: 'carousel.subtitle6' },
  { src: '/images/carousel/img7.jpg', titleKey: 'carousel.title7', subtitleKey: 'carousel.subtitle7' },
  { src: '/images/carousel/img8.jpg', titleKey: 'carousel.title8', subtitleKey: 'carousel.subtitle8' },
  { src: '/images/carousel/img9.jpg', titleKey: 'carousel.title9', subtitleKey: 'carousel.subtitle9' },
];

function Carousel() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box className={classes.root}>
      <Button
        className={cx(classes.navButtons, classes.prevButton)}
        onClick={handlePrev}
      >
        <ArrowBack />
      </Button>

      <Box className={classes.imageContainer}>
        <img
          src={images[index].src}
          alt={`Carousel ${index + 1}`}
          className={classes.image}
        />
        <Box className={classes.overlay}>
          <Typography className={classes.title}>
            {t(images[index].titleKey)}
          </Typography>
          <Typography className={classes.subtitle}>
            {t(images[index].subtitleKey)}
          </Typography>
        </Box>
      </Box>

      <Button
        className={cx(classes.navButtons, classes.nextButton)}
        onClick={handleNext}
      >
        <ArrowForward />
      </Button>
    </Box>
  );
}

export default Carousel;
