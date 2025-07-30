import Head from 'next/head';

export default function MetaTags({ appUrl, currentPage, ogImg, pageInfo }) {
  return (
    <Head>
      <title>{pageInfo.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="Keywords" content={pageInfo.keywords} />
      <meta name="description" content={pageInfo.description} />
      <meta name="author" content={pageInfo.author} />
      <meta name="copyright" content={"TVBS"} />
      <meta name="application-name" content={"TVBS"} />
      <meta name="URL" content={`${appUrl}/${currentPage}`} />
      <meta name="medium" content="mult" />
      <meta name="robots" content="index,follow" />
      <meta property="og:image" content={ogImg} />
      <link rel="canonical" href={`${appUrl}/${currentPage}`} />
    </Head>
  );
}