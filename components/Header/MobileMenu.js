import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'next-i18next';
import routeLink from 'public/text/link';
import useStyles from './header-style';
import navMenu from './menu';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';


function MobileMenu(props) {
  const { classes, cx } = useStyles();
  const { toggleDrawer, open } = props;
  const { t, i18n } = useTranslation('common');
  const curLang = '/' + i18n.language;

  const SideList = () => (
    <div
      className={classes.mobileNav}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={cx(classes.menu, open && classes.menuOpen)}>
        <List component="nav">
          {navMenu.map((item, index) => (
            <ListItem
              button
              component="a"
              href={`#${item}`}
              key={index.toString()}
              style={{ animationDuration: index * 0.15 + 's' }}
            >
              <ListItemText primary={t('hosting-landing.header_' + item)} className={classes.menuList} />
            </ListItem>
          ))}
          <ListItem
            button
            component="a"
            href={curLang + routeLink.hosting.contact}
            style={{ animationDuration: navMenu.length * 0.15 + 's' }}
          >
            <ListItemText primary={t('hosting-landing.header_contact')} className={classes.menuList} />
          </ListItem>
          <Divider className={classes.dividerSidebar} />
          <Grid item xs={2} md={3}>
            <div className={classes.socialWrapper}>
              <IconButton aria-label="FB" className={classes.margin} size="lg">
                <i className="ion-logo-twitter" />
              </IconButton>
              <IconButton aria-label="TW" className={classes.margin} size="lg">
                <i className="ion-logo-facebook" />
              </IconButton>
              <IconButton aria-label="IG" className={classes.margin} size="lg">
                <i className="ion-logo-instagram" />
              </IconButton>
              <IconButton aria-label="LI" className={classes.margin} size="lg">
                <i className="ion-logo-linkedin" />
              </IconButton>
            </div>

          </Grid>
        
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#888', marginTop: '1rem' }}>
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </List>
      </div>
    </div>
  );

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      classes={{
        paper: classes.paperNav
      }}
    >
      <SideList />
    </SwipeableDrawer>
  );
}

MobileMenu.propTypes = {

};

export default MobileMenu;
