'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from '@/components/animated-section';
import SectionSpy from '@/components/scroll-spy';
import { heroSection, services, testimonials, aboutData, siteConfig, homeSections } from '@/config/site';
import { Ship, Plane, Truck, Shield, ArrowRight, CheckCircle, Clock, Eye, Heart, Lightbulb, Star, Phone, ChevronRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  ship: Ship,
  plane: Plane,
  truck: Truck,
  shield: Shield,
  eye: Eye,
  clock: Clock,
  heart: Heart,
  lightbulb: Lightbulb,
};

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <>
      <SectionSpy sections={homeSections} />

      {/* ========== HERO SECTION ========== */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-gradient-to-br from-femar-navy via-femar-navy/95 to-femar-dark"
        >
          {/* Animated overlay pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-femar-orange rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-femar-orange/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-1.5 bg-femar-orange/20 text-femar-orange rounded-full text-sm font-medium mb-6 border border-femar-orange/30">
                  Logística & Aduanas — Perú
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              >
                Su carga,{' '}
                <span className="text-femar-orange">nuestra misión</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed"
              >
                {heroSection.subheadline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href={heroSection.ctaPrimary.href}
                  className="px-8 py-4 bg-femar-orange text-white rounded-xl font-semibold text-lg hover:bg-femar-orange/90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 magnetic-btn"
                >
                  {heroSection.ctaPrimary.text}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href={heroSection.ctaSecondary.href}
                  className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-200 border border-white/20 flex items-center gap-2"
                >
                  {heroSection.ctaSecondary.text}
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {heroSection.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-femar-orange/50 transition-colors duration-300"
                >
                  <p className="text-3xl md:text-4xl font-bold text-femar-orange">{stat.value}</p>
                  <p className="text-sm text-white/70 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 bg-white/20 rounded-full border border-white/30 flex items-start justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section id="servicios" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-femar-orange/10 text-femar-orange rounded-full text-sm font-medium mb-4 border border-femar-orange/20">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-femar-navy mb-4">
              Soluciones integrales para su <span className="text-femar-orange">comercio exterior</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desde transporte marítimo hasta despacho aduanero, cubrimos cada etapa de su cadena logística con profesionalismo y eficiencia.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const IconComp = iconMap[service.icon] || Ship;
              return (
                <AnimatedSection key={service.slug} delay={i * 0.15}>
                  <Link href={`/servicios/${service.slug}`} className="group block">
                    <div className="bg-white rounded-xl border border-border p-6 h-full hover:border-femar-orange/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="w-14 h-14 bg-femar-navy/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-femar-orange transition-colors duration-300">
                        <IconComp className="w-7 h-7 text-femar-navy group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-femar-navy mb-2 group-hover:text-femar-orange transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-femar-orange text-sm font-medium group-hover:gap-3 transition-all duration-200">
                        Ver detalles <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section id="nosotros" className="py-20 md:py-28 bg-femar-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-femar-orange/10 text-femar-orange rounded-full text-sm font-medium mb-4 border border-femar-orange/20">
                Quiénes Somos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-femar-navy mb-6">
                Más de 15 años construyendo <span className="text-femar-orange">confianza</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {aboutData.story}
              </p>
              <Link
                href="/quienes-somos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-femar-navy text-white rounded-xl font-semibold hover:bg-femar-navy/90 transition-colors duration-200"
              >
                Conocer más <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                {aboutData.values.slice(0, 4).map((value, i) => {
                  const IconComp = iconMap[value.icon] || Star;
                  return (
                    <motion.div
                      key={value.name}
                      className="bg-white rounded-xl p-5 border border-border hover:border-femar-orange/30 hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-10 h-10 bg-femar-orange/10 rounded-lg flex items-center justify-center mb-3">
                        <IconComp className="w-5 h-5 text-femar-orange" />
                      </div>
                      <h4 className="font-semibold text-femar-navy text-sm mb-1">{value.name}</h4>
                      <p className="text-xs text-muted-foreground">{value.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section id="testimonios" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-femar-orange/10 text-femar-orange rounded-full text-sm font-medium mb-4 border border-femar-orange/20">
              Testimonios
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-femar-navy mb-4">
              Lo que dicen nuestros <span className="text-femar-orange">clientes</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 0.2}>
                <div className="bg-white rounded-xl border border-border p-6 hover:border-femar-orange/30 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-femar-orange fill-femar-orange" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 bg-femar-navy rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-femar-navy text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role} — {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT CTA SECTION ========== */}
      <section id="contacto-cta" className="py-20 md:py-28 bg-gradient-to-br from-femar-navy via-femar-navy to-femar-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-femar-orange rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-femar-orange/50 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Necesita una <span className="text-femar-orange">cotización</span>?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contacte con nuestro equipo hoy. Le responderemos en menos de 24 horas con una propuesta adaptada a sus necesidades logísticas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-femar-orange text-white rounded-xl font-semibold text-lg hover:bg-femar-orange/90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Contactar ahora <ArrowRight className="w-5 h-5" />
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
    </>
  );
}
