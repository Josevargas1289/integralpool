import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CollectionsIcon from '@mui/icons-material/Collections';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTranslation } from 'next-i18next';
import useStyles from './banner-style';

function Banner() {
  const { classes } = useStyles();
  const { t, i18n } = useTranslation('common');
  const locale = i18n.language === 'en' ? 'en' : 'es';

  return (
    <section className={classes.root} aria-labelledby="hero-title">
      <img src="/images/fondoBanner.webp" alt="" aria-hidden="true" fetchpriority="high" className={classes.background} />
      <div className={classes.overlay} />


      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.copy}>
          <Typography component="span" variant="overline" className={classes.eyebrow}>
            {t('hosting-landing.hero_eyebrow')}
          </Typography>
          <Typography component="h1" variant="h1" id="hero-title" className={classes.title}>
            {t('hosting-landing.banner_title')}
          </Typography>
          <Typography component="p" className={classes.subtitle}>
            {t('hosting-landing.banner_subtitle')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} className={classes.actions}>
            <Button variant="contained" color="secondary" size="large" href={`/${locale}/contact/`} className={classes.primaryAction}>
              {t('hosting-landing.banner_primary_cta')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<CollectionsIcon />}
              href="#galeries"
              className={classes.secondaryAction}
            >
              {t('hosting-landing.banner_view_projects')}
            </Button>
          </Stack>
          <div className={classes.proofPoints}>
            {['banner_proof_1', 'banner_proof_2', 'banner_proof_3', 'banner_proof_4'].map(item => (
              <span key={item}><CheckCircleOutlineIcon aria-hidden="true" />{t(`hosting-landing.${item}`)}</span>
            ))}
          </div>
        </div>
      </Container>
      <AnchorLink href="#promotion" className={classes.scrollCue} aria-label={t('hosting-landing.hero_scroll')}>
        <span>{t('hosting-landing.hero_scroll')}</span><ArrowDownwardIcon />
      </AnchorLink>
    </section>
  );
}

export default Banner;
