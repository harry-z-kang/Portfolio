/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
});

module.exports = withPWA(nextConfig);
