import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EngineeringIcon from '@mui/icons-material/Engineering';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'next-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import MainContainer from 'components/MainContainer';
import Banner from 'components/Banner';
import Feature from 'components/Feature';
import Benefit from 'components/Benefit';
import PageNav from 'components/PageNav';
import MoreFeature from 'components/Feature/MoreFeature';
import MediaGallery from '../../components/mediaGallery/MediaGallery';

const siteUrl = 'https://integralpool.com';
const whatsappUrl = 'https://wa.me/17867701666?text=Hola%2C%20quiero%20solicitar%20una%20visita%20y%20cotizaci%C3%B3n%20para%20mi%20proyecto.';

const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  containerWrap: { '& > section': { position: 'relative', scrollMarginTop: 90 } },
  spaceTopShort: { paddingTop: 0 },
  processSection: {
    position: 'relative', padding: theme.spacing(13, 0), overflow: 'hidden',
    color: theme.palette.text.primary, background: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.divider}`, borderBottom: `1px solid ${theme.palette.divider}`,
    '&:before': {
      content: '""', position: 'absolute', width: 520, height: 520, top: -340, left: -260,
      border: `1px solid ${alpha(theme.palette.primary.main, 0.16)}`, borderRadius: '50%',
      boxShadow: `0 0 0 75px ${alpha(theme.palette.primary.main, 0.028)}, 0 0 0 150px ${alpha(theme.palette.primary.main, 0.018)}`,
    },
    [theme.breakpoints.down('md')]: { padding: theme.spacing(9, 0) },
  },
  eyebrow: { display: 'block', textAlign: 'center', color: theme.palette.primary.dark, fontWeight: 700, letterSpacing: '0.14em', marginBottom: theme.spacing(2) },
  processTitle: { maxWidth: 760, margin: '0 auto', color: theme.palette.text.primary, textAlign: 'center', fontSize: 'clamp(2.35rem, 4.7vw, 4rem)', fontWeight: 600, lineHeight: 1.06, letterSpacing: '-0.035em' },
  processIntro: { maxWidth: 650, margin: `${theme.spacing(3)} auto 0`, color: theme.palette.text.secondary, textAlign: 'center', fontSize: 16, lineHeight: 1.75 },
  processGrid: { position: 'relative', marginTop: `${theme.spacing(6)} !important`, alignItems: 'stretch' },
  processCard: {
    position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 330,
    padding: theme.spacing(4.5), overflow: 'hidden', color: '#ffffff',
    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`, borderRadius: 22,
    background: 'linear-gradient(145deg, #092e45 0%, #061f34 65%, #061a2d 100%)',
    boxShadow: '0 20px 48px rgba(3, 27, 45, 0.16)',
    transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
    '&:before': {
      content: '""', position: 'absolute', width: 220, height: 220, right: -115, top: -145,
      borderRadius: '50%', border: '1px solid rgba(101, 224, 231, 0.17)',
      boxShadow: '0 0 0 38px rgba(101, 224, 231, 0.025)', pointerEvents: 'none',
    },
    '&:hover': {
      transform: 'translateY(-6px)', borderColor: alpha(theme.palette.primary.main, 0.65),
      boxShadow: '0 28px 55px rgba(3, 27, 45, 0.24)',
    },
    [theme.breakpoints.down('md')]: { minHeight: 0 },
    [theme.breakpoints.down('sm')]: { padding: theme.spacing(3.5), borderRadius: 18 },
  },
  stepHeader: {
    position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
    gap: theme.spacing(2), marginBottom: theme.spacing(4.5),
  },
  stepIcon: {
    width: 66, height: 66, flexShrink: 0, display: 'grid', placeItems: 'center',
    color: '#65e0e7', border: '1px solid rgba(101, 224, 231, 0.3)', borderRadius: 17,
    background: 'rgba(101, 224, 231, 0.11)',
    '& svg': { fontSize: 31 },
  },
  stepNumber: {
    flexShrink: 0, padding: theme.spacing(0.45, 1.15), color: '#8eeaf0',
    border: '1px solid rgba(101, 224, 231, 0.22)', borderRadius: 20,
    background: 'rgba(101, 224, 231, 0.07)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1.8,
  },
  stepTitle: {
    position: 'relative', marginBottom: theme.spacing(1.7), color: '#ffffff',
    fontSize: 'clamp(1.4rem, 2vw, 1.6rem)', fontWeight: 700, lineHeight: 1.22,
  },
  stepDescription: {
    position: 'relative', margin: 0, color: 'rgba(255, 255, 255, 0.76)', fontSize: 15.5, lineHeight: 1.72,
  },
  stepTrack: {
    position: 'relative', height: 4, marginTop: 'auto', paddingTop: theme.spacing(4),
    boxSizing: 'content-box', backgroundClip: 'content-box', backgroundColor: 'rgba(255, 255, 255, 0.13)',
    '& span': {
      display: 'block', height: 4, borderRadius: 4,
      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    },
  },
  processAction: { display: 'flex', justifyContent: 'center', marginTop: theme.spacing(5), '& a': { maxWidth: '100%', borderRadius: 10, fontWeight: 700, padding: theme.spacing(1.45, 3.2), whiteSpace: 'normal', textAlign: 'center' } },
  finalCta: {
    position: 'relative', minHeight: 500, display: 'flex', alignItems: 'center', padding: theme.spacing(10, 0), overflow: 'hidden',
    color: theme.palette.common.white, textAlign: 'center',
    background: 'linear-gradient(110deg, rgba(5,41,75,0.88), rgba(13,76,105,0.70)), url(/images/carousel/img5.jpg) center/cover no-repeat',
    '&:before': { content: '""', position: 'absolute', top: 0, left: '50%', width: 96, height: 4, transform: 'translateX(-50%)', background: theme.palette.primary.main },
    '& h2': { maxWidth: 800, margin: '0 auto', color: theme.palette.common.white, fontSize: 'clamp(2.35rem, 4.8vw, 4.25rem)', fontWeight: 600, lineHeight: 1.06, letterSpacing: '-0.035em' },
    '& p': { maxWidth: 650, margin: `${theme.spacing(3)} auto 0`, color: 'rgba(255,255,255,0.82)', fontSize: 17, lineHeight: 1.75 },
  },
  finalActions: { marginTop: theme.spacing(4), '& a': { maxWidth: '100%', minHeight: 52, borderRadius: 10, fontWeight: 700, padding: theme.spacing(1.4, 3), whiteSpace: 'normal', textAlign: 'center' } },
  whatsappAction: { color: theme.palette.common.white, borderColor: 'rgba(255,255,255,0.72)', '&:hover': { color: theme.palette.common.white, borderColor: theme.palette.primary.main, background: alpha(theme.palette.primary.main, 0.13) } },
}));
function Landing(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const { t, i18n } = useTranslation('common');
  const locale = i18n.language === 'en' ? 'en' : 'es';
  const canonicalUrl = `${siteUrl}/${locale}/`;
  const seoDescription = t('hosting-landing.seo_description');

  const processSteps = [
    { icon: <SearchIcon />, title: 'process_step_1_title', desc: 'process_step_1_desc' },
    { icon: <DesignServicesIcon />, title: 'process_step_2_title', desc: 'process_step_2_desc' },
    { icon: <EngineeringIcon />, title: 'process_step_3_title', desc: 'process_step_3_desc' },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Integral Pool',
    url: siteUrl,
    image: `${siteUrl}/og.png`,
    description: seoDescription,
    telephone: ['+1-786-770-1666', '+57-302-209-2633'],
    areaServed: ['Miami', 'South Florida'],
    sameAs: [
      'https://www.youtube.com/@integralpool',
      'https://www.instagram.com/integralpoolservices/',
      'https://www.tiktok.com/@integral.pools',
    ],
  };

  return (
    <React.Fragment>
      <Head>
        <title>{t('hosting-landing.seo_title')}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="es" href={`${siteUrl}/es/`} />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/en/`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/en/`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Integral Pool" />
        <meta property="og:locale" content={locale === 'es' ? 'es_US' : 'en_US'} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={t('hosting-landing.seo_title')} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`${siteUrl}/og.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('hosting-landing.seo_title')} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`${siteUrl}/og.png`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <CssBaseline />
      <section id="home" />
      <MainContainer onToggleDark={onToggleDark} onToggleDir={onToggleDir}>
        <Fragment>
          <main className={classes.containerWrap}>
            <section id="search">
              <Banner />
            </section>
            <section id="promotion">
              <MoreFeature />
            </section>
            <section id="feature">
              <Feature />
            </section>
            <section id="process" className={classes.processSection}>
              <Container fixed>
                <Typography variant="overline" className={classes.eyebrow}>
                  {t('hosting-landing.process_eyebrow')}
                </Typography>
                <Typography component="h2" variant="h3" className={classes.processTitle}>
                  {t('hosting-landing.process_title')}
                </Typography>
                <Typography className={classes.processIntro}>
                  {t('hosting-landing.process_description')}
                </Typography>
                <Grid container spacing={3} className={classes.processGrid}>
                  {processSteps.map((step, index) => (
                    <Grid item xs={12} md={4} key={step.title}>
                      <Paper component="article" elevation={0} className={classes.processCard}>
                        <div className={classes.stepHeader}>
                          <div className={classes.stepIcon} aria-hidden="true">{step.icon}</div>
                          <Typography variant="overline" className={classes.stepNumber}>
                            {t('hosting-landing.process_step_label', { number: index + 1 })}
                          </Typography>
                        </div>
                        <Typography component="h3" className={classes.stepTitle}>
                          {t(`hosting-landing.${step.title}`)}
                        </Typography>
                        <Typography component="p" className={classes.stepDescription}>
                          {t(`hosting-landing.${step.desc}`)}
                        </Typography>
                        <div className={classes.stepTrack} aria-hidden="true">
                          <span style={{ width: `${((index + 1) / processSteps.length) * 100}%` }} />
                        </div>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
                <div className={classes.processAction}>
                  <Button variant="contained" color="secondary" size="large" href={`/${locale}/contact/`}>
                    {t('hosting-landing.process_cta')}
                  </Button>
                </div>
              </Container>
            </section>
            <section id="benefit">
              <Benefit />
            </section>
            <section id="galeries" className={classes.spaceTopShort}>
              <MediaGallery />
            </section>
            <section className={classes.finalCta} aria-labelledby="final-cta-title">
              <Container maxWidth="md">
                <Typography component="h2" variant="h3" id="final-cta-title">
                  {t('hosting-landing.final_cta_title')}
                </Typography>
                <Typography>{t('hosting-landing.final_cta_description')}</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" className={classes.finalActions}>
                  <Button variant="contained" color="secondary" size="large" href={`/${locale}/contact/`}>
                    {t('hosting-landing.banner_primary_cta')}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.whatsappAction}
                  >
                    {t('hosting-landing.banner_secondary_cta')}
                  </Button>
                </Stack>
              </Container>
            </section>
          </main>
          {!isTablet && <PageNav />}
        </Fragment>
      </MainContainer>
    </React.Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Landing;