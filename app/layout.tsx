import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/components/AppContext';

export const metadata: Metadata = {
  title: 'OIKONOMOS GLOBAL | Consultoría Integral y Ecosistema CRM',
  description: 'Firma consultora multidisciplinaria de alto impacto corporativo: Asesoría Administrativa, Agropecuaria, Ambiental, Contable, Marketing, Económica y Legal con Ecosistema CRM de vanguardia.',
  keywords: ['consultoría empresarial', 'CRM afiliados', 'asesoría legal', 'consultoría contable', 'gestión agropecuaria', 'estrategia B2B'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth dark" suppressHydrationWarning>
      <body className="antialiased font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200 bg-[#070E22] text-slate-100 dark:bg-[#070E22] dark:text-slate-100">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
