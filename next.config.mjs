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
      'esg-frontend-staging.tvbs.com.tw',
      'esg-frontend.tvbs.com.tw',
      'esg-app-alpha.vercel.app',
      'img.youtube.com'
    ],   
  }, 
   // 自訂服務器配置
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
  env: {
    APP_URL: process.env.APP_URL,
    GTM_ID: process.env.GTM_ID,
  },
  
};

export default nextConfig;
