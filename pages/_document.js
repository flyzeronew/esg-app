import { Html, Head, Main, NextScript } from 'next/document'
import { GoogleTagManager } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang='zh-Hant-TW'>
      <Head>
      <GoogleTagManager gtmId={process.env.GTM_ID} />        
      </Head>      
      <body>
        <Main />
        <NextScript />
        <noscript>
            <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>
      </body>
    </Html>
  );
}
