const Sitemap = () => {
  return null
}

export async function getServerSideProps({ res }) {
  const sitemapUrl = new URL(`/api/sitemap`, process.env.API_URL)
  const sitemapRes = await fetch(sitemapUrl)
  const data = await sitemapRes.json()

  let xml = `<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`

  data.allPages.map(
    (item, index) =>
      (xml += `
        <url>
          <loc>${item}</loc>
          <lastmod>${data.lastmod}</lastmod>
        </url>
    `)
  )

  xml += '</urlset>'
  res.setHeader('Content-Type', 'application/xml')
  res.write(xml)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
