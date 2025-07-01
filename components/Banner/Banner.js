import React, { useState, useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useTranslation } from 'next-i18next';
import WAVES from 'vanta/dist/vanta.waves.min';
import { useText } from 'theme/common';
import useStyles from './banner-style';

function Banner() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const elem = useRef(null);

  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  // Media Query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Translation Function
  const { t } = useTranslation('common');

  const [values, setValue] = useState({
    name: '',
    domain: 'com'
  });

  const [hide, setHide] = useState(false);

  const handleScroll = () => {
    if (!elem.current) {
      return;
    }
    const doc = document.documentElement;
    const elTop = elem.current.offsetTop - 200;
    const elBottom = elTop + elem.current.getBoundingClientRect().height;

    if (doc.scrollTop > elTop && doc.scrollTop < elBottom) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (!vantaEffect) {
      setTimeout(() => {
        setVantaEffect(
          WAVES({
            el: myRef.current,
            color: theme.palette.primary.main, // Color principal igual al de NET
            backgroundColor: theme.palette.primary.light, // Fondo igual que en NET
            waveHeight: 2, // Sutil, pero visible
            waveSpeed: 0.5, // Movimiento muy suave
            zoom: 1.0, // Escala normal
            shininess: 20, // Leve brillo (opcional)
            mouseControls: true,
            touchControls: false,
            gyroControls: false,
          })
        );
      }, 2000);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleChange = (event, type) => {
    setValue({ ...values, [type]: event.target.value });
  };

  return (
    <div className={classes.root} ref={elem}>
      <div className={classes.decoWrap}>
        <div className={cx(classes.decoInner, hide && classes.hide)}>
          <div className={classes.illustration} ref={myRef} />
        </div>
      </div>
      {!isTablet && (
        <div className={classes.innerParallax}>
          <div className={classes.cloudWrap}>
            <ParallaxProvider>
              <Parallax
                translateY={[40, 40]}
                className={cx(classes.cloudParallax, 'figure')}
              >
                <div className={classes.cloudDeco} />
              </Parallax>
            </ParallaxProvider>
          </div>
        </div>
      )}
      <Container maxWidth="md">
        <div className={classes.bannerWrap}>
          <div className={classes.text}>
            <Typography variant="h4" className={text.title2}>
              {t('hosting-landing.banner_title')}
            </Typography>
            <Typography component="p" className={text.subtitle2}>
              {t('hosting-landing.banner_subtitle')}
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
