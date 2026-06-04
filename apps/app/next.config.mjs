/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@apexer/ui', '@apexer/config', '@apexer/db'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xxbboxkqfnaxayhmiwdm.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // avatars Google OAuth
      },
    ],
  },
}

export default nextConfig
