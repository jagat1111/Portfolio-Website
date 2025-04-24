/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/portfolio-website', // Add base path for GitHub Pages
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
    unoptimized: true, // Required for static export
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
