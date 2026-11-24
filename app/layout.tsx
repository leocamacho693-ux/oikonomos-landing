import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OIKONOMOS GLOBAL | Consultoría Integral & Ecosistema CRM',
  description: 'Firma consultora multidisciplinaria de alto impacto corporativo: Asesoría Administrativa, Agropecuaria, Ambiental, Contable, Marketing, Económica y Legal con Ecosistema CRM de vanguardia.',
  keywords: ['consultoría empresarial', 'CRM afiliados', 'asesoría legal', 'consultoría contable', 'gestión agropecuaria', 'estrategia B2B'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased text-slate-800 bg-white font-sans selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
