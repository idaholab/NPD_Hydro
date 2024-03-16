/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    NEXT_PUBLIC_DJANGO_HOST: "npd-django-service",
  },
};

export default nextConfig;
