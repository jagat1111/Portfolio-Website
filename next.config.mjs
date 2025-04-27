/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-Website' : '', // ✅ Must start with '/'
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com', // ✅ Freepik
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // ✅ Unsplash
      },
    ],
    unoptimized: true, // ✅ Required for static export
  },
  compiler: {
    styledComponents: true, // ✅ If you use styled-components
  },
};

export default nextConfig;
