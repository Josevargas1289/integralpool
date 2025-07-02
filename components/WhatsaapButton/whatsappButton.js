import React from 'react';
import { Fab, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import useStyles from './style';

function WhatsAppButton() {
  const { classes } = useStyles();

  return (
    <Zoom in timeout={300}>
      <a
        href="https://wa.me/573162330121"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.fab}
        aria-label="WhatsApp"
      >
        <Fab color="success" size="medium">
          <WhatsAppIcon />
        </Fab>
      </a>
    </Zoom>
  );
}

export default WhatsAppButton;
