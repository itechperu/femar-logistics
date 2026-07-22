'use client';

import AnimatedSection from '@/components/animated-section';
import SectionSpy from '@/components/scroll-spy';
import { blogPosts, siteConfig } from '@/config/site';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import Link from 'next/link';

const blogSections = [
  { id: 'articulos', title: 'Artículos' },
];

export default function BlogPageClient() {
  return (
    <>
      <SectionSpy sections={blogSections} basePath="/blog" />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-femar-navy to-femar-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 -right-20 w-72 h-72 bg-femar-orange rounded-full blur-3xl animate-float" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-femar-orange/20 text-femar-orange rounded-full text-sm font-medium mb-6 border border-femar-orange/30">
              Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Artículos de <span className="text-femar-orange">logística</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Guías, consejos y noticias sobre comercio exterior, aduanas y logística para importadores y exportadores.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section id="articulos" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.2}>
                <article className="bg-white rounded-xl border border-border overflow-hidden hover:border-femar-orange/30 hover:shadow-xl transition-all duration-300 group">
                  {/* Image placeholder */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-femar-navy/10 to-femar-orange/10 flex items-center justify-center">
                    <Tag className="w-8 h-8 text-femar-orange/60" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-femar-orange/10 text-femar-orange rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-femar-navy mb-3 group-hover:text-femar-orange transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-femar-orange font-medium text-sm group-hover:gap-3 transition-all duration-200">
                      Leer artículo <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Coming more */}
          <AnimatedSection className="text-center mt-16">
            <div className="bg-femar-light rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold text-femar-navy mb-2">Más artículos próximamente</h3>
              <p className="text-muted-foreground">
                Estamos preparando más contenido sobre logística, aduanas y comercio exterior.
                ¡Siga visitando nuestro blog para nuevas publicaciones!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-femar-navy to-femar-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-femar-orange rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Necesita asesoría <span className="text-femar-orange">experta</span>?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Nuestro equipo puede resolver cualquier duda sobre importación, exportación y despacho aduanero.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-femar-orange text-white rounded-xl font-semibold text-lg hover:bg-femar-orange/90 transition-all duration-200 shadow-lg"
            >
              Contactar expertos <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
