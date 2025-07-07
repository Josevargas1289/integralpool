import React from 'react';
import Head from 'next/head';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import brand from 'public/text/brand';
import FaqForms from 'components/Forms/Faq_forms';

function FaqPage() {
  return (
    <>
      <Head>
        <title>{brand.hosting.name} - FAQ</title>
      </Head>
      <FaqForms />
    </>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default FaqPage;
