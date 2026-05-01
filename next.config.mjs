/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
      
        hostname: "example.com",
      },
    ],
  },
};

export default nextConfig;
