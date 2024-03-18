/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      // development
      'localhost',
      'esg-app-alpha.vercel.app',
      // staging
      'esg-statics-staging.tvbs.com.tw',
      'esg-frontend-staging.tvbs.com.tw',
      // production
      'esg-statics-production.tvbs.com.tw',
      'esg.tvbs.com.tw',
      // youtube
      'img.youtube.com',
    ],   
  }, 
   // 自訂服務器配置
  // server: {
  //   host: '0.0.0.0',
  //   port: process.env.PORT || 3000,
  // },
  env: {
    APP_URL: process.env.APP_URL,
    GTM_ID: process.env.GTM_ID,
  },
  
};

export default nextConfig;
