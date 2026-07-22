import type { Metadata } from 'next';
import ContactPageClient from './contact-client';

export const metadata: Metadata = {
  title: 'Contacto — FEMAR Logistics SAC',
  description: 'Contacte con FEMAR Logistics SAC. Solicite su cotización gratuita para carga marítima, aérea, terrestre y despacho aduanero.',
  openGraph: {
    title: 'Contacto — FEMAR Logistics SAC',
    description: 'Solicite su cotización gratuita para servicios logísticos y aduaneros.',
    url: 'https://femarlogistics.com/contacto',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
