import { MetadataRoute } from 'next';
import { posts } from '@/lib/data';

const URL = 'https://www.tiptopsolutionhospital.ng';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/about',
    '/services',
    '/blog',
    '/book-appointment',
    '/contact',
    '/doctors',
    '/emergency',
    '/symptom-checker',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }));

  const blogPostRoutes = posts.map((post) => ({
    url: `${URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...blogPostRoutes];
}
