'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/animated-section';
import MagneticButton from '@/components/magnetic-button';
import SectionSpy from '@/components/scroll-spy';
import { siteConfig } from '@/config/site';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const contactSections = [
  { id: 'formulario', title: 'Formulario' },
  { id: 'informacion', title: 'Información' },
];

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', service: '', message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <SectionSpy sections={contactSections} basePath="/contacto" />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 mesh-gradient-hero grid-pattern overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-[20%] -right-10 w-[400px] h-[400px] bg-femar-orange/15 rounded-full blur-[80px] animate-float" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-femar-orange/20 text-femar-orange rounded-full text-sm font-semibold mb-8 border border-femar-orange/30">
              <Phone className="w-4 h-4" /> Contacto
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Hablemos de su{"\n"}
              <span className="gradient-text">proyecto</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              Solicite su cotización gratuita. Le responderemos en menos de 24 horas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section id="formulario" className="py-24 md:py-32 mesh-gradient-section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                {isSubmitted ? (
                  <div className="glass-card-light p-14 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600" />
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-8" />
                    <h3 className="text-3xl font-bold text-femar-navy mb-6">Mensaje enviado</h3>
                    <p className="text-muted-foreground mb-4">
                      Gracias por contactar FEMAR Logistics. Le responderemos en menos de 24 horas.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Si necesita respuesta inmediata, llame al {siteConfig.phone} o escriba por WhatsApp
                    </p>
                    <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-green-500 text-white rounded-lg font-bold text-sm hover:bg-green-600 transition-colors">
                      <MessageCircle className="w-4 h-4" /> WhatsApp directo
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-card-light p-8 md:p-10 space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-femar-orange via-femar-orange-light to-femar-orange" />
                    <h3 className="text-xl font-bold text-femar-navy mb-2">Formulario de contacto</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-femar-navy mb-2">Nombre completo *</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-femar-navy/10 bg-white text-femar-navy focus:outline-none focus:border-femar-orange focus:ring-4 focus:ring-femar-orange/10 transition-all shadow-sm"
                          placeholder="Su nombre" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-femar-navy mb-2">Empresa</label>
                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-femar-navy/10 bg-white text-femar-navy focus:outline-none focus:border-femar-orange focus:ring-4 focus:ring-femar-orange/10 transition-all shadow-sm"
                          placeholder="Nombre de su empresa" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-femar-navy mb-2">Email *</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-femar-navy/10 bg-white text-femar-navy focus:outline-none focus:border-femar-orange focus:ring-4 focus:ring-femar-orange/10 transition-all shadow-sm"
                          placeholder="correo@empresa.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-femar-navy mb-2">Teléfono</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-femar-navy/10 bg-white text-femar-navy focus:outline-none focus:border-femar-orange focus:ring-4 focus:ring-femar-orange/10 transition-all shadow-sm"
                          placeholder="+51 959 265 574" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-femar-navy mb-2">Servicio requerido *</label>
                      <select id="service" name="service" required value={formData.service} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-femar-navy/10 bg-white text-femar-navy focus:outline-none focus:border-femar-orange focus:ring-4 focus:ring-femar-orange/10 transition-all shadow-sm">
                        <option value="">Seleccione un servicio</option>
                        <option value="carga-maritima">Carga Marítima</option>
                        <option value="carga-aerea">Carga Aérea</option>
                        <option value="carga-terrestre">Carga Terrestre</option>
                        <option value="despacho-aduanero">Despacho Aduanero</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-femar-navy mb-2">Mensaje *</label>
                      <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-femar-navy/10 bg-white text-femar-navy focus:outline-none focus:border-femar-orange focus:ring-4 focus:ring-femar-orange/10 transition-all shadow-sm resize-none"
                        placeholder="Describa su necesidad logística..." />
                    </div>
                    <MagneticButton
                      strength={0.3}
                      className="w-full md:w-auto px-8 py-4 bg-femar-orange text-white rounded-xl font-bold text-lg shadow-lg shadow-femar-orange/30 flex items-center gap-2 justify-center cursor-pointer"
                      onClick={handleSubmit as any}
                    >
                      <Send className="w-5 h-5" /> Enviar mensaje
                    </MagneticButton>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <AnimatedSection direction="right" delay={0.3}>
                <div className="space-y-6">
                  <div className="glass-card p-8 relative overflow-hidden hover-glow">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-femar-orange via-femar-orange-light to-femar-orange" />
                    <h3 className="font-bold text-white mb-6 text-lg">Contacto directo</h3>
                    <div className="space-y-5">
                      <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 text-white/60 hover:text-femar-orange transition-colors duration-200 group">
                        <div className="w-10 h-10 bg-femar-orange/15 rounded-xl flex items-center justify-center group-hover:bg-femar-orange transition-colors duration-200">
                          <Phone className="w-5 h-5 text-femar-orange group-hover:text-white transition-colors duration-200" />
                        </div>
                        <span>{siteConfig.phone}</span>
                      </a>
                      <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 text-white/60 hover:text-femar-orange transition-colors duration-200 group">
                        <div className="w-10 h-10 bg-femar-orange/15 rounded-xl flex items-center justify-center group-hover:bg-femar-orange transition-colors duration-200">
                          <Mail className="w-5 h-5 text-femar-orange group-hover:text-white transition-colors duration-200" />
                        </div>
                        <span>{siteConfig.email}</span>
                      </a>
                      <div className="flex items-center gap-4 text-white/60">
                        <div className="w-10 h-10 bg-femar-orange/15 rounded-xl flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-femar-orange" />
                        </div>
                        <span>{siteConfig.address}</span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card-light p-8 relative overflow-hidden">
                    <h3 className="font-bold text-femar-navy mb-5 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-femar-orange" /> Horario
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Lunes a Viernes: 8:00 AM — 6:00 PM</p>
                      <p>Sábados: 9:00 AM — 1:00 PM</p>
                      <p className="text-femar-orange font-semibold">Emergencias: 24/7 WhatsApp</p>
                    </div>
                  </div>

                  <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
                    className="block bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-8 text-white hover:shadow-xl hover:shadow-green-500/20 transition-all duration-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full" />
                    <div className="relative flex items-center gap-4">
                      <MessageCircle className="w-10 h-10" />
                      <div>
                        <h3 className="font-bold text-lg">Chat por WhatsApp</h3>
                        <p className="text-white/80 text-sm">{siteConfig.whatsappNumber}</p>
                        <p className="text-white/80 text-sm">Respuesta inmediata</p>
                      </div>
                    </div>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section id="informacion" className="py-24 md:py-32 mesh-gradient-section relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-femar-orange/10 text-femar-orange rounded-full text-sm font-semibold mb-6 border border-femar-orange/20">
              <MapPin className="w-4 h-4" /> Ubicación
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-femar-navy mb-4 tracking-tight">
              Nuestra <span className="gradient-text">ubicación</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Visite nuestras oficinas en Lima, Perú. Estamos ubicados en una zona estratégica para su atención.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-femar-navy/10 border border-femar-navy/8 relative">
              {/* Google Maps iframe embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9!2d-77.0!3d-12.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAwJzAwLjAiUyA3N8KwMDAnMDAuMCJX!5e0!3m2!1ses!2spe!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación FEMAR Logistics - Lima, Perú"
                className="w-full"
              />
              {/* Map overlay card */}
              <div className="absolute bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-xs glass-card-light p-5 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-femar-orange rounded-xl flex items-center justify-center shadow-md shadow-femar-orange/20">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-femar-navy text-sm">FEMAR Logistics SAC</h4>
                    <p className="text-xs text-muted-foreground">{siteConfig.address}</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=FEMAR+Logistics+Lima+Peru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-femar-orange font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Abrir en Google Maps <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
