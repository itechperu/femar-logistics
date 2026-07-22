import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Ship, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-femar-navy text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-femar-orange rounded-lg flex items-center justify-center">
                <Ship className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">FEMAR Logistics</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Soluciones integrales en logística y aduanas. Más de 15 años de experiencia
              transportando su mercancía de manera segura, eficiente y puntual.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-femar-orange transition-colors duration-200"
              aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-femar-orange transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-femar-orange transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios/carga-maritima" className="text-white/70 hover:text-femar-orange transition-colors text-sm">
                  Carga Marítima
                </Link>
              </li>
              <li>
                <Link href="/servicios/carga-aerea" className="text-white/70 hover:text-femar-orange transition-colors text-sm">
                  Carga Aérea
                </Link>
              </li>
              <li>
                <Link href="/servicios/carga-terrestre" className="text-white/70 hover:text-femar-orange transition-colors text-sm">
                  Carga Terrestre
                </Link>
              </li>
              <li>
                <Link href="/servicios/despacho-aduanero" className="text-white/70 hover:text-femar-orange transition-colors text-sm">
                  Despacho Aduanero
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quienes-somos" className="text-white/70 hover:text-femar-orange transition-colors text-sm">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-femar-orange transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white/70 hover:text-femar-orange transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-femar-orange" />
                {siteConfig.phone}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-femar-orange" />
                {siteConfig.email}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-femar-orange" />
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar with developer credit */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} {siteConfig.name}. Todos los derechos reservados.
            </p>
            {/* Developer credit - hardcoded, non-editable by CMS */}
            <a
              href={siteConfig.developerCredit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-80 transition-opacity duration-200"
            >
              Diseño y desarrollo por{' '}
              <span className="text-femar-orange font-semibold">fastpagepro.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
