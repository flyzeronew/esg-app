/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'esg-asset.tvbs-staging.com.tw',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'esg-asset.tvbs.com.tw',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'esg.tvbs-staging.com.tw',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'esg.tvbs.com.tw',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cc.tvbs.com.tw',
        port: '',
        pathname: '/**',
      },
    ]
  },
  // 自訂服務器配置
  // server: {
  //   host: '0.0.0.0',
  //   port: process.env.PORT || 3000,
  // },
  env: {
    APP_URL: process.env.APP_URL,
    GTM_ID: process.env.GTM_ID,
    IMG_DEFAULT: process.env.IMG_DEFAULT,
    IMG_DEFAULT_SQUARE: process.env.IMG_DEFAULT_SQUARE,
    OG_IMG: process.env.OG_IMG,
    IG_ACCESS_TOKEN: process.env.IG_ACCESS_TOKEN
  },

  
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/robots',
      },
      {
        source: '/responsibility/reports/annual/:yearannual',
        destination: `${process.env.NEXT_PUBLIC_STATIC_FILES}/responsibility/reports/annual/:yearannual`,
      },
      {
        source: '/responsibility/reports/annual/:yearannual/:path*',
        destination: `${process.env.NEXT_PUBLIC_STATIC_FILES}/responsibility/reports/annual/:yearannual/:path*`,
      },
    ]
  },
}

export default nextConfig
