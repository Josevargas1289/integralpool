import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import useStyles from './subscribe-style';

function SubscribeForm() {
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const [value, setValue] = useState('');
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Typography component="p" className={text.paragraph}>
          {t('hosting-landing.footer_subscribe')}
        </Typography>
        <div className={classes.form}>
          <form>
            <TextField
              variant="standard"
              className={classes.field}
              fullWidth
              placeholder={t('hosting-landing.footer_mail')}
              onChange={(e) => handleChange(e)}
              value={value}
            />
            <Button variant={isDesktop ? 'contained' : 'text'} color="primary" className={classes.button}>
              { isDesktop && t('hosting-landing.subscribe')}
              { isMobile && <SendIcon /> }
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default SubscribeForm;
