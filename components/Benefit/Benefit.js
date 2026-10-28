import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useTranslation } from 'next-i18next';
import Title from '../Title';
import useStyles from './benefit-style';

import jandyLogo from 'public/images/ally/imgjLogoJandy.png';
import pentairLogo from 'public/images/ally/imgLogoPentair.png';
import haywardLogo from 'public/images/ally/imgLogoHayward.svg';
import speckLogo from 'public/images/ally/speckPoon.svg';

const allies = [
  { name: 'Jandy', url: 'https://www.jandy.com/', image: jandyLogo },
  { name: 'Pentair', url: 'https://www.pentair.com/', image: pentairLogo },
  { name: 'Hayward', url: 'https://www.hayward-pool.com/', image: haywardLogo },
  { name: 'Speck', url: 'https://usa.speck-pumps.com/', image: speckLogo },
];

function Allies() {
  const { classes } = useStyles();
  const { t, i18n } = useTranslation('common');
  const locale = i18n.language === 'en' ? 'en' : 'es';

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid item md={5} xs={12}>
            <div className={classes.desc}>
              <Title
                caption={t('hosting-landing.allies_headtitle')}
                text={t('hosting-landing.allies_title')}
                align="left"
              />
              <p>{t('hosting-landing.allies_description')}</p>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                href={`/${locale}/contact/`}
                endIcon={<ArrowOutwardIcon />}
              >
                {t('hosting-landing.getstarted')}
              </Button>
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <div className={classes.logoGrid}>
              {allies.map(ally => (
                <a
                  key={ally.name}
                  href={ally.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.logoItem}
                  aria-label={`${ally.name} — ${t('hosting-landing.partner_website')}`}
                >
                  <img src={ally.image} alt={ally.name} className={classes.logoImage} />
                </a>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Allies;