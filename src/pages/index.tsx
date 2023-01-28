import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Hero from '@/hero';


export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main className='layout min-h-main container mx-auto px-4 '>
        <Hero title='Hello World' />
      </main>
    </Layout >
  );
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(locale && (await serverSideTranslations(locale, ["common"]))),
      // Will be passed to the page component as props
    },
  };
};
