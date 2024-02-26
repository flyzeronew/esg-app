import { Html, Head, Main, NextScript } from 'next/document';
import { useState ,useEffect } from 'react';
import Script from 'next/script';
export default function Document() {
  let gtmId = process.env.GTM_ID;
  return (
    <Html lang='zh-Hant-TW'>
      <Head>
      <Script src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}/>
      </Head>      
      <body>
        <Main />
        <NextScript />
        <noscript>
            <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>
      </body>
    </Html>
  );
}
