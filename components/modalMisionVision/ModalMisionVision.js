import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import useStyles from './modal-style';
import { useTranslation } from 'next-i18next';

function ModalMisionVision() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={classes.alignLeft}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          {t('modal.ver_mas')}
        </Button>
      </div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-mision-vision">
        <Box className={classes.modalPaper}>
          <div className={classes.section}>
            <Typography variant="h5" gutterBottom>{t('modal.mision_titulo')}</Typography>
            <Typography variant="body1" paragraph>{t('modal.mision_texto')}</Typography>
          </div>

          <Divider className={classes.divider} />

          <div className={classes.section}>
            <Typography variant="h5" gutterBottom>{t('modal.vision_titulo')}</Typography>
            <Typography variant="body1" paragraph>{t('modal.vision_texto')}</Typography>
          </div>

          <div className={classes.button}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              {t('modal.cerrar')}
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default ModalMisionVision;
