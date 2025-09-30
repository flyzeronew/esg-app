import Head from 'next/head'

/**
 * StructuredData 組件 - 用於生成 JSON-LD 結構化資料
 * @param {Object} props - 組件屬性
 * @param {string} props.type - Schema.org 類型 (預設: 'Article')
 * @param {Object} props.data - 結構化資料內容
 * @param {string} props.appUrl - 應用程式基礎 URL
 */
export default function StructuredData({ type = 'Article', data, appUrl }) {
  if (!data) return null

  const generateStructuredData = () => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": type
    }

    // 根據不同類型生成對應的結構化資料
    switch (type) {
      case 'Article':
        return generateArticleSchema(baseStructuredData, data, appUrl)
      case 'Organization':
        return generateOrganizationSchema(baseStructuredData, data, appUrl)
      case 'WebPage':
        return generateWebPageSchema(baseStructuredData, data, appUrl)
      case 'BreadcrumbList':
        return generateBreadcrumbSchema(baseStructuredData, data, appUrl)
      default:
        return { ...baseStructuredData, ...data }
    }
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData())
        }}
      />
    </Head>
  )
}

/**
 * 生成文章類型的結構化資料
 */
function generateArticleSchema(baseSchema, data, appUrl) {
  const {
    title,
    description,
    coverImg,
    authorName,
    createdAt,
    updatedAt,
    genres,
    articleId,
    genreEnName,
    partner,
    extendedArticles,
    keywords = "TVBS,TVBS GOOD,TVBS ESG,企業社會責任,ESG永續發展,ESG指標,ESG企業,ESG議題"
  } = data

  const articleUrl = `${appUrl}/view/${genreEnName}/${articleId}`
  
  const structuredData = {
    ...baseSchema,
    "headline": title,
    "description": description,
    "image": coverImg || `${appUrl}/images/default-article.jpg`,
    "author": {
      "@type": "Person",
      "name": authorName || "TVBS"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TVBS",
      "logo": {
        "@type": "ImageObject",
        "url": `${appUrl}/images/tvbs-logo.png`
      }
    },
    "datePublished": createdAt,
    "dateModified": updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "url": articleUrl,
    "articleSection": genres?.[0]?.name || "ESG",
    "keywords": keywords
  }

  // 如果有共好夥伴資訊，加入贊助商資料
  if (partner) {
    structuredData.sponsor = {
      "@type": "Organization",
      "name": partner.name,
      "description": partner.introduction,
      "image": partner.avatar,
      "url": partner.outer_url || `${appUrl}/partner/${partner.name}`
    }
  }

  // 如果有延伸閱讀，加入相關文章連結
  if (extendedArticles && extendedArticles.length > 0) {
    structuredData.relatedLink = extendedArticles.map(item => 
      `${appUrl}/view/${item.article_genres?.[0]?.en_name || 'unknown'}/${item.article_id}`
    )
  }

  return structuredData
}

/**
 * 生成組織類型的結構化資料
 */
function generateOrganizationSchema(baseSchema, data, appUrl) {
  const {
    name,
    description,
    logo,
    url,
    contactPoint,
    address,
    sameAs
  } = data

  return {
    ...baseSchema,
    "name": name,
    "description": description,
    "logo": {
      "@type": "ImageObject",
      "url": logo || `${appUrl}/images/default-logo.png`
    },
    "url": url || appUrl,
    "contactPoint": contactPoint,
    "address": address,
    "sameAs": sameAs
  }
}

/**
 * 生成網頁類型的結構化資料
 */
function generateWebPageSchema(baseSchema, data, appUrl) {
  const {
    name,
    description,
    url,
    breadcrumb,
    mainEntity
  } = data

  return {
    ...baseSchema,
    "name": name,
    "description": description,
    "url": url || appUrl,
    "breadcrumb": breadcrumb,
    "mainEntity": mainEntity
  }
}

/**
 * 生成麵包屑導航的結構化資料
 */
function generateBreadcrumbSchema(baseSchema, data, appUrl) {
  const { items } = data

  if (!items || !Array.isArray(items)) {
    return baseSchema
  }

  return {
    ...baseSchema,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url || `${appUrl}${item.path || ''}`
    }))
  }
}
