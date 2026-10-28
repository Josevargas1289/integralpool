import React, { useState, useEffect } from 'react';
import {
  Button, useMediaQuery, FormControlLabel,
  Paper, Container, Grid, Typography, Dialog, DialogTitle,
  DialogContent, DialogActions
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import brand from 'public/text/brand';
import { useText } from 'theme/common';
import routeLink from 'public/text/link';
import Link from '../Link';
import Checkbox from './Checkbox';
import useStyles from './form-style';

function Contact() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t, i18n } = useTranslation('common');
  const locale = i18n.language === 'en' ? 'en' : 'es';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
  const [isSending, setIsSending] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleCloseModal = () => {
    setModal({ ...modal, open: false });
  };

  const handleSubmit = async () => {
    if (isSending || !check) return;
    setIsSending(true);
    const contactData = {
      from_name: values.from_name,
      from_email: values.from_email,
      phone: values.phone,
      company: values.company,
      message: values.message,
      consent: check
    };

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData)
      });

      if (!response.ok) throw new Error('Contact request failed');

      setModal({ open: true, success: true });
      setValues({
        from_name: '',
        from_email: '',
        phone: '',
        company: '',
        message: ''
      });
      setCheck(false);
    } catch (error) {
      setModal({ open: true, success: false });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={cx(classes.pageWrap, classes.contactPage)}>
      <Dialog
        open={modal.open}
        onClose={handleCloseModal}
        PaperProps={{ className: classes.dialogPaper }}
      >
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

      <Container maxWidth="lg" className={cx(classes.innerWrap, classes.contactInner)}>
        <div className={classes.contactTopbar}>
          <Button
            component={Link}
            href={routeLink.hosting.home}
            startIcon={<ArrowBackRoundedIcon />}
            className={classes.contactBackButton}
          >
            {t('back')}
          </Button>
        </div>
        <Paper className={cx(classes.formBox, classes.contactFormBox, 'fragment-fadeUp')}>
          <div className={classes.contactAccent} aria-hidden="true" />

          <div className={classes.contactGrid}>
            <aside className={classes.introPanel}>
              <Link href={routeLink.hosting.home} className={classes.formBrand}>
                <img src={brand.hosting.img} alt="Integral Pool" width="58" height="58" />
                <span>{brand.hosting.projectName}</span>
              </Link>

              <span className={classes.introKicker}>{t('contact_title')}</span>
              <Typography
                variant="h3"
                component="h1"
                className={cx(classes.title, classes.contactTitle, text.title)}
              >
                {t('contact_title2')}
              </Typography>
              <Typography className={cx(classes.desc, classes.contactDesc, text.subtitle2)}>
                {t('contact_subtitle')}
              </Typography>
              <div className={classes.contactChannels}>
                <a href="tel:+17867701666">{locale === 'es' ? 'EE. UU.' : 'United States'}: +1 786 770 1666</a>
                <a href="tel:+573022092633">Colombia: +57 302 209 2633</a>
              </div>

              <div className={classes.rippleArt} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </aside>

            <div className={cx(classes.fullFromWrap, classes.contactFormPanel)}>
              <div className={cx(classes.form, classes.contactForm)}>
                <ValidatorForm
                  onSubmit={handleSubmit}
                  onError={() => {}}
                >
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <TextValidator
                        variant="filled"
                        className={cx(classes.input, classes.contactInput)}
                        label={t('form_name')}
                        onChange={handleChange('from_name')}
                        name="from_name"
                        value={values.from_name}
                        autoComplete="name"
                        inputProps={{ maxLength: 120 }}
                        validators={['required']}
                        errorMessages={[t('form_required')]}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextValidator
                        variant="filled"
                        className={cx(classes.input, classes.contactInput)}
                        label={t('form_email')}
                        onChange={handleChange('from_email')}
                        name="from_email"
                        value={values.from_email}
                        autoComplete="email"
                        inputProps={{ maxLength: 254 }}
                        validators={['required', 'isEmail']}
                        errorMessages={[t('form_required'), t('form_invalid_email')]}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextValidator
                        variant="filled"
                        className={cx(classes.input, classes.contactInput)}
                        label={t('form_phone')}
                        onChange={handleChange('phone')}
                        name="phone"
                        value={values.phone}
                        autoComplete="tel"
                        inputProps={{ maxLength: 60 }}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextValidator
                        variant="filled"
                        className={cx(classes.input, classes.contactInput)}
                        label={t('form_company')}
                        onChange={handleChange('company')}
                        name="company"
                        value={values.company}
                        autoComplete="organization"
                        inputProps={{ maxLength: 160 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextValidator
                        variant="filled"
                        multiline
                        rows="5"
                        className={cx(classes.input, classes.contactInput)}
                        label={t('form_message')}
                        onChange={handleChange('message')}
                        name="message"
                        value={values.message}
                        validators={['required']}
                        errorMessages={[t('form_required')]}
                        inputProps={{ maxLength: 5000 }}
                      />
                    </Grid>
                  </Grid>

                  <div className={cx(classes.btnArea, classes.flex, classes.contactBtnArea)}>
                    <FormControlLabel
                      control={(
                        <Checkbox
                          validators={['isTruthy']}
                          errorMessages={t('form_consent_required')}
                          checked={check}
                          value={check}
                          onChange={(e) => handleCheck(e)}
                          color="primary"
                        />
                      )}
                      label={(
                        <span>
                          {t('form_terms')}{' '}
                          <a href={'/' + locale + '/privacy/'} target="_blank" rel="noopener noreferrer">
                            {t('form_privacy')}
                          </a>
                        </span>
                      )}
                    />
                    <Button
                      variant="contained"
                      fullWidth={isMobile}
                      type="submit"
                      color="secondary"
                      size="large"
                      className={classes.contactSubmit}
                      disabled={isSending}
                    >
                      {isSending ? t('form_sending') : t('form_send')}
                    </Button>
                  </div>
                  {isSending && <Typography role="status" aria-live="polite">{t('form_sending_status')}</Typography>}
                </ValidatorForm>
              </div>
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Contact;
