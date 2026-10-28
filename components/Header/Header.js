import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTranslation } from 'next-i18next';
import brand from 'public/text/brand';
import routeLink from 'public/text/link';
import Link from '../Link';
import Settings from './Settings';
import MobileMenu from './MobileMenu';
import useStyles from './header-style';
import navMenu from './menu';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function Header({ onToggleDark, onToggleDir, invert }) {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const { t, i18n } = useTranslation('common');
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const locale = i18n.language === 'en' ? 'en' : 'es';
  const [fixed, setFixed] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const handleScroll = () => setFixed(window.scrollY > 36);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => setOpenDrawer(current => !current);

  return (
    <>
      {isMobile && <MobileMenu open={openDrawer} toggleDrawer={toggleDrawer} />}
      <AppBar
        component="header"
        position="fixed"
        elevation={0}
        className={cx(classes.header, fixed && classes.fixed, invert && classes.invert)}
      >
        <Container maxWidth="lg" className={classes.headerInner}>
          <div className={classes.logoRow}>
            {isMobile && (
              <IconButton
                onClick={toggleDrawer}
                className={cx('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active')}
                aria-label={t('hosting-landing.menu_open')}
                aria-expanded={openDrawer}
                size="large"
              >
                <span className="hamburger-box">
                  <span className={cx(classes.bar, 'hamburger-inner')} />
                </span>
              </IconButton>
            )}
            <Link href={`/${locale}/`} className={classes.logoLink}>
              <img src={brand.hosting.img} alt="Integral Pool" width="45" height="45" />
              <span className={classes.brandText}>{brand.hosting.name_movil}</span>
            </Link>
          </div>

          {isDesktop && (
            <nav className={classes.navMenu} aria-label={t('hosting-landing.main_navigation')}>
              <ul>
                {navMenu.map(item => (
                  <li key={item}>
                    {item === 'contact' ? (
                      <Button component={Link} href={'/' + locale + '/contact/'}>
                        {t('hosting-landing.header_contact')}
                      </Button>
                    ) : invert ? (
                      <Button component={Link} href={`/${locale}/#${item}`}>
                        {t(`hosting-landing.header_${item}`)}
                      </Button>
                    ) : (
                      <Button component={LinkBtn} href={`#${item}`} offset={80}>
                        {t(`hosting-landing.header_${item}`)}
                      </Button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className={classes.actions}>
            {isDesktop && (
              <a className={classes.phone} href="tel:+17867701666">
                <PhoneInTalkOutlinedIcon aria-hidden="true" />
                <span>
                  <small>{locale === 'es' ? 'EE. UU.' : 'United States'}</small>
                  +1 786 770 1666
                </span>
              </a>
            )}
            <Button
              component={Link}
              href={`/${locale}/contact/`}
              variant="contained"
              color="secondary"
              endIcon={<ArrowOutwardIcon />}
              className={classes.contactButton}
            >
              {t('hosting-landing.header_quote')}
            </Button>
            <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} invert={invert} />
          </div>
        </Container>
      </AppBar>
    </>
  );
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
};

Header.defaultProps = {
  invert: false,
};

export default Header;