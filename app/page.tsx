'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [query, setQuery] = useState('')
  const [categoriaFiltro, setCategoriaFiltro] = useState('todos')

  const plantillas = [
    {
      id: 'carta-renuncia',
      titulo: 'Carta de Renuncia Voluntaria',
      categoria: 'laboral',
      etiqueta: 'Laboral • Destacado',
      descripcion: 'Formato oficial ajustado al Estatuto de los Trabajadores. Incluye calculo de preaviso de 15 dias y liquidacion de haberes.',
      badge: 'Baja Voluntaria',
      link: '/plantillas/carta-renuncia',
      destacado: true,
      gradiente: 'from-indigo-600/20 to-purple-600/20 border-indigo-500/40'
    },
    {
      id: 'contrato-alquiler',
      titulo: 'Contrato de Alquiler de Vivienda',
      categoria: 'vivienda',
      etiqueta: 'Vivienda & Inmuebles',
      descripcion: 'Borrador de arrendamiento urbano bajo la LAU. Especifica renta mensual, fianza legal e identificacion del inmueble.',
      badge: 'LAU 2026',
      link: '/plantillas/contrato-alquiler',
      destacado: false,
      gradiente: 'from-emerald-600/10 to-teal-600/10 border-emerald-500/30'
    },
    {
      id: 'reclamacion',
      titulo: 'Carta de Reclamacion Formal',
      categoria: 'consumo',
      etiqueta: 'Consumo & Servicios',
      descripcion: 'Escrito formal para Atencion al Cliente exigiendo reembolsos, anulaciones de cargos o cumplimiento de contratos.',
      badge: 'Atencion Cliente',
      link: '/plantillas/reclamacion',
      destacado: false,
      gradiente: 'from-amber-600/10 to-orange-600/10 border-amber-500/30'
    }
  ]

  const filtradas = plantillas.filter(item => {
    const coincideTexto = item.titulo.toLowerCase().includes(query.toLowerCase()) || 
                          item.descripcion.toLowerCase().includes(query.toLowerCase())
    const coincideCategoria = categoriaFiltro === 'todos' || item.categoria === categoriaFiltro
    return coincideTexto && coincideCategoria
  })

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navegacion Flotante Neomórfica */}
      <header className="sticky top-5 z-50 max-w-5xl mx-auto px-4 w-full">
        <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-800/90 rounded-2xl px-6 h-16 flex items-center justify-between shadow-2xl shadow-black/50">
          <Link href="/" className="font-extrabold text-lg text-white tracking-tight flex items-center gap-3 group">
            <span className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
              P
            </span>
            <span className="text-white font-bold">Plantillas<span className="text-indigo-400">Studio</span></span>
          </Link>
          
          <nav className="flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-400">
            <Link href="#explorar" className="hover:text-white transition-colors hidden sm:block">
              Explorar
            </Link>
            <Link href="/politica-de-privacidad" className="hover:text-white transition-colors hidden md:block">
              Privacidad
            </Link>
            <Link 
              href="/contacto" 
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-indigo-600/20 active:scale-95"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mb-auto max-w-6xl mx-auto px-4 pt-12 pb-16 w-full">
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-xs font-bold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
            Documentos Oficiales e Interactivos 2026
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
            El Generador Inteligente de <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Documentos Legales
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Escribe los datos y observa la vista previa en folio en tiempo real. Formato directo para copiar o imprimir sin registros.
          </p>

          {/* Buscador Dinámico e Interactivo */}
          <div className="pt-4 max-w-lg mx-auto space-y-3">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Busca por tipo de documento (ej. renuncia, alquiler)..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-700/80 rounded-2xl px-5 py-4 pl-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all shadow-2xl"
              />
              <svg className="w-5 h-5 text-slate-500 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Categorías / Filtros rápidos */}
            <div className="flex items-center justify-center gap-2 flex-wrap text-xs">
              {['todos', 'laboral', 'vivienda', 'consumo'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoriaFiltro(cat)}
                  className={`px-3 py-1.5 rounded-xl capitalize font-semibold transition-all ${
                    categoriaFiltro === cat 
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* BENTO GRID DE PLANTILLAS */}
        <section id="explorar" className="pt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                Modelos Rellenables
              </h2>
              <p className="text-slate-400 text-xs mt-1">Selecciona el documento para abrir el estudio interactivo</p>
            </div>
            <span className="text-xs px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 font-mono">
              {filtradas.length} Plantillas
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filtradas.map((p) => (
              <div 
                key={p.id}
                className={`${p.destacado ? 'md:col-span-2' : ''} bg-slate-900/80 border ${p.gradiente} rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-indigo-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-lg">
                      {p.etiqueta}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{p.badge}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                    {p.titulo}
                  </h3>

                  <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                    {p.descripcion}
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80 pt-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Generación inmediata
                  </div>

                  <Link 
                    href={p.link} 
                    className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-95 text-center flex items-center justify-center gap-2"
                  >
                    Abrir Modelo &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Espacio Publicitario Reservado para AdSense (Sin CLS) */}
        <div className="adsense-reserved-slot no-print">
          <span>[ Espacio Publicitario Optimizado - Google AdSense ]</span>
          <span className="text-[10px] text-slate-600 mt-1">Ubicación amigable de alta visibilidad</span>
        </div>

        {/* Sección Informativa E-E-A-T (SEO) */}
        <section className="mt-12 bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8 max-w-4xl mx-auto space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-indigo-400">✓</span> Garantía de Privacidad y Validez
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Todos nuestros borradores están estructurados conforme al marco legal español vigente (Estatuto de los Trabajadores, Ley de Arrendamientos Urbanos y Ley General para la Defensa de los Consumidores). El procesamiento se realiza de forma 100% local en tu navegador: tus datos personales jamás se envían ni se guardan en ningún servidor externo.
          </p>
        </section>
      </main>

      {/* Pie de Página */}
      <footer className="border-t border-slate-900 bg-slate-950/90 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <p>© 2026 PlantillasYGuias Studio. Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/politica-de-privacidad" className="hover:text-slate-300 transition-colors">Privacidad</Link>
            <Link href="/politica-de-cookies" className="hover:text-slate-300 transition-colors">Cookies</Link>
            <Link href="/contacto" className="hover:text-slate-300 transition-colors">Contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}