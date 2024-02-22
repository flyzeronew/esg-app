/** @type {import('next').NextConfig} */
const nextConfig = {
  apiUrl: process.env.API_URL,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'esg-statics-staging.tvbs.com.tw',
      'esg-statics.tvbs.com.tw',
      'cc.tvbs.com.tw',
      'esg-frontend-staging.tvbs.com.tw/focus',
      'esg-frontend.tvbs.com.tw/focus',
      'esg-app-alpha.vercel.app'
    ],   
  }, 
   // 自訂服務器配置
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
  env: {
    APP_URL: process.env.APP_URL
  },
  
};

export default nextConfig;
