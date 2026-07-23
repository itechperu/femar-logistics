import type { Metadata } from 'next';
import ServicesPageClient from './services-client';

export const metadata: Metadata = {
  title: 'Servicios — FEMAR Logistics SAC',
  description: 'Servicios de carga marítima, aérea, terrestre y despacho aduanero. Soluciones logísticas integrales para importadores y exportadores en Perú.',
  openGraph: {
    title: 'Servicios — FEMAR Logistics SAC',
    description: 'Servicios de carga marítima, aérea, terrestre y despacho aduanero.',
    url: 'https://femarlogistics.com/servicios',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
