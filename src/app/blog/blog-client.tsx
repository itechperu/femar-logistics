'use client';

import AnimatedSection from '@/components/animated-section';
import MagneticButton from '@/components/magnetic-button';
import SectionSpy from '@/components/scroll-spy';
import { blogPosts } from '@/config/site';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import Link from 'next/link';

const blogSections = [
  { id: 'articulos', title: 'Artículos' },
];

export default function BlogPageClient() {
  return (
    <>
      <SectionSpy sections={blogSections} basePath="/blog" />

      {/* Hero — DARK NAVY */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-femar-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[50%] -right-10 w-[400px] h-[400px] bg-femar-orange/15 rounded-full blur-[80px] animate-float" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-femar-orange/20 text-femar-orange-light rounded-full text-sm font-semibold mb-8 border border-femar-orange/30">
              <Tag className="w-4 h-4" /> Blog
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Artículos de <span className="gradient-text">logística</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Guías, consejos y noticias sobre comercio exterior, aduanas y logística.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid — LIGHT BEIGE */}
      <section id="articulos" className="py-24 md:py-32 bg-femar-beige relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.15}>
                <article className="bg-white/95 rounded-2xl overflow-hidden group hover-glow relative shadow-sm border border-femar-navy/8 hover:shadow-lg hover:shadow-femar-orange/10">
                  <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-femar-orange via-femar-orange-light to-femar-orange transition-all duration-500 group-hover:w-full" />
                  {/* Image placeholder */}
                  <div className="aspect-[16/10] bg-femar-navy relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-[30%] left-[30%] w-[200px] h-[200px] bg-femar-orange/10 rounded-full blur-[60px]" />
                      <div className="absolute inset-0 dot-pattern opacity-20" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Tag className="w-10 h-10 text-femar-orange/40" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-femar-orange/90 text-white rounded-lg text-xs font-bold shadow-lg shadow-femar-orange/30">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs text-femar-navy/40 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-femar-orange" /> {post.readTime}
                      </span>
                      <span className="text-xs text-femar-navy/40">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-femar-navy mb-4 group-hover:text-femar-orange transition-colors duration-300 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-femar-navy/50 text-sm leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-femar-orange font-bold group-hover:gap-4 transition-all duration-300">
                      Leer artículo <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <div className="bg-white/95 p-10 relative overflow-hidden rounded-2xl shadow-sm border border-femar-navy/8">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-femar-orange via-femar-orange-light to-femar-orange opacity-30" />
              <h3 className="text-xl font-bold text-femar-navy mb-3">Más artículos próximamente</h3>
              <p className="text-femar-navy/50">
                Estamos preparando más contenido sobre logística, aduanas y comercio exterior.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA — DARK NAVY */}
      <section className="py-24 bg-femar-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-femar-orange/15 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              ¿Necesita asesoría <span className="gradient-text">experta</span>?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Nuestro equipo puede resolver cualquier duda sobre importación, exportación y despacho aduanero.
            </p>
            <MagneticButton href="/contacto" strength={0.4}
              className="px-10 py-5 bg-femar-orange text-white rounded-xl font-bold text-lg shadow-lg shadow-femar-orange/30 flex items-center gap-3 no-underline">
              Contactar expertos <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
