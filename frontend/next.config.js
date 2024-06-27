/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              port: '',
              pathname: '/**',
          },
          {
              protocol: 'https',
              hostname: 'cdn-icons-png.flaticon.com',
              port: '',
              pathname: '/**',
          },
      ],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
