/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL,
    MONGO_URI: process.env.MONGO_URI,
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
