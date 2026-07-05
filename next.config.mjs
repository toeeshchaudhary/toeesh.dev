/** @type {import('next').NextConfig} */
const nextConfig = {
  // Baseline security headers on every response.
  async headers() {
    const secure = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
    ];
    return [{ source: '/:path*', headers: secure }];
  },
};

export default nextConfig;
