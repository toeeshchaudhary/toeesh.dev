import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-url';
import { getRecordingSlugs } from '@/lib/recordings';

const PAGES = ['', '/hardware', '/projects', '/recorder', '/form-01', '/now', '/about', '/cv'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...PAGES, ...getRecordingSlugs().map((s) => `/recorder/${s}`)];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === '/now' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
