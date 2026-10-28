import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTranslation } from 'next-i18next';
import brand from 'public/text/brand';
import routeLink from 'public/text/link';
import Link from '../Link';
import useStyles from './header-style';
import navMenu from './menu';

function MobileMenu({ toggleDrawer, open }) {
  const { classes } = useStyles();
  const { t, i18n } = useTranslation('common');
  const locale = i18n.language === 'en' ? 'en' : 'es';

  const menuItems = [
    ...navMenu.map(item => ({ label: t('hosting-landing.header_' + item), href: item === 'contact' ? '/' + locale + routeLink.hosting.contact : '/' + locale + '/#' + item })),
    { label: t('hosting-landing.header_faq'), href: `/${locale}${routeLink.hosting.faq}` },
  ];

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      onOpen={() => {}}
      classes={{ paper: classes.paperNav }}
      ModalProps={{ keepMounted: true }}
      sx={{ zIndex: 1400 }}
    >
      <div className={classes.mobileNav} role="dialog" aria-modal="true" aria-label={t('hosting-landing.main_navigation')}>
        <header className={classes.mobileDrawerHeader}>
          <Link href={`/${locale}/`} className={classes.mobileBrand} onClick={toggleDrawer}>
            <img src={brand.hosting.img} alt="" width="48" height="48" />
            <span>{brand.hosting.name_movil}</span>
          </Link>
          <IconButton onClick={toggleDrawer} className={classes.closeMenu} aria-label={t('hosting-landing.menu_close')}>
            <CloseIcon />
          </IconButton>
        </header>

        <nav className={classes.mobileMenuBody} aria-label={t('hosting-landing.main_navigation')}>
          <List disablePadding>
            {menuItems.map(item => (
              <ListItem button component="a" href={item.href} onClick={toggleDrawer} key={item.href} className={classes.mobileMenuItem}>
                <ListItemText primary={item.label} className={classes.menuList} />
                <ChevronRightIcon className={classes.menuArrow} aria-hidden="true" />
              </ListItem>
            ))}
          </List>
        </nav>

        <footer className={classes.mobileDrawerFooter}>
          <Button component={Link} href={`/${locale}${routeLink.hosting.contact}`} onClick={toggleDrawer} variant="contained" color="secondary" endIcon={<ArrowOutwardIcon />} className={classes.mobileContactButton}>
            {t('hosting-landing.header_quote')}
          </Button>
          <div className={classes.mobileContactRow}>
            <a href="tel:+17867701666"><PhoneInTalkOutlinedIcon /><span><small>EE. UU.</small>+1 786 770 1666</span></a>
            <a href="tel:+573022092633"><PhoneInTalkOutlinedIcon /><span><small>Colombia</small>+57 302 209 2633</span></a>
          </div>
          <div className={classes.mobileFooterBottom}>
            <div className={classes.socialWrapper}>
              <a href="https://www.facebook.com/share/15gF7rWhUi/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="ion-logo-facebook" /></a>
              <a href="https://www.instagram.com/integralpoolservices/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="ion-logo-instagram" /></a>
              <a href="https://www.youtube.com/@integralpool" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="ion-logo-youtube" /></a>
            </div>
            <small>© {new Date().getFullYear()} Integral Pool</small>
          </div>
        </footer>
      </div>
    </SwipeableDrawer>
  );
}

MobileMenu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MobileMenu;