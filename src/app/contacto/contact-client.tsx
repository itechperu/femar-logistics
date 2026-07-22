'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/animated-section';
import SectionSpy from '@/components/scroll-spy';
import { siteConfig } from '@/config/site';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

const contactSections = [
  { id: 'formulario', title: 'Formulario' },
  { id: 'informacion', title: 'Información' },
];

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    setIsSubmitted(true);
    // Reset form after 3 seconds
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-femar-navy to-femar-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 -right-20 w-72 h-72 bg-femar-orange rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-femar-orange/20 text-femar-orange rounded-full text-sm font-medium mb-6 border border-femar-orange/30">
              Contacto
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hablemos de su <span className="text-femar-orange">proyecto</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Solicite su cotización gratuita. Le responderemos en menos de 24 horas con una propuesta adaptada a sus necesidades.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section id="formulario" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                {isSubmitted ? (
                  <div className="bg-green-50 rounded-xl border border-green-200 p-12 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-femar-navy mb-4">Mensaje enviado</h3>
                    <p className="text-muted-foreground mb-2">
                      Gracias por contactar FEMAR Logistics. Le responderemos en menos de 24 horas.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Si necesita respuesta inmediata, puede llamarnos al {siteConfig.phone}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-femar-navy mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-femar-navy focus:outline-none focus:border-femar-orange focus:ring-2 focus:ring-femar-orange/20 transition-all"
                          placeholder="Su nombre"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-femar-navy mb-2">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-femar-navy focus:outline-none focus:border-femar-orange focus:ring-2 focus:ring-femar-orange/20 transition-all"
                          placeholder="Nombre de su empresa"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-femar-navy mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-femar-navy focus:outline-none focus:border-femar-orange focus:ring-2 focus:ring-femar-orange/20 transition-all"
                          placeholder="correo@empresa.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-femar-navy mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-femar-navy focus:outline-none focus:border-femar-orange focus:ring-2 focus:ring-femar-orange/20 transition-all"
                          placeholder="+51 999 999 999"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-femar-navy mb-2">
                        Servicio requerido *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-femar-navy focus:outline-none focus:border-femar-orange focus:ring-2 focus:ring-femar-orange/20 transition-all"
                      >
                        <option value="">Seleccione un servicio</option>
                        <option value="carga-maritima">Carga Marítima</option>
                        <option value="carga-aerea">Carga Aérea</option>
                        <option value="carga-terrestre">Carga Terrestre</option>
                        <option value="despacho-aduanero">Despacho Aduanero</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-femar-navy mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-femar-navy focus:outline-none focus:border-femar-orange focus:ring-2 focus:ring-femar-orange/20 transition-all resize-none"
                        placeholder="Describa su necesidad logística..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-4 bg-femar-orange text-white rounded-xl font-semibold text-lg hover:bg-femar-orange/90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center"
                    >
                      <Send className="w-5 h-5" /> Enviar mensaje
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <AnimatedSection direction="right" delay={0.3}>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="bg-femar-navy rounded-xl p-6 text-white">
                    <h3 className="font-bold mb-4">Contacto directo</h3>
                    <div className="space-y-4">
                      <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-white/80 hover:text-femar-orange transition-colors">
                        <Phone className="w-5 h-5 text-femar-orange" />
                        <span>{siteConfig.phone}</span>
                      </a>
                      <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-white/80 hover:text-femar-orange transition-colors">
                        <Mail className="w-5 h-5 text-femar-orange" />
                        <span>{siteConfig.email}</span>
                      </a>
                      <div className="flex items-center gap-3 text-white/80">
                        <MapPin className="w-5 h-5 text-femar-orange" />
                        <span>{siteConfig.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="bg-white rounded-xl border border-border p-6">
                    <h3 className="font-bold text-femar-navy mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-femar-orange" /> Horario de atención
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Lunes a Viernes: 8:00 AM — 6:00 PM</p>
                      <p>Sábados: 9:00 AM — 1:00 PM</p>
                      <p className="text-femar-orange font-medium">Emergencias: 24/7 vía WhatsApp</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-green-500 rounded-xl p-6 text-white hover:bg-green-600 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-8 h-8" />
                      <div>
                        <h3 className="font-bold">Chat por WhatsApp</h3>
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

      {/* Map placeholder */}
      <section id="informacion" className="py-20 md:py-28 bg-femar-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-femar-navy mb-4">
              Nuestra <span className="text-femar-orange">ubicación</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visite nuestras oficinas en Lima, Perú. Estamos disponibles para atenderle personalmente.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-femar-navy rounded-xl aspect-[16/9] max-h-[400px] flex items-center justify-center text-white/80">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-femar-orange mx-auto mb-4" />
                <p className="font-semibold text-lg">{siteConfig.address}</p>
                <p className="text-white/60 text-sm mt-2">Mapa interactivo disponible próximamente</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
