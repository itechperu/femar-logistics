'use client';

import AnimatedSection from '@/components/animated-section';
import AnimatedCounter from '@/components/animated-counter';
import MagneticButton from '@/components/magnetic-button';
import SectionSpy from '@/components/scroll-spy';
import type { ServiceItem } from '@/config/site';
import { siteConfig } from '@/config/site';
import { Ship, Plane, Truck, Shield, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 mesh-gradient-hero grid-pattern overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] -right-10 w-[400px] h-[400px] bg-femar-orange/15 rounded-full blur-[80px] animate-float" />
          <div className="absolute bottom-[20%] -left-10 w-[300px] h-[300px] bg-femar-orange/10 rounded-full blur-[60px] animate-float-reverse" />
        </div>
        {/* Animated SVG shipping route */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e87722" stopOpacity="0" />
              <stop offset="50%" stopColor="#e87722" stopOpacity="1" />
              <stop offset="100%" stopColor="#e87722" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M50,300 Q400,150 700,280 T1400,200" stroke="url(#routeGrad)" strokeWidth="1.5" fill="none" strokeDasharray="10 20" className="animate-dash-flow" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-5 mb-8">
              <motion.div className="w-18 h-18 bg-femar-orange/20 rounded-2xl flex items-center justify-center border border-femar-orange/30">
                <IconComp className="w-9 h-9 text-femar-orange" />
              </motion.div>
              <span className="text-femar-orange text-sm font-semibold uppercase tracking-wider">
                Servicio de {service.shortTitle}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl">
              {service.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-5">
              <MagneticButton
                href="/contacto"
                strength={0.4}
                className="px-10 py-5 bg-femar-orange text-white rounded-xl font-bold text-lg shadow-lg shadow-femar-orange/30 flex items-center gap-3 no-underline"
              >
                {service.ctaText} <ArrowRight className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton
                href={`tel:${siteConfig.phone}`}
                strength={0.3}
                className="px-10 py-5 bg-white/8 text-white rounded-xl font-bold text-lg border border-white/15 flex items-center gap-3 no-underline hover:bg-white/15"
              >
                <Phone className="w-5 h-5" /> Llamar ahora
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-24 md:py-32 mesh-gradient-section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass-card-light p-10 md:p-14 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-1.5 bg-femar-orange rounded-r-full" />
              <h2 className="text-3xl md:text-5xl font-bold text-femar-navy mb-8 tracking-tight">
                Sobre nuestro servicio de{"\n"}
                <span className="gradient-text">{service.title}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.fullDescription}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 md:py-32 mesh-gradient-hero grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[30%] -left-10 w-[300px] h-[300px] bg-femar-orange/15 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Características del{"\n"}
              <span className="gradient-text">servicio</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <AnimatedSection key={feature} delay={i * 0.1}>
                <div className="glass-card p-6 relative overflow-hidden group hover-glow">
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-femar-orange transition-all duration-500 group-hover:w-full" />
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-femar-orange/15 rounded-xl flex items-center justify-center group-hover:bg-femar-orange transition-colors duration-300">
                      <CheckCircle className="w-5 h-5 text-femar-orange group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">{feature}</h4>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 md:py-32 mesh-gradient-section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-femar-navy mb-6 tracking-tight">
              Beneficios <span className="gradient-text">clave</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, i) => (
              <AnimatedSection key={benefit} delay={i * 0.15}>
                <div className="glass-card-light p-8 flex items-start gap-5 relative overflow-hidden group hover-glow">
                  <div className="absolute top-0 left-0 w-0 h-1 bg-femar-orange transition-all duration-500 group-hover:w-full" />
                  <div className="w-12 h-12 bg-femar-navy rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-femar-navy/20">
                    <span className="text-white font-bold text-lg">{i + 1}</span>
                  </div>
                  <p className="text-femar-navy/70 leading-relaxed text-base font-medium">{benefit}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact-service" className="py-24 mesh-gradient-hero grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-femar-orange/15 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              ¿Interesado en <span className="gradient-text">{service.title}</span>?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Cotice sin compromiso y reciba una propuesta personalizada en menos de 24 horas.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <MagneticButton
                href="/contacto"
                strength={0.4}
                className="px-10 py-5 bg-femar-orange text-white rounded-xl font-bold text-lg shadow-lg shadow-femar-orange/30 flex items-center gap-3 no-underline"
              >
                {service.ctaText} <ArrowRight className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton
                href={siteConfig.whatsappLink}
                strength={0.3}
                className="px-10 py-5 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-green-500/20 flex items-center gap-3 no-underline"
              >
                WhatsApp <Phone className="w-5 h-5" />
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
