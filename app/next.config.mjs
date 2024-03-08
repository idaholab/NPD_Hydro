/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    NEXT_PUBLIC_DJANGO_HOST: "http://localhost:8000",
  },
};

export default nextConfig;
