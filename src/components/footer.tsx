import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Ship, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-femar-dark overflow-hidden">
      {/* Gradient mesh top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-femar-orange to-transparent" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[5%] w-[300px] h-[300px] bg-femar-orange/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-[10%] w-[200px] h-[200px] bg-femar-navy-light/20 rounded-full blur-[60px]" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-femar-orange rounded-xl flex items-center justify-center shadow-lg shadow-femar-orange/20">
                <Ship className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">FEMAR</span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-femar-orange">LOGISTICS</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Soluciones integrales en logística y aduanas. Más de 15 años de experiencia
              transportando su mercancía de manera segura, eficiente y puntual.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-femar-orange hover:shadow-md hover:shadow-femar-orange/20 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-femar-orange hover:shadow-md hover:shadow-femar-orange/20 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-femar-orange hover:shadow-md hover:shadow-femar-orange/20 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-3">
              {[
                { label: 'Carga Marítima', href: '/servicios/carga-maritima' },
                { label: 'Carga Aérea', href: '/servicios/carga-aerea' },
                { label: 'Carga Terrestre', href: '/servicios/carga-terrestre' },
                { label: 'Despacho Aduanero', href: '/servicios/despacho-aduanero' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/40 hover:text-femar-orange transition-colors duration-200 text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Empresa</h3>
            <ul className="space-y-3">
              {[
                { label: 'Quiénes Somos', href: '/quienes-somos' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contacto', href: '/contacto' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/40 hover:text-femar-orange transition-colors duration-200 text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-sm text-white/40 hover:text-femar-orange transition-colors">
                  <div className="w-8 h-8 bg-femar-orange/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-femar-orange" />
                  </div>
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <div className="w-8 h-8 bg-femar-orange/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-femar-orange" />
                </div>
                {siteConfig.email}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <div className="w-8 h-8 bg-femar-orange/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-femar-orange" />
                </div>
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar with developer credit */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              © {currentYear} {siteConfig.name}. Todos los derechos reservados.
            </p>
            {/* Developer credit — hardcoded, non-editable by CMS */}
            <a
              href={siteConfig.developerCredit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-80 transition-opacity duration-200 text-white/30 flex items-center gap-1.5"
            >
              {siteConfig.developerCredit.text.split('fastpagepro.com')[0]}
              <span className="text-femar-orange font-bold">fastpagepro.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
