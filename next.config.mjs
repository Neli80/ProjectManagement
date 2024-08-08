/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Configure for static export
  images: {
    unoptimized: true,  // Disable image optimization if needed
  },
};

export default nextConfig;
