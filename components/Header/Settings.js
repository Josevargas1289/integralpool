import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Tooltip from '@mui/material/Tooltip';
import SettingsIcon from '@mui/icons-material/Settings';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LanguageSwitch from '../LangSwitch/Menu';
import useStyles from './header-style';
import i18nextConfig from 'next-i18next.config';

let themeType = 'light';
if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function Settings({ toggleDark, toggleDir, invert }) {
  const { classes, cx } = useStyles();
  const [container, setContainer] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDark, setDark] = useState(themeType === 'dark');
  const { t, i18n } = useTranslation('common');
  const currentLocale = i18n.language === 'en' ? 'en' : 'es';

  useEffect(() => setContainer(document.getElementById('main-wrap')), []);

  const handleChangeMode = () => {
    setDark(current => !current);
    toggleDark();
  };

  const close = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  return (
    <div className={classes.setting}>
      <Tooltip title={isDark ? t('hosting-landing.header_light') : t('hosting-landing.header_dark')}>
        <IconButton
          onClick={handleChangeMode}
          className={cx(classes.utilityButton, invert && classes.invert)}
          aria-label={isDark ? t('hosting-landing.header_light') : t('hosting-landing.header_dark')}
          size="small"
        >
          {isDark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </IconButton>
      </Tooltip>
      <Tooltip title={t('hosting-landing.header_language')}>
        <IconButton
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={event => setAnchorEl(event.currentTarget)}
          className={cx(classes.utilityButton, open && classes.active, invert && classes.invert)}
          aria-label={t('hosting-landing.header_language')}
          size="small"
        >
          <SettingsIcon />
        </IconButton>
      </Tooltip>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={close}
        container={container}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <List
          component="nav"
          className={classes.langMenu}
          aria-label={t('hosting-landing.header_language')}
          subheader={<ListSubheader component="div">{t('hosting-landing.header_language')}</ListSubheader>}
        >
          {i18nextConfig.i18n.locales.map(locale => (
            <LanguageSwitch
              ssg={i18nextConfig.ssg}
              locale={locale}
              key={locale}
              checked={locale === currentLocale}
              toggleDir={toggleDir}
              closePopup={close}
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

Settings.defaultProps = { invert: false };

export default Settings;