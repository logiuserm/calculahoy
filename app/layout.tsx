import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Plantillas & Guías Útiles | Documentos Legales Inteligentes',
  description: 'Generador de plantillas, contratos y cartas administrativas con previsualización en tiempo real.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <body className={`${jakarta.className} bg-slate-950 text-slate-100 min-h-screen antialiased relative overflow-x-hidden`}>
        {/* Glow ambient background effects */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10 glow-effect" />
        <div className="fixed bottom-0 right-0 w-[500px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        
        {children}
      </body>
    </html>
  )
}