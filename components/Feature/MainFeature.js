import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PoolIcon from '@mui/icons-material/Pool';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import { useTranslation } from 'next-i18next';
import Title from '../Title';
import useStyles from './feature-style';

const featureList = [
  { icon: DesignServicesIcon, title: 'titleitem1', desc: 'descitem1' },
  { icon: PoolIcon, title: 'titleitem2', desc: 'descitem2' },
  { icon: SettingsRemoteIcon, title: 'titleitem3', desc: 'descitem3' },
];

function MainFeature() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  return (
    <div className={classes.mainFeature}>
      <Container fixed>
        <Title caption={t('hosting-landing.mainfeature_headtitle')} text={t('hosting-landing.mainfeature_title')} align="center" />
        <Grid container spacing={6} className={classes.grid}>
          {featureList.map((item, index) => {
            const ServiceIcon = item.icon;
            return (
              <Grid item xs={12} md={4} key={item.title}>
                <div className={classes.item}>
                  <div className={classes.serviceCardTop}>
                    <figure aria-hidden="true">
                      <ServiceIcon className={classes.serviceIcon} />
                    </figure>
                    <span className={classes.serviceNumber} aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <Typography component="h3" className={classes.serviceTitle}>
                    {t(`hosting-landing.mainfeature_${item.title}`)}
                  </Typography>
                  <Typography component="p" className={classes.serviceDescription}>
                    {t(`hosting-landing.mainfeature_${item.desc}`)}
                  </Typography>
                  <div className={classes.serviceCardBase} aria-hidden="true" />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default MainFeature;