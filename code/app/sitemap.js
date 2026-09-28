import { site } from '@/data/data';

export default function sitemap() {
  return [{ url: site.url, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }];
}
