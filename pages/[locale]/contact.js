import React from 'react';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import ContactFrm from 'components/Forms/Contact';
import Seo from 'components/Seo/Seo';

function Contact() {
  const { t, i18n } = useTranslation('common');
  const locale = i18n.language === 'en' ? 'en' : 'es';
  return (
    <>
      <Seo title={t('contact_seo_title')} description={t('contact_seo_description')} locale={locale} path="contact" />
      <ContactFrm />
    </>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
export default Contact;