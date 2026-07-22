'use client';

import AnimatedSection from '@/components/animated-section';
import SectionSpy from '@/components/scroll-spy';
import { services, siteConfig } from '@/config/site';
import { Ship, Plane, Truck, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ElementType> = {
  ship: Ship,
  plane: Plane,
  truck: Truck,
  shield: Shield,
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

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-femar-navy to-femar-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-femar-orange rounded-full blur-3xl animate-float" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-femar-orange/20 text-femar-orange rounded-full text-sm font-medium mb-6 border border-femar-orange/30">
              Nuestros Servicios
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Servicios <span className="text-femar-orange">Logísticos</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Soluciones integrales para cada etapa de su comercio exterior. Desde el transporte hasta el despacho aduanero.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Catalog */}
      <section id="catalogo" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const IconComp = iconMap[service.icon] || Ship;
              return (
                <AnimatedSection key={service.slug} delay={i * 0.2}>
                  <Link href={`/servicios/${service.slug}`} className="group block">
                    <div className="bg-white rounded-xl border border-border p-8 h-full hover:border-femar-orange/50 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-femar-navy/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-femar-orange transition-colors duration-300">
                          <IconComp className="w-8 h-8 text-femar-navy group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-femar-navy mb-3 group-hover:text-femar-orange transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {service.description}
                          </p>
                          <div className="space-y-2 mb-6">
                            {service.features.slice(0, 3).map((feature) => (
                              <div key={feature} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-femar-orange" />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-femar-orange font-medium group-hover:gap-3 transition-all duration-200">
                            Ver servicio completo <ArrowRight className="w-4 h-4" />
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

      {/* Detailed Service Benefits */}
      <section id="detalles" className="py-20 md:py-28 bg-femar-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-femar-navy mb-4">
              ¿Por qué elegir <span className="text-femar-orange">FEMAR</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada servicio está diseñado para maximizar la eficiencia y minimizar los costos de su operación logística.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="bg-white rounded-xl border border-border p-8">
                <h3 className="text-xl font-bold text-femar-navy mb-6">Beneficios comunes en todos nuestros servicios</h3>
                <ul className="space-y-4">
                  {[
                    'Atención personalizada con agente asignado',
                    'Seguimiento en tiempo real de su carga',
                    'Transparencia total en costos y procesos',
                    'Cumplimiento garantizado de normativa',
                    'Reducción de tiempos y costos operativos',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-femar-orange" />
                      <span className="text-femar-navy">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-femar-navy rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Cobertura geográfica</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { region: 'Asia-Pacífico', ports: '35+' },
                    { region: 'Europa', ports: '20+' },
                    { region: 'América del Norte', ports: '15+' },
                    { region: 'América del Sur', ports: '25+' },
                  ].map((item) => (
                    <div key={item.region} className="bg-white/10 rounded-lg p-4">
                      <p className="text-femar-orange font-bold text-2xl">{item.ports}</p>
                      <p className="text-white/70 text-sm">{item.region}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto-servicios" className="py-20 bg-gradient-to-br from-femar-navy to-femar-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-femar-orange rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Necesita un servicio <span className="text-femar-orange">específico</span>?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Cotice sin compromiso. Le responderemos en menos de 24 horas con una propuesta adaptada a su operación.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-femar-orange text-white rounded-xl font-semibold text-lg hover:bg-femar-orange/90 transition-all duration-200 shadow-lg"
            >
              Solicitar cotización <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
