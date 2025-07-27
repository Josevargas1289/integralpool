import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import useStyles from './modalFilosofia-style';
import { useTranslation } from 'next-i18next';

function ModalMisionVision({ buttonText, modalTitle, modalContent }) {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Procesar la descripción para mostrar viñetas
  const descItems = t("modal.filosofia_descripcion").split('\n');
  const lastItem = descItems.length > 0 ? descItems[descItems.length - 1] : '';
  const bulletItems = descItems.length > 1 ? descItems.slice(0, -1) : [];
  return (
    <>
      <div className={classes.alignLeft}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          {t("modal.filosofia")}
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-filosofia"
      >
        <Box className={classes.modalPaper}>
          <div className={classes.section}>
            <Typography variant="h5" color="primary.dark" gutterBottom>
              {t("modal.filosofia_titulo")}
            </Typography>
            <Divider className={classes.divider} />
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              {bulletItems.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '8px' }}>
                  <Typography variant="body1" component="span">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography variant="body1" paragraph style={{ marginTop: '8px' }}>
              {lastItem}
            </Typography>
          </div>
          <div className={classes.button}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              {t("modal.cerrar")}
            </Button>
          </div>
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
