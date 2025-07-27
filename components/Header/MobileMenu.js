import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "next-i18next";
import routeLink from "public/text/link";
import useStyles from "./header-style";
import navMenu from "./menu";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Stack, Typography } from '@mui/material';


function MobileMenu(props) {
  const { classes, cx } = useStyles();
  const { toggleDrawer, open } = props;
  const { t, i18n } = useTranslation("common");
  const curLang = "/" + i18n.language;

  // ✅ Lista flexible: aquí defines qué secciones ocultar en móvil
  const excludedMobileMenus = ['pricing']; // ← solo elimina o comenta para volver a mostrar

  // 🔁 Aplica el filtro
  const filteredNavMenu = navMenu.filter(item => !excludedMobileMenus.includes(item));

  const SideList = () => (
    <div
      className={classes.mobileNav}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={cx(classes.menu, open && classes.menuOpen)}>
        <List component="nav">
          {filteredNavMenu.map((item, index) => (
            <ListItem
              button
              component="a"
              href={`#${item}`}
              key={index.toString()}
              style={{ animationDuration: index * 0.15 + "s" }}
            >
              <ListItemText
                primary={t("hosting-landing.header_" + item)}
                className={classes.menuList}
              />
            </ListItem>
          ))}
          <ListItem
            button
            component="a"
            href={curLang + "/faq"}
            style={{ animationDuration: filteredNavMenu.length * 0.15 + "s" }}
          >
            <ListItemText
              primary={t("hosting-landing.header_faq")}
              className={classes.menuList}
            />
          </ListItem>
          <ListItem
            button
            component="a"
            href={curLang + routeLink.hosting.contact}
            style={{ animationDuration: filteredNavMenu.length * 0.15 + "s" }}
          >
            <ListItemText
              primary={t("hosting-landing.header_contact")}
              className={classes.menuList}
            />
          </ListItem>
          <Divider className={classes.dividerSidebar} />

          <Grid item xs={2} md={3}>
            <div className={classes.socialWrapper}>
              {/* <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="FB"
                  className={classes.margin}
                  size="lg"
                >
                  <i className="ion-logo-twitter" />
                </IconButton>
              </a> */}
              <a
                href="https://www.facebook.com/share/15gF7rWhUi/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="TW"
                  className={classes.margin}
                  size="lg"
                >
                  <i className="ion-logo-facebook" />
                </IconButton>
              </a>
              <a
                href="https://www.instagram.com/integralpoolservices/?igsh=eGt1YzB3emg5bDI%3D#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="IG"
                  className={classes.margin}
                  size="lg"
                >
                  <i className="ion-logo-instagram" />
                </IconButton>
              </a>
              <a
                href="https://www.youtube.com/@integralpool "
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="LI"
                  className={classes.margin}
                  size="lg"
                >
                  <i className="ion-logo-youtube" />
                </IconButton>
              </a>
              <a
                href=" https://www.tiktok.com/@integral.pools?_t=ZP-8yKwcyCarVf&_r=1 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="TikTok"
                  className={classes.margin}
                  size="large"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.75 2a.75.75 0 0 1 .75.75 3.75 3.75 0 0 0 3.75 3.75.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75 6.75 6.75 0 0 1-3.75-1.14v7.34a5.25 5.25 0 1 1-5.25-5.25.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75 1.5 1.5 0 1 0 1.5 1.5V2.75a.75.75 0 0 1 .75-.75h2.25z" />
                  </svg>
                </IconButton>
              </a>
            </div>
          </Grid>
           <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mt={2}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneIcon fontSize="small" />
            <Typography variant="body2">Es: +1 786 770 1666</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneIcon fontSize="small" />
            <Typography variant="body2">In: +57 302 2092633</Typography>
          </Stack>
        </Box>
        <Divider className={classes.dividerSidebar} />
          <p
            style={{
              textAlign: "center",
              fontSize: "14px",
              color: "#888",
              marginTop: "1rem",
            }}
          >
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
        paper: classes.paperNav,
      }}
    >
      <SideList />
    </SwipeableDrawer>
  );
}

MobileMenu.propTypes = {
  toggleDrawer: PropTypes.func,
  open: PropTypes.bool,
};

export default MobileMenu;
