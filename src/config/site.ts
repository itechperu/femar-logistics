// ============================================
// FEMAR Logistics SAC - Centralized Site Config
// All content managed here for easy updates
// ============================================

export const siteConfig = {
  name: "FEMAR Logistics SAC",
  shortName: "FEMAR",
  url: "https://femarlogistics.com",
  description: "Soluciones integrales en logística y aduanas. Carga marítima, aérea, terrestre y despacho aduanero con más de 15 años de experiencia.",
  keywords: ["logística", "aduanas", "carga marítima", "carga aérea", "carga terrestre", "despacho aduanero", "importación", "exportación", "Perú", "FEMAR"],
  logo: "/logo-femar.svg",
  whatsapp: "51959265574",
  whatsappLink: "https://wa.me/51959265574?text=Hola%20FEMAR%20Logistics%2C%20necesito%20información%20sobre%20sus%20servicios%20de%20logística%20y%20aduanas.%20Por%20favor%20contáctenme.",
  whatsappNumber: "+51 959 265 574",
  phone: "+51 959 265 574",
  email: "info@femarlogistics.com",
  address: "Lima, Perú",
  social: {
    facebook: "https://facebook.com/femarlogistics",
    linkedin: "https://linkedin.com/company/femarlogistics",
    instagram: "https://instagram.com/femarlogistics",
  },
  developerCredit: {
    text: "Diseño y desarrollo por fastpagepro.com",
    url: "https://www.fastpagepro.com",
  },
  primaryColor: "#0c2340", // Navy blue
  accentColor: "#e87722",  // Orange
};

export type NavItem = {
  label: string;
  href: string;
  slug?: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes Somos", href: "/quienes-somos", slug: "quienes-somos" },
  {
    label: "Servicios",
    href: "/servicios",
    slug: "servicios",
    children: [
      { label: "Carga Marítima", href: "/servicios/carga-maritima", slug: "carga-maritima" },
      { label: "Carga Aérea", href: "/servicios/carga-aerea", slug: "carga-aerea" },
      { label: "Carga Terrestre", href: "/servicios/carga-terrestre", slug: "carga-terrestre" },
      { label: "Despacho Aduanero", href: "/servicios/despacho-aduanero", slug: "despacho-aduanero" },
    ],
  },
  { label: "Blog", href: "/blog", slug: "blog" },
  { label: "Contacto", href: "/contacto", slug: "contacto" },
];

export type ServiceItem = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  heroImage: string;
  ctaText: string;
};

