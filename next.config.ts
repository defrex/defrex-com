import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: isDevelopment ? '*' : 'https://defrex.com',
          },
          {
            key: 'Content-Security-Policy',
            value: isDevelopment 
              ? "frame-ancestors *;" 
              : "frame-ancestors 'none';",
          },
          // Add X-Frame-Options as fallback for older browsers
          {
            key: 'X-Frame-Options',
            value: isDevelopment ? 'ALLOWALL' : 'DENY',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
