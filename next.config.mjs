/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   // 自訂服務器配置
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
  images: {
    domains: ['esg-statics-staging.tvbs.com.tw'],
  },
};

export default nextConfig;
