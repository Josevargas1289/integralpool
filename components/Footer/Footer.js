import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import brand from 'public/text/brand';
import img from 'public/images/imgAPI';
import SelectLang from '../LangSwitch/Select';
import useStyles from './footer-style';

function Copyright() {
  return (
    <Typography variant="body2" display="block" color="textSecondary">
      &copy;&nbsp;
      {brand.hosting.footerText}
    </Typography>
  );
}

const footer = {
  title: 'Quick Links',
  description: ['Resource', 'Another resource', 'Final resource', 'Privacy policy', 'Terms of use', 'Terms Condition'],
  link: ['#resource', '#another-resource', '#final-resource', '#privacy-policy', '#terms-of-use'],
};

const news = [
  {
    type: 'news',
    text: 'Sed imperdiet enim ligula vitae viverra.',
    img: img.photo[4]
  },
  {
    type: 'news',
    text: 'Sed imperdiet enim ligula vitae viverra.',
    img: img.photo[1]
  },
  {
    type: 'news',
    text: 'Sed imperdiet enim ligula vitae viverra.',
    img: img.photo[3]
  }
];

function Footer(props) {
  const { classes } = useStyles();
  const { toggleDir } = props;
  // Translation Function
  const { t } = useTranslation('common');

  return (
    <div className={classes.footer}>
      <Container fixed component="footer">
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <div className={classes.logo}>
              <img src={brand.hosting.img} alt="logo" />
              <Typography variant="h6" color="textPrimary">
                {brand.hosting.projectName}
              </Typography>
            </div>
            <Typography
              color="textPrimary"
              className={classes.footerDesc}
              gutterBottom
            >
              {t("hosting-landing.banner_title")}
            </Typography>
            <div className={classes.quickLinks}>
              <Typography
                variant="h6"
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                {t("hosting-landing.footer_link")}
              </Typography>
              <ul>
                {footer.description.map((item, index) => (
                  <li key={item}>
                    <Link
                      href={footer.link[index]}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            {news.map((item, index) => (
              <ButtonBase
                className={classes.blogItem}
                href="#"
                key={index.toString()}
              >
                <figure>
                  <img src={item.img} alt="thumb" />
                </figure>
                <div className={classes.listText}>
                  <Typography variant="button" className={classes.category}>
                    {t("hosting-landing.footer_news")}
                  </Typography>
                  <Typography display="block" component="p">
                    Sed imperdiet enim ligula vitae viverra.{" "}
                  </Typography>
                </div>
              </ButtonBase>
            ))}
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.socmed}>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="Twitter"
                  className={classes.margin}
                  size="small"
                >
                  <i className="ion-logo-twitter" />
                </IconButton>
              </a>
              <a
                href="https://www.facebook.com/share/15gF7rWhUi/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="Facebook"
                  className={classes.margin}
                  size="small"
                >
                  <i className="ion-logo-facebook" />
                </IconButton>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="Instagram"
                  className={classes.margin}
                  size="small"
                >
                  <i className="ion-logo-instagram" />
                </IconButton>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="LinkedIn"
                  className={classes.margin}
                  size="small"
                >
                  <i className="ion-logo-linkedin" />
                </IconButton>
              </a>
            </div>
            <SelectLang toggleDir={toggleDir} />
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Footer.propTypes = {
  toggleDir: PropTypes.func,
};

Footer.defaultProps = {
  toggleDir: () => {},
};

export default Footer;
