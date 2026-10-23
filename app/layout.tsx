import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Plantillas y Guias Utiles | Documentos Legales Rellenables 2026',
  description: 'Generador gratuito de modelos oficiales, contratos de alquiler y cartas de renuncia con previsualizacion en tiempo real.',
  keywords: ['plantillas legales', 'carta renuncia voluntaria', 'contrato alquiler modelo', 'carta reclamacion', 'modelos pdf'],
  authors: [{ name: 'PlantillasYGuias' }],
  openGraph: {
    title: 'Plantillas y Guias Utiles | Modelos Legales Rellenables',
    description: 'Genera cartas y contratos legales gratis en segundos.',
    url: 'https://plantillas-y-guias-utiles.netlify.app',
    siteName: 'PlantillasYGuias',
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PlantillasYGuias',
    url: 'https://plantillas-y-guias-utiles.netlify.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://plantillas-y-guias-utiles.netlify.app/#plantillas',
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <html lang="es" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakarta.className} bg-slate-950 text-slate-100 min-h-screen antialiased relative overflow-x-hidden`}>
        {/* Glow ambient background */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10 glow-effect" />
        <div className="fixed bottom-0 right-0 w-[500px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        
        {children}
      </body>
    </html>
  )
}