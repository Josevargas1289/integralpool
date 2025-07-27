function useResponsive(breakpoint = 960) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < breakpoint;
    }
    return false;
  });
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LanguageSwitch from '../LangSwitch/Menu';
import useStyles from './header-style';
import i18nextConfig from 'next-i18next.config'; 

let themeType = 'light';
if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function Settings(props) {
  const [ctn, setCtn] = useState(null);
  const { classes, cx } = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDark, setDark] = useState(themeType === 'dark');
  const { t, i18n } = useTranslation('common');
  const isMobile = useResponsive(960);
  const currentLocale = i18n.language;

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  useEffect(() => {
    setCtn(document.getElementById('main-wrap'));
  });

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const { invert } = props;

  return (
    <div className={classes.setting}>
      {isMobile ? (
        <IconButton
          aria-describedby={id}
          aria-label="Settings"
          onClick={handleClick}
          className={cx(classes.icon, open && classes.active, invert && classes.invert)}
          size="large"
        >
          <SettingsIcon fontSize="inherit" />
        </IconButton>
      ) : (
        <button
          aria-describedby={id}
          aria-label="Idioma"
          onClick={handleClick}
          className={cx(classes.icon, invert && classes.invert)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            padding: '8px 16px',
            color: '#00BCD4',
            fontWeight: 600,
            transition: 'color 0.2s',
          }}
          // El color persiste, no se modifica en hover
        >
          {t('language')}
        </button>
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        container={ctn}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List
          component="nav"
          className={classes.modeMenu}
          aria-label="Mode-menu"
          subheader={(
            <ListSubheader component="div">
              {t('hosting-landing.header_theme')}
            </ListSubheader>
          )}
        >
          <ListItem>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>{t('hosting-landing.header_light')}</Grid>
                <Grid item>
                  <Switch
                    checked={isDark}
                    onChange={handleChangeMode}
                    value={isDark}
                    inputProps={{ 'aria-label': 'checkbox' }}
                  />
                </Grid>
                <Grid item>{t('hosting-landing.header_dark')}</Grid>
              </Grid>
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List
          component="nav"
          className={classes.langMenu}
          aria-label="Language-menu"
          subheader={(
            <ListSubheader component="div">
              {t('hosting-landing.header_language')}
            </ListSubheader>
          )}
        >
          {i18nextConfig.i18n.locales.map((locale) => (
            <LanguageSwitch
              ssg={i18nextConfig.ssg}
              locale={locale}
              key={locale}
              checked={locale === currentLocale}
              toggleDir={props.toggleDir}
              closePopup={handleClose}
            />
          ))}
        </List>
      </Popover>
    </div>
  );
}

Settings.propTypes = {
  toggleDark: PropTypes.func.isRequired,
  toggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
};

Settings.defaultProps = {
  invert: false
};

export default Settings;
