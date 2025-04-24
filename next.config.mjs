/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com', // ✅ Added Freepik
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // ✅ Kept Unsplash in case you use it too
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
