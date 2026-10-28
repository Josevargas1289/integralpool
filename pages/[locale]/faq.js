import React from 'react';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import FaqForms from 'components/Forms/Faq_forms';
import Seo from 'components/Seo/Seo';

function FaqPage() {
  const { t, i18n } = useTranslation('common');
  const locale = i18n.language === 'en' ? 'en' : 'es';
  return (
    <>
      <Seo title={t('faq_seo_title')} description={t('faq_seo_description')} locale={locale} path="faq" />
      <FaqForms />
    </>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
export default FaqPage;