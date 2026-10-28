import React from 'react';
import { Container, Paper, Typography, Button, Stack } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import Seo from 'components/Seo/Seo';

const sectionNames = ['contact', 'data', 'purpose', 'access', 'rights'];

function PrivacyPage() {
  const { t, i18n } = useTranslation('common');
  const locale = i18n.language === 'en' ? 'en' : 'es';
  return (
    <>
      <Seo title={t('privacy_seo_title')} description={t('privacy_seo_description')} locale={locale} path="privacy" />
      <Container component="main" maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
        <Button href={'/' + locale + '/'} sx={{ mb: 3 }}>{t('privacy.back')}</Button>
        <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, border: 1, borderColor: 'divider', borderRadius: 3 }}>
          <Typography component="h1" variant="h3" sx={{ mb: 2, fontWeight: 700, fontSize: 'clamp(2rem, 7vw, 3rem)', overflowWrap: 'anywhere' }}>{t('privacy.title')}</Typography>
          <Typography color="text.secondary" sx={{ mb: 5, lineHeight: 1.8 }}>{t('privacy.intro')}</Typography>
          <Stack spacing={4}>
            {sectionNames.map(name => (
              <section key={name}>
                <Typography component="h2" variant="h6" sx={{ mb: 1, fontWeight: 700 }}>{t('privacy.' + name + '_title')}</Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>{t('privacy.' + name + '_text')}</Typography>
              </section>
            ))}
          </Stack>
        </Paper>
      </Container>
    </>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
export default PrivacyPage;