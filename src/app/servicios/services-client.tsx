'use client';

import AnimatedSection from '@/components/animated-section';
import MagneticButton from '@/components/magnetic-button';
import SectionSpy from '@/components/scroll-spy';
import { services, siteConfig } from '@/config/site';
import { Ship, Plane, Truck, Shield, ArrowRight, CheckCircle, Globe } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ElementType> = {
  ship: Ship, plane: Plane, truck: Truck, shield: Shield,
};

const servicesSections = [
  { id: 'catalogo', title: 'Catálogo' },
  { id: 'detalles', title: 'Detalles' },
  { id: 'contacto-servicios', title: 'Contacto' },
];

export default function ServicesPageClient() {
  return (
    <>
      <SectionSpy sections={servicesSections} basePath="/servicios" />

      {/* Hero Banner — DARK NAVY */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-femar-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-[20%] -right-10 w-[400px] h-[400px] bg-femar-orange/15 rounded-full blur-[80px] animate-float" />
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-femar-orange/10 rounded-full blur-[60px]" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-femar-orange/20 text-femar-orange-light rounded-full text-sm font-semibold mb-8 border border-femar-orange/30">
              <Ship className="w-4 h-4" /> Nuestros Servicios
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Servicios <span className="gradient-text">Logísticos</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Soluciones integrales para cada etapa de su comercio exterior.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Catalog — LIGHT BEIGE */}
      <section id="catalogo" className="py-24 md:py-32 bg-femar-beige relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[5%] w-[250px] h-[250px] bg-femar-orange/8 rounded-full blur-[60px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, i) => {
              const IconComp = iconMap[service.icon] || Ship;
              const isFeatured = i === 0;
              return (
                <AnimatedSection key={service.slug} delay={i * 0.15} className={isFeatured ? 'md:col-span-2' : ''}>
                  <Link href={`/servicios/${service.slug}`} className="group block">
                    <div className={`bg-white/95 p-8 md:p-10 h-full relative overflow-hidden rounded-2xl shadow-sm border border-femar-navy/8 hover:shadow-lg hover:shadow-femar-orange/10 transition-all duration-300 ${isFeatured ? 'min-h-[300px]' : 'min-h-[240px]'}`}>
                      <div className="absolute top-0 left-0 w-0 h-1.5 bg-femar-orange transition-all duration-500 group-hover:w-full" />
                      <div className="absolute -right-16 -top-16 w-32 h-32 bg-femar-orange/5 rounded-full transition-all duration-700 group-hover:w-[500px] group-hover:h-[500px] group-hover:bg-femar-orange/8" />
                      <div className="relative">
                        <div className="flex items-start gap-6">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${isFeatured ? 'bg-femar-navy text-white group-hover:bg-femar-orange shadow-lg shadow-femar-navy/20' : 'bg-femar-orange/10 text-femar-orange group-hover:bg-femar-navy group-hover:text-white'}`}>
                            <IconComp className="w-8 h-8" />
                          </div>
                          <div className="flex-1">
                            <h3 className={`font-bold mb-3 transition-colors duration-300 ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} text-femar-navy group-hover:text-femar-orange`}>
                              {service.title}
                            </h3>
                            <p className="text-femar-navy/50 leading-relaxed mb-6">
                              {service.description}
                            </p>
                            <div className="space-y-2 mb-6">
                              {service.features.slice(0, 3).map((feature) => (
                                <div key={feature} className="flex items-center gap-2.5 text-sm">
                                  <CheckCircle className="w-4 h-4 text-femar-orange" />
                                  <span className="text-femar-navy/50">{feature}</span>
                                </div>
                              ))}
                            </div>
                            <div className="flex items-center gap-2 text-femar-orange font-bold group-hover:gap-4 transition-all duration-300">
                              Ver servicio completo <ArrowRight className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Benefits — DARK NAVY */}
      <section id="detalles" className="py-24 md:py-32 bg-femar-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[30%] -left-10 w-[300px] h-[300px] bg-femar-orange/15 rounded-full blur-[80px] animate-float" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              ¿Por qué elegir <span className="gradient-text">FEMAR</span>?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="bg-white/5 backdrop-blur-xl p-10 relative overflow-hidden hover-glow rounded-2xl border border-white/10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-femar-orange via-femar-orange-light to-femar-orange" />
                <h3 className="text-xl font-bold text-white mb-8">Beneficios comunes</h3>
                <ul className="space-y-5">
                  {[
                    'Atención personalizada con agente asignado',
                    'Seguimiento en tiempo real de su carga',
                    'Transparencia total en costos y procesos',
                    'Cumplimiento garantizado de normativa',
                    'Reducción de tiempos y costos operativos',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-femar-orange/15 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-femar-orange" />
                      </div>
                      <span className="text-white/70">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-white/5 backdrop-blur-xl p-10 relative overflow-hidden hover-glow rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  <Globe className="w-5 h-5 text-femar-orange" /> Cobertura geográfica
                </h3>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { region: 'Asia-Pacífico', ports: '35+' },
                    { region: 'Europa', ports: '20+' },
                    { region: 'América del Norte', ports: '15+' },
                    { region: 'América del Sur', ports: '25+' },
                  ].map((item) => (
                    <div key={item.region} className="bg-white/5 rounded-xl p-5 group hover:bg-femar-orange/10 transition-colors duration-300">
                      <p className="text-femar-orange font-bold text-3xl">{item.ports}</p>
                      <p className="text-white/50 text-sm mt-1">{item.region}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA — LIGHT BEIGE */}
      <section id="contacto-servicios" className="py-24 bg-femar-beige relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-femar-navy mb-8 tracking-tight">
              ¿Necesita un servicio <span className="text-femar-orange">específico</span>?
            </h2>
            <p className="text-lg text-femar-navy/50 mb-10 max-w-2xl mx-auto">
              Cotice sin compromiso. Le responderemos en menos de 24 horas.
            </p>
            <MagneticButton href="/contacto" strength={0.4}
              className="px-10 py-5 bg-femar-orange text-white rounded-xl font-bold text-lg shadow-lg shadow-femar-orange/30 flex items-center gap-3 no-underline">
              Solicitar cotización <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
