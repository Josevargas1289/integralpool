import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  Button, useMediaQuery, IconButton, FormControlLabel,
  Paper, Container, Grid, Typography, Dialog, DialogTitle,
  DialogContent, DialogActions
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import brand from 'public/text/brand';
import { useText } from 'theme/common';
import routeLink from 'public/text/link';
import Link from '../Link';
import Checkbox from './Checkbox';
import ParallaxCloud from '../Parallax/Cloud';
import useStyles from './form-style';

function Contact() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [values, setValues] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', value => value);
  }, []);

  const [check, setCheck] = useState(false);
  const [modal, setModal] = useState({ open: false, success: true });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleCloseModal = () => {
    setModal({ ...modal, open: false });
  };

  const handleSubmit = () => {
    const templateParams = {
      from_name: values.from_name,
      reply_to: values.from_email,
      phone: values.phone,
      company: values.company,
      message: values.message
    };

    emailjs.send(
      'service_f301enm',
      'template_6y12aex',
      templateParams,
      '7M01QDWgCwoVcON7R'
    ).then(
      () => {
        setModal({ open: true, success: true });
        setValues({
          from_name: '',
          from_email: '',
          phone: '',
          company: '',
          message: ''
        });
        setCheck(false);
      },
      () => {
        setModal({ open: true, success: false });
      }
    );
  };

  return (
    <div className={classes.pageWrap}>
      <div className={classes.cloudDeco}>
        <ParallaxCloud />
      </div>

      {/* MODAL */}
      <Dialog open={modal.open} onClose={handleCloseModal}>
        <DialogTitle>
          {modal.success
            ? t('hosting-landing.modal_contact.title')
            : t('hosting-landing.modal_contact.error_title')}
        </DialogTitle>
        <DialogContent>
          <Typography>
            {modal.success
              ? t('hosting-landing.modal_contact.message')
              : t('hosting-landing.modal_contact.error_message')}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {!isDesktop && (
        <div className={cx(classes.logo, classes.logoHeader)}>
          <Link href={routeLink.hosting.home}>
            <img src={brand.hosting.img} alt="logo" />
            <Typography component="span" className={text.title}>
              {brand.hosting.projectName}
            </Typography>
          </Link>
        </div>
      )}
      <Container maxWidth="md" className={classes.innerWrap}>
        <IconButton component={Link} href={routeLink.hosting.home} className={classes.backtohome} size="large">
          <span>
            <i className="ion-ios-home-outline" />
            <i className="ion-ios-arrow-round-back" />
          </span>
        </IconButton>
        <Paper className={cx(classes.formBox, 'fragment-fadeUp')}>
          <div className={classes.frmDeco}>
            <svg className={classes.cloud}>
              <use xlinkHref="/images/hosting/cloud_bottom_frm.svg#main" />
            </svg>
          </div>
          <div className={classes.fullFromWrap}>
            <Typography
              variant="h3"
              align="center"
              className={cx(classes.title, text.title)}
              gutterBottom
            >
              {t('contact_title2')}
            </Typography>
            <Typography className={cx(classes.desc, text.subtitle2)}>
              {t('contact_subtitle')}
            </Typography>
            <div className={classes.form}>
              <ValidatorForm
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
              >
                <Grid container spacing={6}>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={classes.input}
                      label={t('form_name')}
                      onChange={handleChange('from_name')}
                      name="from_name"
                      value={values.from_name}
                      validators={['required']}
                      errorMessages={['This field is required']}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={classes.input}
                      label={t('form_email')}
                      onChange={handleChange('from_email')}
                      name="from_email"
                      value={values.from_email}
                      validators={['required', 'isEmail']}
                      errorMessages={['This field is required', 'email is not valid']}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={classes.input}
                      label={t('form_phone')}
                      onChange={handleChange('phone')}
                      name="phone"
                      value={values.phone}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={classes.input}
                      label={t('form_company')}
                      onChange={handleChange('company')}
                      name="company"
                      value={values.company}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator
                      variant="filled"
                      multiline
                      rows="6"
                      className={classes.input}
                      label={t('form_message')}
                      onChange={handleChange('message')}
                      name="message"
                      value={values.message}
                    />
                  </Grid>
                </Grid>
                <div className={cx(classes.btnArea, classes.flex)}>
                  <FormControlLabel
                    control={(
                      <Checkbox
                        validators={['isTruthy']}
                        errorMessages="This field is required"
                        checked={check}
                        value={check}
                        onChange={(e) => handleCheck(e)}
                        color="primary"
                      />
                    )}
                    label={(
                      <span>
                        {t('form_terms')}<br />
                        <a href="#">
                          {t('form_privacy')}
                        </a>
                      </span>
                    )}
                  />
                  <Button variant="contained" fullWidth={isMobile} type="submit" color="secondary" size="large">
                    {t('form_send')}
                  </Button>
                </div>
              </ValidatorForm>
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Contact;
