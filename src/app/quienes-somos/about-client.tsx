'use client';

import AnimatedSection from '@/components/animated-section';
import SectionSpy from '@/components/scroll-spy';
import { aboutData, siteConfig } from '@/config/site';
import { Eye, Clock, Heart, Lightbulb, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ElementType> = {
  eye: Eye,
  clock: Clock,
  heart: Heart,
  lightbulb: Lightbulb,
  shield: Shield,
};

const aboutSections = [
  { id: 'historia', title: 'Historia' },
  { id: 'mision-vision', title: 'Misión y Visión' },
  { id: 'valores', title: 'Valores' },
  { id: 'timeline', title: 'Timeline' },
];

export default function AboutPageClient() {
  return (
    <>
      <SectionSpy sections={aboutSections} basePath="/quienes-somos" />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-femar-navy to-femar-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 -left-20 w-72 h-72 bg-femar-orange rounded-full blur-3xl animate-float" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-femar-orange/20 text-femar-orange rounded-full text-sm font-medium mb-6 border border-femar-orange/30">
              Quiénes Somos
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {aboutData.title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              {aboutData.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section id="historia" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-femar-navy mb-8">
                Nuestra <span className="text-femar-orange">Historia</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {aboutData.story}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mision-vision" className="py-20 md:py-28 bg-femar-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="bg-white rounded-xl border border-border p-8 hover:border-femar-orange/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-femar-navy mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-femar-orange/10 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-femar-orange" />
                  </div>
                  Misión
                </h3>
                <p className="text-muted-foreground leading-relaxed">{aboutData.mission}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-white rounded-xl border border-border p-8 hover:border-femar-orange/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-femar-navy mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-femar-orange/10 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-femar-orange" />
                  </div>
                  Visión
                </h3>
                <p className="text-muted-foreground leading-relaxed">{aboutData.vision}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="valores" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-femar-navy mb-4">
              Nuestros <span className="text-femar-orange">Valores</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada servicio que ofrecemos a nuestros clientes.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {aboutData.values.map((value, i) => {
              const IconComp = iconMap[value.icon] || CheckCircle;
              return (
                <AnimatedSection key={value.name} delay={i * 0.1}>
                  <motion.div
                    className="bg-white rounded-xl border border-border p-6 text-center hover:border-femar-orange/30 hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ y: -8 }}
                  >
                    <div className="w-14 h-14 bg-femar-orange/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-femar-orange transition-colors duration-300">
                      <IconComp className="w-7 h-7 text-femar-orange group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="font-bold text-femar-navy mb-2">{value.name}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 md:py-28 bg-femar-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-femar-navy mb-4">
              Nuestra <span className="text-femar-orange">Trayectoria</span>
            </h2>
          </AnimatedSection>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-femar-orange/30 -translate-x-1/2" />

            {aboutData.timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.15}>
                <div className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-femar-orange rounded-full -translate-x-1/2 border-2 border-white shadow-md z-10" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-xl border border-border p-6 hover:border-femar-orange/30 hover:shadow-lg transition-all duration-300">
                      <span className="text-femar-orange font-bold text-lg">{item.year}</span>
                      <p className="text-femar-navy mt-2">{item.event}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-femar-navy to-femar-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-femar-orange rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Confía en nuestra experiencia? <span className="text-femar-orange">Hablemos</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Permita que nuestro equipo de más de 15 años maneje su próxima operación logística.
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

import { motion } from 'framer-motion';
