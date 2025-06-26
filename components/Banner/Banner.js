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
import NET from 'vanta/dist/vanta.net.min';
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
        setVantaEffect(NET({
          el: myRef.current,
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.primary.light,
          backgroundAlpha: 0,
          points: 4.00,
          maxDistance: 18.00,
          spacing: 12.00
        }))
      }, 2000)
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
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
            <Paper className={classes.searchDomain}>
              <TextField
                variant="standard"
                className={classes.search}
                label={t('hosting-landing.banner_label')}
                onChange={(e) => handleChange(e, 'name')}
              />
              <div className={classes.action}>
                {!isTablet && (
                  <FormControl variant="standard" className={classes.formControl}>
                    <Select
                      variant="standard"
                      value={values.domain}
                      onChange={(e) => handleChange(e, 'domain')}
                      displayEmpty
                      name="domain"
                      className={classes.selectDomain}
                    >
                      <MenuItem value="com">.com</MenuItem>
                      <MenuItem value="net">.net</MenuItem>
                      <MenuItem value="org">.org</MenuItem>
                      <MenuItem value="co">.co</MenuItem>
                      <MenuItem value="biz">.biz</MenuItem>
                      <MenuItem value="gov">.gov</MenuItem>
                      <MenuItem value="id">.id</MenuItem>
                      <MenuItem value="abc">.abc</MenuItem>
                      <MenuItem value="xyz">.xyz</MenuItem>
                      <MenuItem value="news">.news</MenuItem>
                      <MenuItem value="cc">.cc</MenuItem>
                      <MenuItem value="me">.me</MenuItem>
                    </Select>
                  </FormControl>
                )}
                <Button className={classes.button} variant="contained" color="primary">
                  <SearchIcon className={classes.icon} />
                  {isDesktop && t('hosting-landing.banner_button')}
                </Button>
              </div>
            </Paper>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
