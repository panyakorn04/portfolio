import { AppProps } from 'next/app';
import { appWithTranslation } from "next-i18next";

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// Wrap MyApp with appWithTranslation HOC manually to prevent conflict
export default appWithTranslation(MyApp);
