/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@apexer/ui', '@apexer/config', '@apexer/db'],
}

export default nextConfig
