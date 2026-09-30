import { site } from '@/data/data';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
