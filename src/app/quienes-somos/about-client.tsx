'use client';

import AnimatedSection from '@/components/animated-section';
import AnimatedCounter from '@/components/animated-counter';
import MagneticButton from '@/components/magnetic-button';
import SectionSpy from '@/components/scroll-spy';
import { aboutData, siteConfig } from '@/config/site';
import { Eye, Clock, Heart, Lightbulb, Shield, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 mesh-gradient-hero grid-pattern overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] -left-10 w-[400px] h-[400px] bg-femar-orange/15 rounded-full blur-[80px] animate-float" />
          <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[60px] animate-float-reverse" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-femar-orange/20 text-femar-orange rounded-full text-sm font-semibold mb-8 border border-femar-orange/30">
              <Eye className="w-4 h-4" /> Quiénes Somos
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {aboutData.title.split(' ').slice(0, 1).join('')} <span className="gradient-text">{aboutData.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              {aboutData.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section id="historia" className="py-24 md:py-32 mesh-gradient-section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[30%] left-[5%] w-[200px] h-[200px] bg-femar-orange/5 rounded-full blur-[60px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="glass-card-light p-10 md:p-14 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-1 bg-femar-orange rounded-r-full" />
                <h2 className="text-3xl md:text-5xl font-bold text-femar-navy mb-8 tracking-tight">
                  Nuestra <span className="gradient-text">Historia</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {aboutData.story}
                </p>
                {/* Key numbers */}
                <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-femar-navy/10">
                  {[
                    { label: 'Años', value: '15+', icon: Clock },
                    { label: 'Países', value: '50+', icon: Star },
                    { label: 'Clientes', value: '200+', icon: Heart },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <AnimatedCounter value={stat.value} suffix="+" className="block text-femar-navy" />
                      <p className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mision-vision" className="py-24 md:py-32 mesh-gradient-hero grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[50%] -right-10 w-[300px] h-[300px] bg-femar-orange/15 rounded-full blur-[80px]" />
          <div className="absolute bottom-[20%] -left-10 w-[200px] h-[200px] bg-white/5 rounded-full blur-[60px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="glass-card p-10 relative overflow-hidden group hover-glow">
                <div className="absolute top-0 left-0 w-0 h-1 bg-femar-orange transition-all duration-500 group-hover:w-full" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                  <div className="w-14 h-14 bg-femar-orange/15 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-femar-orange" />
                  </div>
                  Misión
                </h3>
                <p className="text-white/60 leading-relaxed text-base">{aboutData.mission}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="glass-card p-10 relative overflow-hidden group hover-glow">
                <div className="absolute top-0 left-0 w-0 h-1 bg-femar-orange transition-all duration-500 group-hover:w-full" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                  <div className="w-14 h-14 bg-femar-orange/15 rounded-2xl flex items-center justify-center">
                    <Lightbulb className="w-7 h-7 text-femar-orange" />
                  </div>
                  Visión
                </h3>
                <p className="text-white/60 leading-relaxed text-base">{aboutData.vision}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="valores" className="py-24 md:py-32 mesh-gradient-section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-femar-navy mb-6 tracking-tight">
              Nuestros <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada servicio que ofrecemos.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {aboutData.values.map((value, i) => {
              const IconComp = iconMap[value.icon] || CheckCircle;
              return (
                <AnimatedSection key={value.name} delay={i * 0.1}>
                  <motion.div
                    className="glass-card-light p-7 text-center group hover-glow relative overflow-hidden"
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-femar-orange transition-all duration-500 group-hover:w-full" />
                    <div className="w-16 h-16 bg-femar-orange/10 rounded-2xl flex items-center justify-center mb-5 mx-auto group-hover:bg-femar-orange transition-colors duration-300">
                      <IconComp className="w-8 h-8 text-femar-orange group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="font-bold text-femar-navy mb-3 text-lg">{value.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-24 md:py-32 mesh-gradient-hero grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-[30%] left-[10%] w-[300px] h-[300px] bg-femar-orange/10 rounded-full blur-[80px] animate-float" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Nuestra <span className="gradient-text">Trayectoria</span>
            </h2>
          </AnimatedSection>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-femar-orange/20 -translate-x-1/2" />

            {aboutData.timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.12}>
                <div className={`relative flex items-center mb-14 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Glowing dot */}
                  <div className="absolute left-8 md:left-1/2 w-5 h-5 bg-femar-orange rounded-full -translate-x-1/2 border-2 border-femar-dark shadow-lg shadow-femar-orange/40 z-10">
                    <div className="absolute inset-0 bg-femar-orange rounded-full animate-ping opacity-20" />
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-14' : 'md:pl-14'}`}>
                    <div className="glass-card p-6 hover-glow relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-0 h-1 bg-femar-orange transition-all duration-500 group-hover:w-full" />
                      <span className="text-femar-orange font-bold text-xl">{item.year}</span>
                      <p className="text-white/70 mt-3 leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 mesh-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-femar-orange/15 rounded-full blur-[100px] animate-float" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              ¿Confía en nuestra experiencia?{"\n"}
              <span className="gradient-text">Hablemos</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Permita que nuestro equipo de más de 15 años maneje su próxima operación logística.
            </p>
            <MagneticButton
              href="/contacto"
              strength={0.4}
              className="px-10 py-5 bg-femar-orange text-white rounded-xl font-bold text-lg shadow-lg shadow-femar-orange/30 flex items-center gap-3 no-underline"
            >
              Solicitar cotización <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
