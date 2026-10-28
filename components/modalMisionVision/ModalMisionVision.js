import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import useStyles from './modal-style';
import { useTranslation } from 'next-i18next';

function ModalMisionVision({ buttonText, modalTitle, modalContent }) {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const hasCustomContent = Boolean(modalTitle && modalContent);

  return (
    <>
      <div className={classes.alignLeft}>
        <Button variant="outlined" color="primary" onClick={handleOpen} className={classes.triggerButton}>
          {buttonText || t('modal.ver_mas')}
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-mision-vision"
        className={classes.modalRoot}
      >
        <Box className={classes.modalPaper}>
          <div className={classes.accentLine} />

          <header className={classes.modalHeader}>
            <div className={classes.modalIdentity}>
              <img className={classes.brandLogo} src="/images/hosting-logo.png" alt="" width="52" height="52" />
              <div>
                <span className={classes.eyebrow}>Integral Pool</span>
                <Typography id="modal-mision-vision" component="h2" className={classes.modalTitle}>
                  {hasCustomContent
                    ? t(modalTitle)
                    : t('modal.vision_titulo') + ' / ' + t('modal.mision_titulo')}
                </Typography>
              </div>
            </div>

            <IconButton
              onClick={handleClose}
              className={classes.closeButton}
              aria-label={t('modal.cerrar')}
            >
              <CloseIcon />
            </IconButton>
          </header>

          <div className={classes.modalBody}>
            {hasCustomContent ? (
              <section className={cx(classes.section, classes.singleSection)}>
                <div className={classes.cardHeading}>
                  <span className={cx(classes.cardIcon, classes.visionIcon)} aria-hidden="true">
                    <VisibilityOutlinedIcon />
                  </span>
                  <Typography component="h3" className={classes.sectionTitle}>
                    {t(modalTitle)}
                  </Typography>
                </div>
                <Typography component="p" className={classes.sectionText} style={{ whiteSpace: 'pre-line' }}>
                  {t(modalContent)}
                </Typography>
              </section>
            ) : (
              <div className={classes.contentGrid}>
                <section className={cx(classes.section, classes.visionCard)}>
                  <div className={classes.cardHeading}>
                    <span className={cx(classes.cardIcon, classes.visionIcon)} aria-hidden="true">
                      <VisibilityOutlinedIcon />
                    </span>
                    <div>
                      <Typography component="h3" className={classes.sectionTitle}>
                        {t('modal.vision_titulo')}
                      </Typography>
                    </div>
                  </div>
                  <Typography component="p" className={classes.sectionText}>
                    {t('modal.vision_texto')}
                  </Typography>
                </section>

                <section className={cx(classes.section, classes.missionCard)}>
                  <div className={classes.cardHeading}>
                    <span className={cx(classes.cardIcon, classes.missionIcon)} aria-hidden="true">
                      <TrackChangesOutlinedIcon />
                    </span>
                    <div>
                      <Typography component="h3" className={classes.sectionTitle}>
                        {t('modal.mision_titulo')}
                      </Typography>
                    </div>
                  </div>
                  <Typography component="p" className={classes.sectionText}>
                    {t('modal.mision_texto')}
                  </Typography>
                </section>
              </div>
            )}
          </div>

          <footer className={classes.modalFooter}>
            <span className={classes.footerLine} aria-hidden="true" />
            <Button variant="contained" color="primary" onClick={handleClose} className={classes.closeAction}>
              {t('modal.cerrar')}
            </Button>
          </footer>
        </Box>
      </Modal>
    </>
  );
}

ModalMisionVision.defaultProps = {
  buttonText: undefined,
  modalTitle: undefined,
  modalContent: undefined,
};

export default ModalMisionVision;
