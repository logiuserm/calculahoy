'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [busqueda, setBusqueda] = useState('')

  const plantillas = [
    {
      id: 'carta-renuncia',
      titulo: 'Carta de Renuncia Voluntaria',
      categoria: 'Laboral • Destacado',
      descripcion: 'Redaccion oficial ajustada al Estatuto de los Trabajadores. Incluye clausula de solicitud de finiquito y liquidacion.',
      badge: 'Preaviso 15 dias',
      link: '/plantillas/carta-renuncia',
      destacado: true,
      color: 'indigo'
    },
    {
      id: 'contrato-alquiler',
      titulo: 'Contrato de Alquiler de Vivienda',
      categoria: 'Vivienda',
      descripcion: 'Borrador basico para arrendamiento urbano con clausulas de fianza, renta mensual y conservacion.',
      badge: 'LAU 2026',
      link: '/plantillas/contrato-alquiler',
      destacado: false,
      color: 'emerald'
    },
    {
      id: 'reclamacion',
      titulo: 'Carta de Reclamacion Formal',
      categoria: 'Consumo & Servicios',
      descripcion: 'Dirigida a Atencion al Cliente para exigir soluciones a cobros indebidos, bajas no procesadas o incidencias.',
      badge: 'Derecho Consumo',
      link: '/plantillas/reclamacion',
      destacado: false,
      color: 'amber'
    }
  ]

  const plantillasFiltradas = plantillas.filter(p => 
    p.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.categoria.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navegacion Flotante con Glassmorphism */}
      <header className="sticky top-4 z-50 max-w-5xl mx-auto px-4 w-full">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl px-6 h-16 flex items-center justify-between shadow-2xl shadow-indigo-950/20">
          <Link href="/" className="font-extrabold text-lg text-white tracking-tight flex items-center gap-2.5 group">
            <span className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              P
            </span>
            <span>Plantillas<span className="text-indigo-400">YGuias</span></span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <Link href="#plantillas" className="hover:text-white transition-colors">
              Explorar
            </Link>
            <Link href="/politica-de-privacidad" className="hover:text-white transition-colors hidden sm:inline-block">
              Privacidad
            </Link>
            <Link 
              href="/contacto" 
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700/80 text-white text-xs font-semibold rounded-xl transition-all hover:scale-105 active:scale-95"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mb-auto max-w-6xl mx-auto px-4 pt-12 pb-12 w-full">
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-xs font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
            Modelos adaptados a la normativa legal 2026
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Documentos Legales <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Rapidos, Exactos e Inteligentes
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Genera modelos oficiales en segundos. Rellena los campos interactivamente, previsualiza el resultado y copialo o imprimelo directamente.
          </p>

          {/* Buscador Interactivo */}
          <div className="pt-2 max-w-md mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Buscar plantilla (ej. renuncia, alquiler, reclamacion)..." 
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-700/80 rounded-2xl px-5 py-3.5 pl-11 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-inner"
              />
              <svg className="w-5 h-5 text-slate-500 absolute left-3.5 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Metrics Widget */}
          <div className="pt-4 flex items-center justify-center gap-8 text-xs text-slate-400 border-y border-slate-800/80 py-4 max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-base">100%</span>
              <span>Sin Registro</span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-base">Instantaneo</span>
              <span>Copia Directa</span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="flex flex-col items-center">
              <span className="text-indigo-400 font-bold text-base">Gratis</span>
              <span>Uso Ilimitado</span>
            </div>
          </div>
        </section>

        {/* BENTO GRID DE PLANTILLAS */}
        <section id="plantillas" className="pt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                Catalogo de Plantillas Legales
              </h2>
              <p className="text-slate-400 text-xs mt-1">Selecciona la plantilla que necesitas personalizar</p>
            </div>
            <span className="text-xs px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 font-mono">
              {plantillasFiltradas.length} Modelos Disponibles
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plantillasFiltradas.map((item) => (
              <div 
                key={item.id} 
                className={`${item.destacado ? 'md:col-span-2 bg-gradient-to-br from-slate-900/90 to-indigo-950/40 border-indigo-500/30 hover:border-indigo-500/60' : 'bg-slate-900/80 border-slate-800/80 hover:border-slate-700'} border rounded-3xl p-6 sm:p-8 relative overflow-hidden group transition-all duration-300 shadow-xl flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-lg">
                      {item.categoria}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{item.badge}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                    {item.titulo}
                  </h3>

                  <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80 pt-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Generador en tiempo real
                  </div>

                  <Link 
                    href={item.link} 
                    className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-95 text-center flex items-center justify-center gap-2"
                  >
                    Rellenar Plantilla &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bloque Contenedor Preparado para Anuncio AdSense (Sin CLS) */}
        <div className="adsense-placeholder no-print">
          <span>[ Espacio Reservado para Publicidad Google AdSense ]</span>
        </div>

        {/* Guia Informativa SEO en Portada */}
        <section className="mt-16 bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8 max-w-4xl mx-auto space-y-6">
          <h3 className="text-xl font-bold text-white">¿Como funcionan nuestras plantillas legales rellenables?</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Nuestra plataforma ofrece un sistema rapido y seguro para la redaccion de documentos administrativos y contratos. Al completar los formularios interactivos, el texto del documento se actualiza instantaneamente en pantalla. Ningun dato introducido se almacena en servidores externos, garantizando la maxima privacidad conforme al RGPD.
          </p>
        </section>
      </main>

      {/* Pie de Pagina */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-10 mt-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <p>© 2026 PlantillasYGuias. Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/politica-de-privacidad" className="hover:text-slate-300 transition-colors">Politica de Privacidad</Link>
            <Link href="/politica-de-cookies" className="hover:text-slate-300 transition-colors">Politica de Cookies</Link>
            <Link href="/contacto" className="hover:text-slate-300 transition-colors">Contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}