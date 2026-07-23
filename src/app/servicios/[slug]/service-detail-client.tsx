'use client';

import AnimatedSection from '@/components/animated-section';
import SectionSpy from '@/components/scroll-spy';
import type { ServiceItem } from '@/config/site';
import { siteConfig } from '@/config/site';
import { Ship, Plane, Truck, Shield, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ElementType> = {
  ship: Ship,
  plane: Plane,
  truck: Truck,
  shield: Shield,
};

interface ServiceDetailClientProps {
  service: ServiceItem;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const IconComp = iconMap[service.icon] || Ship;
  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'features', title: 'Features' },
    { id: 'benefits', title: 'Benefits' },
    { id: 'contact-service', title: 'Contact' },
  ];

  return (
    <>
      <SectionSpy sections={sections} basePath={`/servicios/${service.slug}`} />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-femar-navy to-femar-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 -right-20 w-72 h-72 bg-femar-orange rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-femar-orange/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-femar-orange/20 rounded-xl flex items-center justify-center border border-femar-orange/30">
                <IconComp className="w-8 h-8 text-femar-orange" />
              </div>
              <span className="text-femar-orange text-sm font-medium uppercase tracking-wider">
                Servicio de {service.shortTitle}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-femar-orange text-white rounded-xl font-semibold text-lg hover:bg-femar-orange/90 transition-all duration-200 shadow-lg flex items-center gap-2"
              >
                {service.ctaText} <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-200 border border-white/20 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" /> Llamar ahora
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-femar-navy mb-8">
                Sobre nuestro servicio de <span className="text-femar-orange">{service.title}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.fullDescription}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28 bg-femar-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-femar-navy mb-4">
              Características del <span className="text-femar-orange">servicio</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <AnimatedSection key={feature} delay={i * 0.1}>
                <div className="bg-white rounded-xl border border-border p-6 hover:border-femar-orange/30 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-femar-orange" />
                    <h4 className="font-semibold text-femar-navy">{feature}</h4>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-femar-navy mb-4">
              Beneficios <span className="text-femar-orange">clave</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, i) => (
              <AnimatedSection key={benefit} delay={i * 0.15}>
                <div className="bg-femar-navy rounded-xl p-6 text-white flex items-start gap-4">
                  <div className="w-10 h-10 bg-femar-orange rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">{i + 1}</span>
                  </div>
                  <p className="text-white/90 leading-relaxed">{benefit}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact-service" className="py-20 bg-gradient-to-br from-femar-navy to-femar-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-femar-orange rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Interesado en <span className="text-femar-orange">{service.title}</span>?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Cotice sin compromiso y reciba una propuesta personalizada en menos de 24 horas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-femar-orange text-white rounded-xl font-semibold text-lg hover:bg-femar-orange/90 transition-all duration-200 shadow-lg flex items-center gap-2"
              >
                {service.ctaText} <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 text-white rounded-xl font-semibold text-lg hover:bg-green-600 transition-all duration-200 shadow-lg flex items-center gap-2"
              >
                WhatsApp <Phone className="w-5 h-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
