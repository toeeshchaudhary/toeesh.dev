// The canonical origin the site is served from. Auto-follows a Vercel-assigned
// production domain (incl. the custom domain toeesh.dev) and falls back to the
// real domain. Single source of truth for metadata, robots, sitemap, and OG bases.
export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://toeesh.dev';
