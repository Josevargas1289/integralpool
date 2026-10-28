import React, { useEffect, useRef, useState } from 'react';
import { Fab, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import useStyles from './style';

function WhatsAppButton() {
  const { classes, cx } = useStyles();
  const [scrolling, setScrolling] = useState(false);
  const stopTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      window.clearTimeout(stopTimer.current);
      stopTimer.current = window.setTimeout(() => setScrolling(false), 180);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(stopTimer.current);
    };
  }, []);

  return (
    <Zoom in timeout={300}>
      <a
        href="https://wa.me/17867701666?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20detallada%20sobre%20los%20servicios%20que%20ofrecen.%20Gracias%20de%20antemano."
        target="_blank"
        rel="noopener noreferrer"
        className={cx(classes.fab, scrolling && classes.scrolling)}
        aria-label="WhatsApp Miami y sur de Florida"
      >
        <Fab color="success" size="medium"><WhatsAppIcon /></Fab>
      </a>
    </Zoom>
  );
}

export default WhatsAppButton;