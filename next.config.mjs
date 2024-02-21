/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['esg-statics-staging.tvbs.com.tw','esg-statics.tvbs.com.tw','cc.tvbs.com.tw'],   
  }, 
   // 自訂服務器配置
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },  
};

export default nextConfig;
