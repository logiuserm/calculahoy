import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Plantillas & Guias Utiles | Estudio Digital de Documentos Legales',
  description: 'Crea, personaliza y descarga documentos legales, cartas de renuncia y contratos en tiempo real con tecnologia fluida e intuitiva.',
  keywords: ['plantillas legales', 'carta renuncia voluntaria', 'contrato alquiler', 'carta reclamacion', 'documentos pdf'],
  openGraph: {
    title: 'Plantillas & Guias Utiles | Documentos Legales Rellenables 2026',
    description: 'Personalizacion interactiva de contratos y cartas oficiales.',
    url: 'https://plantillas-y-guias-utiles.netlify.app',
    siteName: 'PlantillasYGuias',
    locale: 'es_ES',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PlantillasYGuias Studio',
    url: 'https://plantillas-y-guias-utiles.netlify.app',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript'
  }

  return (
    <html lang="es" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${jakarta.className} bg-slate-950 text-slate-100 min-h-screen antialiased relative overflow-x-hidden selection:bg-indigo-500 selection:text-white`}>
        {/* Lucid ambient lights */}
        <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none -z-10 glow-ambient" />
        <div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        {children}
      </body>
    </html>
  )
}