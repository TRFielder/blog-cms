/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: "https://fast-bastion-47554.herokuapp.com",
    CMS_PASSWORD: "YB$n3j#b4MfM*7",
  },
};

module.exports = nextConfig;
