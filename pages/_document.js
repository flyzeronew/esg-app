import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  const gtmId = process.env.GTM_ID;
  const appUrl = process.env.APP_URL;
  
  return (
    <Html lang='zh-Hant-TW'>
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href={`${appUrl}/images/tvbs-good.png`}></link>
        {/* GTM */}
         <script
            dangerouslySetInnerHTML={{
              __html: `    
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
          {/* comscore */}
          <script
            dangerouslySetInnerHTML={{
              __html: `    
              var _comscore = _comscore || [];
              _comscore.push({ c1: "2", c2: "18400300" , options: { enableFirstPartyCookie: "false" } });
              (function() { var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true; s.src = "https://sb.scorecardresearch.com/cs/18400300/beacon.js"; el.parentNode.insertBefore(s, el); })();
              `,
            }}
          />
      </Head>      
      <body>
        <Main />
        <NextScript />
        {/* GTM */}
        <noscript>
            <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>
        {/* comscore */}
        <noscript> 
          <img src="https://sb.scorecardresearch.com/p?c1=2&amp;c2=18400300&amp;cv=3.9.1&amp;cj=1" /> 
        </noscript> 
      </body>
    </Html>
  );
}
