import { projects, site } from '@/data/data';

export default function sitemap() {
  return [
    { url: site.url, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    ...projects
      .filter((p) => p.slug)
      .map((p) => ({ url: `${site.url}/notebooks/${p.slug}`, changeFrequency: 'yearly', priority: 0.7 })),
  ];
}
