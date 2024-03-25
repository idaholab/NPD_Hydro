/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    DJANGO_HOST: process.env.DJANGO_HOST,
  },
};

export default nextConfig;
