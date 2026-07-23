import type { Metadata } from 'next';
import BlogPageClient from './blog-client';

export const metadata: Metadata = {
  title: 'Blog — FEMAR Logistics SAC',
  description: 'Artículos sobre logística, aduanas y comercio exterior. Guías, consejos y noticias del sector para importadores y exportadores.',
  openGraph: {
    title: 'Blog — FEMAR Logistics SAC',
    description: 'Artículos sobre logística, aduanas y comercio exterior.',
    url: 'https://femarlogistics.com/blog',
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
