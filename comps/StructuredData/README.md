# StructuredData 組件

這是一個用於生成 JSON-LD 結構化資料的 React 組件，支援多種 Schema.org 類型。

## 功能特色

- 🎯 支援多種 Schema.org 類型（Article、Organization、WebPage、BreadcrumbList）
- 🔧 自動生成符合標準的 JSON-LD 格式
- 📱 響應式設計，適用於各種頁面類型
- 🚀 易於擴展和自定義
- 🧭 支援麵包屑導航結構化資料

## 使用方法

### 基本用法

```jsx
import StructuredData from '../comps/StructuredData/StructuredData'

// 在您的頁面組件中
<StructuredData 
  type="Article"
  data={articleData}
  appUrl={process.env.APP_URL}
/>
```

### 文章頁面範例

```jsx
const articleData = {
  title: "文章標題",
  description: "文章描述",
  coverImg: "https://example.com/image.jpg",
  authorName: "作者名稱",
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-02T00:00:00Z",
  genres: [{ name: "ESG", en_name: "esg" }],
  articleId: 123,
  genreEnName: "esg",
  partner: {
    name: "合作夥伴",
    introduction: "合作夥伴介紹",
    avatar: "https://example.com/partner.jpg",
    outer_url: "https://partner.com"
  },
  extendedArticles: [
    {
      article_id: 456,
      article_genres: [{ en_name: "sustainability" }]
    }
  ]
}

<StructuredData 
  type="Article"
  data={articleData}
  appUrl="https://esg.tvbs.com.tw"
/>
```

### 組織頁面範例

```jsx
const organizationData = {
  name: "TVBS",
  description: "聯利媒體股份有限公司",
  logo: "https://esg.tvbs.com.tw/images/tvbs-logo.png",
  url: "https://www.tvbs.com.tw",
  contactPoint: {
    "@type": "ContactPoint",
    "telephone": "+886-2-1234-5678",
    "contactType": "customer service"
  },
  address: {
    "@type": "PostalAddress",
    "streetAddress": "台北市信義區",
    "addressCountry": "TW"
  },
  sameAs: [
    "https://www.facebook.com/tvbs",
    "https://www.youtube.com/tvbs"
  ]
}

<StructuredData 
  type="Organization"
  data={organizationData}
  appUrl="https://esg.tvbs.com.tw"
/>
```

### 網頁範例

```jsx
const webPageData = {
  name: "ESG 專區首頁",
  description: "TVBS ESG 永續發展專區",
  url: "https://esg.tvbs.com.tw",
  breadcrumb: {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首頁",
        "item": "https://esg.tvbs.com.tw"
      }
    ]
  }
}

<StructuredData 
  type="WebPage"
  data={webPageData}
  appUrl="https://esg.tvbs.com.tw"
/>
```

### 麵包屑導航範例

```jsx
const breadcrumbData = {
  items: [
    {
      name: "首頁",
      path: "/",
      url: "https://esg.tvbs.com.tw/"
    },
    {
      name: "文章",
      path: "/view",
      url: "https://esg.tvbs.com.tw/view"
    },
    {
      name: "ESG",
      path: "/view/esg",
      url: "https://esg.tvbs.com.tw/view/esg"
    },
    {
      name: "文章標題",
      path: "/view/esg/123",
      url: "https://esg.tvbs.com.tw/view/esg/123"
    }
  ]
}

<StructuredData 
  type="BreadcrumbList"
  data={breadcrumbData}
  appUrl="https://esg.tvbs.com.tw"
/>
```

## Props 參數

| 參數 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `type` | string | 'Article' | Schema.org 類型 |
| `data` | object | - | 結構化資料內容 |
| `appUrl` | string | - | 應用程式基礎 URL |

## 支援的類型

### Article
適用於文章、新聞、部落格文章等內容頁面。

### Organization  
適用於公司、組織介紹頁面。

### WebPage
適用於一般網頁、首頁等。

### BreadcrumbList
適用於麵包屑導航，幫助搜尋引擎理解頁面層級結構。

## 驗證工具

建議使用以下工具驗證生成的結構化資料：

1. [Google Rich Results Test](https://search.google.com/test/rich-results)
2. [Schema.org Validator](https://validator.schema.org/)
3. [Google Search Console](https://search.google.com/search-console)

## 自定義擴展

如需支援其他 Schema.org 類型，可以在 `StructuredData.jsx` 中添加新的生成函數：

```jsx
function generateCustomSchema(baseSchema, data, appUrl) {
  return {
    ...baseSchema,
    // 您的自定義屬性
  }
}
```

然後在 `generateStructuredData` 函數中添加對應的 case。