export const services: ServiceItem[] = [
  {
    slug: "carga-maritima",
    title: "Carga Marítima",
    shortTitle: "Marítima",
    icon: "ship",
    description: "Transporte de carga por vía marítima con cobertura global. FCL y LCL con las mejores tarifas y tiempos de tránsito.",
    fullDescription: "FEMAR Logistics ofrece soluciones completas de transporte marítimo para importaciones y exportaciones. Nuestro servicio de carga marítima cubre los principales puertos del mundo, con opciones de contenedor completo (FCL) y consolidado (LCL). Trabajamos con las principales navieras internacionales para garantizar tiempos de tránsito óptimos y tarifas competitivas. Desde la coordinación del embarque hasta la entrega final, nuestro equipo supervisa cada etapa del proceso para asegurar que su carga arrive de manera segura y puntual.",
    features: [
      "Contenedor completo (FCL) y consolidado (LCL)",
      "Cobertura de puertos en más de 50 países",
      "Tarifas competitivas con las principales navieras",
      "Seguimiento en tiempo real de su carga",
      "Documentación y coordinación completa",
      "Seguro de carga opcional",
    ],
    benefits: [
      "Reducción de costos logísticos hasta un 30%",
      "Tiempos de tránsito optimizados según origen y destino",
      "Atención personalizada con un agente asignado",
      "Transparencia total en el proceso de embarque",
    ],
    heroImage: "/images/maritima-hero.jpg",
    ctaText: "Solicitar cotización marítima",
  },
  {
    slug: "carga-aerea",
    title: "Carga Aérea",
    shortTitle: "Aérea",
    icon: "plane",
    description: "Transporte ágil y seguro por vía aérea. Servicio express y estándar para cargas urgentes con seguimiento real.",
    fullDescription: "Cuando el tiempo es factor crítico, FEMAR Logistics proporciona soluciones de transporte aéreo rápidas y confiables. Ofrecemos servicio express y estándar para satisfacer diferentes necesidades de urgencia y presupuesto. Nuestro equipo coordina directamente con las principales aerolíneas comerciales y freighters para asegurar espacio y tarifas preferenciales. Desde cargas pequeñas hasta proyectos de gran volumen, gestionamos toda la logística aérea incluyendo pickup, documentación, customs clearance y entrega final.",
    features: [
      "Servicio express (2-3 días) y estándar (5-7 días)",
      "Conexiones con más de 100 aerolíneas",
      "Carga general, peligrosa y temperatura controlada",
      "Pickup y entrega door-to-door",
      "Seguimiento real 24/7",
      "Manejo de cargas oversized y projects",
    ],
    benefits: [
      "Velocidad de entrega superior para cargas urgentes",
      "Flexibilidad para diferentes tipos de carga",
      "Reducción de tiempos de espera en aduanas",
      "Coordinación integral desde origen hasta destino",
    ],
    heroImage: "/images/aerea-hero.jpg",
    ctaText: "Solicitar cotización aérea",
  },
  {
    slug: "carga-terrestre",
    title: "Carga Terrestre",
    shortTitle: "Terrestre",
    icon: "truck",
    description: "Transporte nacional e internacional por carretera. Servicio completo de pickup a entrega con cobertura regional.",
    fullDescription: "FEMAR Logistics ofrece transporte terrestre nacional e internacional con cobertura en Perú y países vecinos. Nuestro servicio incluye transporte por camión, pickup y multimodal para satisfacer cualquier necesidad de distribución regional. Coordinamos recojo, traslado y entrega con un equipo especializado en logística de carretera. Ideal para cargas que requieren movimiento entre ciudades, zonas industriales, depósitos aduaneros y puntos de distribución. Ofrecemos soluciones flexibles para carga seca, refrigerada y de proyectos.",
    features: [
      "Transporte nacional e internacional (Chile, Bolivia, Ecuador, Colombia)",
      "Carga seca, refrigerada y especializada",
      "Servicio door-to-door completo",
      "Flota diversa: camiones, trailers, plataformas",
      "GPS y seguimiento en tiempo real",
      "Seguro de carga incluido",
    ],
    benefits: [
      "Costos competitivos para distribución regional",
      "Flexibilidad de rutas y horarios",
      "Integración con servicios marítimos y aéreos",
      "Entrega directa sin intermediarios",
    ],
    heroImage: "/images/terrestre-hero.jpg",
    ctaText: "Solicitar cotización terrestre",
  },
  {
    slug: "despacho-aduanero",
    title: "Despacho Aduanero",
    shortTitle: "Aduanero",
    icon: "shield",
    description: "Gestión profesional de importaciones y exportaciones. Tramitación aduanera ágil con agentes certificados.",
    fullDescription: "FEMAR Logistics cuenta con agentes de aduanas certificados con más de 15 años de experiencia en tramitación de importaciones y exportaciones peruanas. Nuestro servicio de despacho aduanero incluye la gestión completa de la documentación requerida, clasificación arancelaria, cálculo de tributos, y coordinación con SUNAT para un despacho eficiente. Nos encargamos de todo el proceso: desde la declaración aduanera hasta la liberación de su mercancía, asegurando cumplimiento total con la normativa vigente y minimizando tiempos de despacho.",
    features: [
      "Agente de aduanas certificado por SUNAT",
      "Importación y exportación de todo tipo de mercancía",
      "Clasificación arancelaria precisa",
      "Calculo de tributos y derechos aduaneros",
      "Despacho anticipado y urgent",
      "Regularización y modificaciones",
    ],
    benefits: [
      "Evita demoras y penalidades en aduanas",
      "Maximiza ahorro en tributos con clasificación correcta",
      "Tramitación transparente y documentada",
      "Asesoría legal aduanera permanente",
    ],
    heroImage: "/images/aduanero-hero.jpg",
    ctaText: "Consultar sobre despacho aduanero",
  },
];

export type Testimonial = {
  name: string;
  company: string;
  role: string;
  text: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Carlos Mendoza",
    company: "Importaciones del Sur S.A.",
    role: "Gerente de Logística",
    text: "FEMAR Logistics transformó nuestra operación de importación. Los tiempos de despacho se redujeron significativamente y siempre recibimos atención personalizada. Sin duda, el mejor partner logístico en Perú.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "María García",
    company: "Textiles Andinos EIRL",
    role: "Directora de Operaciones",
    text: "Desde que trabajamos con FEMAR, nuestras exportaciones llegan a tiempo y sin complicaciones. Su equipo de aduanas es excepcional y nos ha ayudado a optimizar costos en cada embarque.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Roberto Silva",
    company: "Minera Los Andes SAC",
    role: "Jefe de Compras",
    text: "La carga aérea de FEMAR para nuestros equipos críticos siempre llega cuando lo necesitamos. Su servicio express es impecable y el seguimiento en tiempo real nos da total tranquilidad.",
    avatar: "/images/avatar-3.jpg",
  },
];

export type HeroSection = {
  headline: string;
  subheadline: string;
  ctaPrimary: { text: string; href: string };
  images?: string[];
  ctaSecondary: { text: string; href: string };
  stats: { label: string; value: string }[];
};

