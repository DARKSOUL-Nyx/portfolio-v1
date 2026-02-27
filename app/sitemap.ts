import { MetadataRoute } from 'next';
import { getSortedContent } from '@/lib/content'; // Ensure this path matches your structure

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vssnishwan.xyz'; // Replace with your actual domain

  // 1. Define Static Routes
  const staticRoutes = ['', '/about', '/uplink', '/logs', '/forge', '/arsenal'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Generate Dynamic Routes using your existing library functions
  const logRoutes = getSortedContent('logs').map((post) => ({
    url: `${baseUrl}/logs/${post.id}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const forgeRoutes = getSortedContent('forge').map((item) => ({
    url: `${baseUrl}/forge/${item.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const arsenalRoutes = getSortedContent('arsenal').map((item) => ({
    url: `${baseUrl}/arsenal/${item.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...logRoutes, ...forgeRoutes, ...arsenalRoutes];
}