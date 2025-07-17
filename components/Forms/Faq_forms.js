import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import brand from 'public/text/brand';
import routeLink from 'public/text/link';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ParallaxCloud from '../Parallax/Cloud';
import Link from '../Link';
import useStyles from './form-style';

function FaqForms() {
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();
  const { classes: text } = useText();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

 const faqs = [
  { q: t('faq.q1'), a: t('faq.a1') },
  { q: t('faq.q2'), a: t('faq.a2') },
  { q: t('faq.q3'), a: t('faq.a3') },
  { q: t('faq.q4'), a: t('faq.a4') },
  { q: t('faq.q5'), a: t('faq.a5') },
  { q: t('faq.q6'), a: t('faq.a6') },
  { q: t('faq.q7'), a: t('faq.a7') },
  { q: t('faq.q8'), a: t('faq.a8') },
  { q: t('faq.q9'), a: t('faq.a9') },
  { q: t('faq.q10'), a: t('faq.a10') },
  { q: t('faq.q11'), a: t('faq.a11') },
  { q: t('faq.q12'), a: t('faq.a12') },
  { q: t('faq.q13'), a: t('faq.a13') },
  { q: t('faq.q14'), a: t('faq.a14') },
  { q: t('faq.q15'), a: t('faq.a15') }
];


  return (
    <div className={classes.pageWrap}>
      <div className={classes.cloudDeco}>
        <ParallaxCloud />
      </div>
      {!isDesktop && (
        <div className={cx(classes.logo, classes.logoHeader)}>
          <Link href={routeLink.hosting.home}>
            <img src={brand.hosting.img} alt="logo" />
            <Typography component="span" className={text.title}>
              {brand.hosting.projectName}
            </Typography>
          </Link>
        </div>
      )}
      <Container maxWidth="md" className={classes.innerWrap}>
        <IconButton component={Link} href={routeLink.hosting.home} className={classes.backtohome} size="large">
          <span>
            <i className="ion-ios-home-outline" />
            <i className="ion-ios-arrow-round-back" />
          </span>
        </IconButton>
        <Paper className={cx(classes.formBox, 'fragment-fadeUp')}>
          <div className={classes.frmDeco}>
            <svg className={classes.cloud}>
              <use xlinkHref="/images/hosting/cloud_bottom_frm.svg#main" />
            </svg>
          </div>
          <div className={classes.fullFromWrap}>
            <Typography
              variant="h3"
              align="center"
              className={cx(classes.title, text.title)}
              gutterBottom
            >
              {t('hosting-landing.header_faq')}
            </Typography>
            <Typography className={cx(classes.desc, text.subtitle2)}>
              {t('faq_subtitle')}
            </Typography>
            <div style={{ marginTop: '2rem' }}>
              {faqs.map((item, index) => (
                <Accordion key={index}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1">{item.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="textSecondary">
                      {item.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default FaqForms;
