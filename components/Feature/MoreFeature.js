import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'next-i18next';
import Title from '../Title';
import Carousel from '../Carrusell/Carrusell';
import ModalMisionVision from '../modalMisionVision/ModalMisionVision';
import useStyles from './feature-style';

function MoreFeature() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation('common');
  const { classes } = useStyles();

  return (
    <div className={classes.moreFeature}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid item md={7} xs={12}>
            <figure className={classes.illustration}>
              <Carousel />
              <figcaption className={classes.imageCaption}>
                <span>Integral Pool</span>
                {t('hosting-landing.about_image_caption')}
              </figcaption>
            </figure>
          </Grid>
          <Grid item md={5} xs={12}>
            <div className={classes.aboutCopy}>
              <Title
                caption={t('hosting-landing.morefeature_headtitle1')}
                text={t('hosting-landing.morefeature_title1')}
                align={isMobile ? 'center' : 'left'}
              />
              <Typography className={classes.aboutDescription}>
                {t('hosting-landing.morefeature_desc1')}
              </Typography>
              <div className={classes.principles}>
                {['about_principle_1', 'about_principle_2', 'about_principle_3'].map(item => (
                  <span key={item}>{t(`hosting-landing.${item}`)}</span>
                ))}
              </div>
              <div className={classes.aboutActions}>
                <Button
                  variant="contained"
                  color="primary"
                  href="#feature"
                  endIcon={<ArrowForwardIcon />}
                  className={classes.roundedButton}
                >
                  {t('hosting-landing.about_services_cta')}
                </Button>
                <ModalMisionVision />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MoreFeature;