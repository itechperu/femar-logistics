import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página no encontrada',
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-femar-navy mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-femar-navy mb-4">Página no encontrada</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          La página que busca no existe o ha sido movida. Por favor, regrese a la página principal o use la navegación para encontrar lo que necesita.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-femar-orange text-white rounded-xl font-semibold hover:bg-femar-orange/90 transition-colors duration-200"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
