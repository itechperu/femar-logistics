import type { Metadata } from 'next';
import { services } from '@/config/site';
import ServiceDetailClient from './service-detail-client';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} — FEMAR Logistics SAC`,
    description: service.description,
    openGraph: {
      title: `${service.title} — FEMAR Logistics SAC`,
      description: service.description,
      url: `https://femarlogistics.com/servicios/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
