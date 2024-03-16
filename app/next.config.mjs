/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    NEXT_PUBLIC_DJANGO_HOST: process.env.NEXT_PUBLIC_DJANGO_HOST,
  },
};

export default nextConfig;
