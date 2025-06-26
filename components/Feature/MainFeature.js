import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Title from '../Title';
import useStyles from './feature-style';

const featureList = [
  {
    img: '/images/hosting/feature1.png',
    title: 'titleitem1',
    desc: 'descitem1'
  },
  {
    img: '/images/hosting/feature2.png',
    title: 'titleitem2',
    desc: 'descitem2'
  },
  {
    img: '/images/hosting/feature3.png',
    title: 'titleitem3',
    desc: 'descitem3'
  }
];

function MainFeature() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  return (
    <div className={classes.mainFeature}>
      <Container fixed>
        <Title caption={t('hosting-landing.mainfeature_headtitle')} text={t('hosting-landing.mainfeature_title')} align="center" />
        <Grid container spacing={6} className={classes.grid}>
          {featureList.map((item, index) => (
            <Grid item md={4} key={index.toString()}>
              <div className={classes.item}>
                <figure>
                  <img src={item.img} alt={item.title} />
                </figure>
                <Typography variant="h6" className={text.subtitle2}>
                  {t('hosting-landing.mainfeature_' + item.title)}
                </Typography>
                <Typography component="p" className={text.paragraph}>
                  {t('hosting-landing.mainfeature_' + item.desc)}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default MainFeature;