export const heroSection: HeroSection = {
  headline: "Su carga, nuestra misión",
  subheadline: "Soluciones integrales en logística y aduanas con más de 15 años de experiencia. Transportamos su mercancía de manera segura, eficiente y puntual.",
  ctaPrimary: { text: "Solicitar Cotización", href: "/contacto" },
  ctaSecondary: { text: "Ver Servicios", href: "/servicios" },
  stats: [
    { label: "Años de experiencia", value: "15+" },
    { label: "Contenedores gestionados", value: "5000+" },
    { label: "Clientes satisfechos", value: "200+" },
    { label: "Países cubiertos", value: "50+" },
  ],
  images: [
    "/images/hero-logistics-1.jpg",
    "/images/hero-logistics-2.jpg",
    "/images/hero-logistics-3.jpg",
    "/images/hero-logistics-4.jpg",
  ],
};

export type AboutData = {
  title: string;
  subtitle: string;
  story: string;
  mission: string;
  vision: string;
  values: { name: string; description: string; icon: string }[];
  timeline: { year: string; event: string }[];
};

export const aboutData: AboutData = {
  title: "Quiénes Somos",
  subtitle: "Más de 15 años construyendo confianza en logística y aduanas",
  story: "FEMAR Logistics SAC nació en Lima, Perú, con la visión de transformar la experiencia logística de empresas importadoras y exportadoras. Desde nuestros primeros días, nos comprometimos a ofrecer un servicio que combinara eficiencia operativa con atención genuina al cliente. Hoy, después de más de 15 años, somos referentes en el sector, reconocidos por nuestra transparencia, puntualidad y capacidad de adaptarnos a las necesidades específicas de cada negocio.",
  mission: "Brindar soluciones logísticas y aduaneras integrales, eficientes y transparentes que permitan a nuestros clientes optimizar sus operaciones de comercio exterior con total confianza.",
  vision: "Ser la empresa líder en servicios logísticos y aduaneros en Perú, reconocida por la excelencia operativa, la innovación constante y el compromiso inquebrantable con la satisfacción de nuestros clientes.",
  values: [
    { name: "Transparencia", description: "Comunicación clara y honesta en cada proceso, sin costos ocultos ni sorpresas.", icon: "eye" },
    { name: "Puntualidad", description: "Cumplimos los tiempos comprometidos porque sabemos que cada día cuenta para su negocio.", icon: "clock" },
    { name: "Compromiso", description: "Nos involucramos en cada embarque como si fuera nuestro, con dedicación total.", icon: "heart" },
    { name: "Innovación", description: "Buscamos constantemente mejores formas de trabajar, integrando tecnología y buenas prácticas.", icon: "lightbulb" },
    { name: "Integridad", description: "Operamos con ética profesional y cumplimiento total de la normativa aduanera.", icon: "shield" },
  ],
  timeline: [
    { year: "2008", event: "Fundación de FEMAR Logistics SAC en Lima, Perú" },
    { year: "2011", event: "Obtención de certificación como Agente de Aduanas" },
    { year: "2014", event: "Expansión de servicios a carga aérea y terrestre" },
    { year: "2017", event: "Implementación de sistema de seguimiento en tiempo real" },
    { year: "2020", event: "Digitalización completa de procesos y documentación" },
    { year: "2023", event: "Reconocimiento como Top 10 agencias logísticas en Perú" },
  ],
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "como-importar-peru-2024",
    title: "Guía Completa: Cómo Importar en Perú en 2024",
    excerpt: "Todo lo que necesita saber sobre el proceso de importación en Perú: requisitos, tributos, documentación y pasos clave para un despacho exitoso.",
    category: "Importación",
    date: "2024-03-15",
    readTime: "8 min",
    image: "/images/blog-importar.jpg",
  },
  {
    slug: "despacho-aduanero-anticipado",
    title: "Despacho Aduanero Anticipado: Ventajas y Procedimiento",
    excerpt: "Conozca los beneficios del despacho anticipado y cómo puede reducir los tiempos de liberación de su mercancía en aduanas.",
    category: "Aduanas",
    date: "2024-02-20",
    readTime: "6 min",
    image: "/images/blog-aduanas.jpg",
  },
  {
    slug: "logistica-maritima-fcl-lcl",
    title: "FCL vs LCL: ¿Qué Opción Marítima Es Mejor para Su Carga?",
    excerpt: "Análisis comparativo entre contenedor completo y consolidado para ayudarle a elegir la mejor opción según su volumen y tipo de carga.",
    category: "Marítima",
    date: "2024-01-10",
    readTime: "5 min",
    image: "/images/blog-maritima.jpg",
  },
];

export type HomeSection = {
  id: string;
  title: string;
};

export const homeSections: HomeSection[] = [
  { id: "hero", title: "Hero" },
  { id: "servicios", title: "Servicios" },
  { id: "nosotros", title: "Nosotros" },
  { id: "testimonios", title: "Testimonios" },
  { id: "contacto-cta", title: "Contacto" },
];
