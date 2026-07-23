'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import AnimatedSection from '@/components/animated-section';
import AnimatedCounter from '@/components/animated-counter';
import MagneticButton from '@/components/magnetic-button';
import HeroSlideshow from '@/components/hero-slideshow';
import SectionSpy from '@/components/scroll-spy';
import { heroSection, services, testimonials, aboutData, siteConfig, homeSections } from '@/config/site';
import { Ship, Plane, Truck, Shield, ArrowRight, CheckCircle, Clock, Eye, Heart, Lightbulb, Star, Phone, ChevronRight, Globe, Package, Users, Map } from 'lucide-react';

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

const statIconMap: Record<string, React.ElementType> = {
  'Años de experiencia': Clock,
  'Contenedores gestionados': Package,
  'Clientes satisfechos': Users,
  'Países cubiertos': Globe,
};

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <SectionSpy sections={homeSections} />

      {/* ========== HERO SECTION — FULL BLEED + AUTO SLIDESHOW ========== */}
      <section id="hero" ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
        {/* Full-bleed slideshow background */}
        <HeroSlideshow />

        {/* Content overlay with parallax */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-32 md:pb-40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text + CTAs */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-femar-orange/15 text-femar-orange rounded-full text-sm font-semibold mb-8 border border-femar-orange/25">
                  <Globe className="w-4 h-4" /> Logística & Aduanas — Perú
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8 tracking-tight"
              >
                Su carga,{"\n"}
                <span className="gradient-text">nuestra misión</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed"
              >
                {heroSection.subheadline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-5"
              >
                <MagneticButton
                  href={heroSection.ctaPrimary.href}
                  strength={0.4}
                  className="px-10 py-5 bg-femar-orange text-white rounded-xl font-bold text-lg shadow-lg shadow-femar-orange/30 flex items-center gap-3 no-underline"
                >
                  {heroSection.ctaPrimary.text} <ArrowRight className="w-5 h-5" />
                </MagneticButton>
                <MagneticButton
                  href={heroSection.ctaSecondary.href}
                  strength={0.3}
                  className="px-10 py-5 bg-white/8 text-white rounded-xl font-bold text-lg border border-white/15 flex items-center gap-3 no-underline hover:bg-white/15"
                >
                  {heroSection.ctaSecondary.text} <ChevronRight className="w-5 h-5" />
                </MagneticButton>
              </motion.div>

              {/* Trust bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-12 flex items-center gap-6"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-femar-navy-light border-2 border-femar-navy flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-white/50">
                  <span className="text-white font-semibold">200+</span> clientes confían en nosotros
                </div>
              </motion.div>
            </div>

            {/* Right: Stats with animated counters */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-2 gap-5"
            >
              {heroSection.stats.map((stat, i) => {
                const Icon = statIconMap[stat.label] || Star;
                const suffix = stat.value.includes('+') ? '+' : '';
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 + i * 0.15, type: 'spring' }}
                    className="glass-card p-6 md:p-8 hover-glow group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-femar-orange/5 rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:bg-femar-orange/10" />
                    <Icon className="w-5 h-5 text-femar-orange mb-3" />
                    <AnimatedCounter
                      value={stat.value}
                      suffix={suffix}
                      className="block"
                    />
                    <p className="text-sm text-white/50 mt-2 font-medium">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-7 h-12 bg-white/10 rounded-full border border-white/20 flex items-start justify-center pt-3"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-femar-orange rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ========== SERVICES SECTION — BENTO GRID ========== */}
      <section id="servicios" className="py-24 md:py-32 mesh-gradient-section relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-femar-orange/10 text-femar-orange rounded-full text-sm font-semibold mb-6 border border-femar-orange/20">
              <Ship className="w-4 h-4" /> Nuestros Servicios
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-femar-navy mb-6 tracking-tight">
              Soluciones integrales para{"\n"}
              <span className="gradient-text">comercio exterior</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Desde transporte marítimo hasta despacho aduanero, cubrimos cada etapa de su cadena logística con profesionalismo y eficiencia.
            </p>
          </AnimatedSection>

          {/* Bento-style grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, i) => {
              const IconComp = iconMap[service.icon] || Ship;
              const isLarge = i === 0 || i === 3;
              return (
                <AnimatedSection
                  key={service.slug}
                  delay={i * 0.12}
                  className={isLarge ? 'md:col-span-2' : ''}
                >
                  <Link href={`/servicios/${service.slug}`} className="group block">
                    <div className={`tilt-card glass-card-light p-8 h-full relative overflow-hidden hover-glow transition-all duration-500 ${isLarge ? 'min-h-[280px]' : 'min-h-[220px]'}`}>
                      <div className="absolute -right-12 -top-12 w-32 h-32 bg-femar-orange/5 rounded-full transition-all duration-700 group-hover:w-[400px] group-hover:h-[400px] group-hover:bg-femar-orange/8" />
                      <div className="absolute top-0 left-0 w-0 h-1 bg-femar-orange transition-all duration-500 group-hover:w-full" />

                      <div className="relative tilt-card-inner">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${isLarge ? 'bg-femar-navy text-white group-hover:bg-femar-orange' : 'bg-femar-orange/10 text-femar-orange group-hover:bg-femar-navy group-hover:text-white'}`}>
                          <IconComp className="w-7 h-7" />
                        </div>
                        <h3 className={`font-bold mb-3 transition-colors duration-300 ${isLarge ? 'text-2xl md:text-3xl' : 'text-xl'} text-femar-navy group-hover:text-femar-orange`}>
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 text-femar-orange font-semibold group-hover:gap-4 transition-all duration-300">
                          Ver servicio completo <ArrowRight className="w-5 h-5" />
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

      {/* ========== ABOUT SECTION — PARALLAX LAYERS ========== */}
      <section id="nosotros" className="py-24 md:py-32 mesh-gradient-hero relative overflow-hidden grid-pattern">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-femar-orange/15 rounded-full blur-[80px] animate-float" />
          <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[60px] animate-float-reverse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-femar-orange/20 text-femar-orange rounded-full text-sm font-semibold mb-8 border border-femar-orange/30">
                <Eye className="w-4 h-4" /> Quiénes Somos
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                Más de 15 años construyendo{"\n"}
                <span className="gradient-text">confianza</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                {aboutData.story}
              </p>
              <MagneticButton
                href="/quienes-somos"
                strength={0.3}
                className="px-8 py-4 bg-femar-orange text-white rounded-xl font-bold text-lg shadow-lg shadow-femar-orange/30 flex items-center gap-3 no-underline"
              >
                Conocer más <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="grid grid-cols-2 gap-5">
                {aboutData.values.slice(0, 4).map((value, i) => {
                  const IconComp = iconMap[value.icon] || Star;
                  return (
                    <motion.div
                      key={value.name}
                      className="glass-card p-6 group relative overflow-hidden hover-glow"
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-femar-orange transition-all duration-500 group-hover:w-full" />
                      <div className="w-12 h-12 bg-femar-orange/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-femar-orange transition-colors duration-300">
                        <IconComp className="w-6 h-6 text-femar-orange group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h4 className="font-bold text-white text-base mb-2">{value.name}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section id="testimonios" className="py-24 md:py-32 mesh-gradient-light relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-femar-orange/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-femar-orange/10 text-femar-orange rounded-full text-sm font-semibold mb-6 border border-femar-orange/20">
              <Star className="w-4 h-4" /> Testimonios
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-femar-navy mb-6 tracking-tight">
              Lo que dicen nuestros{"\n"}
              <span className="gradient-text">clientes</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 0.2}>
                <div className="glass-card-light p-8 relative overflow-hidden group hover-glow">
                  <div className="absolute top-0 left-0 right-0 h-0 bg-gradient-to-r from-femar-orange via-femar-orange-light to-femar-orange transition-all duration-500 group-hover:h-1" />
                  <div className="text-femar-orange/20 text-6xl font-serif leading-none mb-4 select-none">&ldquo;</div>
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-femar-orange fill-femar-orange" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-base italic">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div className="w-12 h-12 bg-femar-navy rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-femar-navy/20">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-femar-navy">{testimonial.name}</p>
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
      <section id="contacto-cta" className="py-24 md:py-32 mesh-gradient-hero relative overflow-hidden grid-pattern">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[30%] -left-10 w-[500px] h-[500px] bg-femar-orange/20 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-[10%] -right-10 w-[400px] h-[400px] bg-femar-orange/10 rounded-full blur-[80px] animate-float-reverse" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-femar-orange/20 text-femar-orange rounded-full text-sm font-semibold mb-8 border border-femar-orange/30">
              <Phone className="w-4 h-4" /> Cotización Gratis
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              ¿Necesita una{"\n"}
              <span className="gradient-text">cotización</span>?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Contacte con nuestro equipo hoy. Le responderemos en menos de 24 horas con una propuesta adaptada a sus necesidades logísticas.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <MagneticButton
                href="/contacto"
                strength={0.4}
                className="px-10 py-5 bg-femar-orange text-white rounded-xl font-bold text-lg shadow-lg shadow-femar-orange/30 flex items-center gap-3 no-underline"
              >
                Contactar ahora <ArrowRight className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton
                href={siteConfig.whatsappLink}
                strength={0.3}
                className="px-10 py-5 bg-green-500/20 text-white rounded-xl font-bold text-lg border border-green-400/30 flex items-center gap-3 no-underline hover:bg-green-500/30"
              >
                <Phone className="w-5 h-5" /> WhatsApp
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
