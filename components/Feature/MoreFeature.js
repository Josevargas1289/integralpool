import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'next-i18next';
import { useTextAlign, useText } from 'theme/common';
import Title from '../Title';
import useStyles from './feature-style';

function MoreFeature() {
  // Theme breakpoints
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Translation Function
  const { t } = useTranslation('common');

  const { classes, cx } = useStyles();
  const { classes: align } = useTextAlign();
  return (
    <div className={classes.moreFeature}>
      <div className={classes.chartDeco} />
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Grid
            direction={isMobile ? 'column-reverse' : 'row'}
            container
            spacing={6}
          >
            <Grid item md={6} xs={12}>
              <figure className={classes.illustration}>
                <img src="/images/hosting/illustration1.png" alt="feature" />
              </figure>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={classes.text}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInLeftShort"
                  delay={400}
                  duration={0.3}
                >
                  <div>
                    <Title
                      caption={t('hosting-landing.morefeature_headtitle1')}
                      text={t('hosting-landing.morefeature_title1')}
                      align={isMobile ? 'center' : 'left'}
                    />
                    <div className={isMobile ? align.textCenter : ''}>
                      <Typography className={text.subtitle2} align={isMobile ? 'center' : 'left'}>
                        {t('hosting-landing.morefeature_desc1')}
                      </Typography>
                      <Button variant="contained" color="primary">
                        {t('hosting-landing.learnmore')}
                      </Button>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </Grid>
          </Grid>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.item}>
          <Grid container spacing={6}>
            <Grid item md={6} xs={12}>
              <div className={cx(classes.text, align.textRight)}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInLeftShort"
                  delay={400}
                  duration={0.3}
                >
                  <div>
                    <Title
                      caption={t('hosting-landing.morefeature_headtitle2')}
                      text={t('hosting-landing.morefeature_title2')}
                      align={isMobile ? 'center' : 'right'}
                    />
                    <div className={isMobile ? align.textCenter : ''}>
                      <Typography className={text.subtitle2} align={isMobile ? 'center' : 'right'}>
                        {t('hosting-landing.morefeature_desc2')}
                      </Typography>
                      <Button variant="contained" color="primary">
                        {t('hosting-landing.learnmore')}
                      </Button>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <figure className={classes.illustration}>
                <img src="/images/hosting/illustration2.png" alt="feature" />
              </figure>
            </Grid>
          </Grid>
        </div>
        <Divider className={classes.divider} />
        <div className={cx(classes.item, classes.last)}>
          <Grid container>
            <Grid item sm={12}>
              <div className={cx(classes.text, align.textCenter)}>
                <Title
                  caption={t('hosting-landing.morefeature_headtitle3')}
                  text={t('hosting-landing.morefeature_title3')}
                  align="center"
                />
                <Typography className={text.subtitle2}>
                  {t('hosting-landing.morefeature_desc3')}
                </Typography>
                <Button variant="contained" color="primary">
                  {t('hosting-landing.learnmore')}
                </Button>
              </div>
              <figure className={classes.illustration}>
                <img src="/images/hosting/illustration3.png" alt="feature" />
              </figure>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default MoreFeature;
