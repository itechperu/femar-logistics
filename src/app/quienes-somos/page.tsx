import type { Metadata } from 'next';
import AboutPageClient from './about-client';

export const metadata: Metadata = {
  title: 'Quiénes Somos — FEMAR Logistics SAC',
  description: 'Más de 15 años de experiencia en logística y aduanas. Conozca nuestra historia, misión, visión y valores que nos hacen referentes en el sector.',
  openGraph: {
    title: 'Quiénes Somos — FEMAR Logistics SAC',
    description: 'Más de 15 años de experiencia en logística y aduanas. Conozca nuestra historia, misión, visión y valores.',
    url: 'https://femarlogistics.com/quienes-somos',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
