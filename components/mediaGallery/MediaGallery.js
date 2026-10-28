import React, { useState } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'next-i18next';
import Title from '../Title';
import useStyles from './mediaGallery-style';
import projects from './projects';

const concepts = [
  { id: 'new_pool', image: '/images/concepts/backyard-pool-concept.jpg' },
  { id: 'renovation', image: '/images/concepts/waterfront-renovation-concept.jpg' },
];

function MediaGallery() {
  const { t, i18n } = useTranslation('common');
  const { classes } = useStyles();
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const locale = i18n.language === 'en' ? 'en' : 'es';
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const openProject = project => {
    setSelectedProject(project);
    setActiveImage(0);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.heading}>
          <Title caption={t('hosting-landing.gallery_headtitle')} text={t('hosting-landing.gallery_title')} align="center" />
          <p>{t('hosting-landing.gallery_description')}</p>
        </div>

        <div className={classes.projectGrid}>
          {projects.map(project => (
            <article key={project.id} className={classes.project}>
              <button
                type="button"
                className={classes.projectButton}
                onClick={() => openProject(project)}
                aria-label={t('hosting-landing.project_open', { title: t('hosting-landing.projects.' + project.id + '.title') })}
              >
                <img
                  src={project.cover}
                  alt={t('hosting-landing.projects.' + project.id + '.alt')}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                />
                <span className={classes.projectCaption}>
                  <span>
                    <small>{t('hosting-landing.projects.' + project.id + '.category')}</small>
                    <strong>{t('hosting-landing.projects.' + project.id + '.title')}</strong>
                  </span>
                  <ArrowOutwardIcon aria-hidden="true" />
                </span>
              </button>
            </article>
          ))}
        </div>

        <div className={classes.galleryAction}>
          <Button variant="outlined" color="primary" size="large" startIcon={<InstagramIcon />} href="https://www.instagram.com/integralpoolservices/" target="_blank" rel="noopener noreferrer">
            {t('hosting-landing.gallery_cta')}
          </Button>
        </div>

        <section className={classes.conceptSection} aria-labelledby="concept-title">
          <Typography component="h3" variant="h4" id="concept-title" className={classes.conceptTitle}>
            {t('hosting-landing.concept_title')}
          </Typography>
          <Typography className={classes.conceptIntro}>{t('hosting-landing.concept_intro')}</Typography>
          <div className={classes.conceptGrid}>
            {concepts.map(concept => (
              <article key={concept.id} className={classes.conceptCard}>
                <a href={concept.image} target="_blank" rel="noopener noreferrer" aria-label={t('hosting-landing.concept_open', { title: t('hosting-landing.concepts.' + concept.id) })}>
                  <span className={classes.conceptImage}>
                    <img src={concept.image} alt={t('hosting-landing.concepts.' + concept.id)} loading="lazy" decoding="async" width="2056" height="765" />
                    <img src={concept.image} alt="" aria-hidden="true" loading="lazy" decoding="async" width="2056" height="765" />
                    <span className={classes.beforeLabel}>{t('hosting-landing.concept_before')}</span>
                    <span className={classes.afterLabel}>{t('hosting-landing.concept_after')}</span>
                  </span>
                </a>
                <div className={classes.conceptMeta}>
                  <strong>{t('hosting-landing.concepts.' + concept.id)}</strong>
                  <span>{t('hosting-landing.concept_captions.' + concept.id)}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Container>

      <Dialog open={Boolean(selectedProject)} onClose={() => setSelectedProject(null)} fullWidth fullScreen={isSmallScreen} maxWidth="md" aria-labelledby="project-dialog-title">
        {selectedProject && (
          <>
            <DialogTitle className={classes.dialogTitle} id="project-dialog-title">
              <span>{t('hosting-landing.projects.' + selectedProject.id + '.title')}</span>
              <IconButton onClick={() => setSelectedProject(null)} aria-label={t('hosting-landing.project_close')}><CloseIcon /></IconButton>
            </DialogTitle>
            <DialogContent>
              <Typography className={classes.projectRegion}>{t('hosting-landing.project_region')}</Typography>
              <img
                className={classes.detailImage}
                src={selectedProject.images[activeImage]}
                alt={t('hosting-landing.projects.' + selectedProject.id + '.alt') + ' ' + (activeImage + 1)}
                width="1200"
                height="900"
              />
              <div className={classes.thumbnailRow}>
                {selectedProject.images.map((image, index) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => setActiveImage(index)}
                    aria-label={t('hosting-landing.project_photo', { number: index + 1 })}
                    aria-current={activeImage === index ? 'true' : undefined}
                    className={activeImage === index ? classes.activeThumbnail : ''}
                  >
                    <img src={image} alt="" loading="lazy" width="110" height="82" />
                  </button>
                ))}
              </div>
              <Typography className={classes.projectDescription}>{t('hosting-landing.projects.' + selectedProject.id + '.description')}</Typography>
              <Button variant="contained" color="secondary" href={'/' + locale + '/contact/'}>
                {t('hosting-landing.project_cta')}
              </Button>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
}

export default MediaGallery;