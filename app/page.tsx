import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navegación Flotante con efecto glassmorphism */}
      <header className="sticky top-4 z-50 max-w-5xl mx-auto px-4 w-full">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl px-6 h-16 flex items-center justify-between shadow-2xl shadow-indigo-950/20">
          <Link href="/" className="font-extrabold text-lg text-white tracking-tight flex items-center gap-2.5 group">
            <span className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              P
            </span>
            <span>Plantillas<span className="text-indigo-400">YGuías</span></span>
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

      {/* Hero Section con Micro-Widgets */}
      <main className="mb-auto max-w-6xl mx-auto px-4 pt-16 pb-12 w-full">
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-xs font-semibold backdrop-blur-md animate-bounce duration-1000">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
            Actualizado a la normativa laboral e inquilinato 2026
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Documentos Legales <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Rápidos, Exactos e Inteligentes
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Genera modelos oficiales en segundos desde tu navegador. Rellena los datos en tiempo real y copia el resultado listo para presentar.
          </p>

          {/* Micro Widget Estadísticas */}
          <div className="pt-4 flex items-center justify-center gap-8 text-xs text-slate-400 border-y border-slate-800/80 py-4 max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-base">100%</span>
              <span>Sin Registro</span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-base">Instantáneo</span>
              <span>Copiar y Usar</span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="flex flex-col items-center">
              <span className="text-indigo-400 font-bold text-base">Gratis</span>
              <span>Uso Ilimitado</span>
            </div>
          </div>
        </section>

        {/* BENTO GRID DE PLANTILLAS */}
        <section id="plantillas" className="pt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                Catálogo de Plantillas
              </h2>
              <p className="text-slate-400 text-xs mt-1">Selecciona una categoría para rellenar tu documento</p>
            </div>
            <span className="text-xs px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 font-mono">
              3 Modelos Activos
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Tarjeta Bento 1: CARTA DE RENUNCIA (Tarjeta Principal - Ocupa 2 columnas en desktop) */}
            <div className="md:col-span-2 bg-gradient-to-br from-slate-900/90 to-indigo-950/40 border border-indigo-500/30 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-all" />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-lg">
                    Laboral • Destacado
                  </span>
                  <span className="text-xs text-indigo-400 font-mono">Preaviso 15 días</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                  Carta de Renuncia Voluntaria
                </h3>

                <p className="text-slate-300 text-sm mt-3 leading-relaxed max-w-xl">
                  Redacción oficial ajustada al Estatuto de los Trabajadores. Incluye cláusula de solicitud de finiquito y liquidación de vacaciones no disfrutadas.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80 pt-6">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Formato con copia al portapapeles
                </div>

                <Link 
                  href="/plantillas/carta-renuncia" 
                  className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-95 text-center flex items-center justify-center gap-2 group/btn"
                >
                  Rellenar Plantilla 
                  <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Tarjeta Bento 2: CONTRATO DE ALQUILER */}
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg">
                    Vivienda
                  </span>
                  <span className="text-xs text-slate-500 font-mono">LAU</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Contrato de Alquiler
                </h3>

                <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                  Borrador básico para arrendamiento de vivienda habitual con cláusulas de fianza y renta mensual.
                </p>
              </div>

              <Link 
                href="/plantillas/contrato-alquiler" 
                className="mt-6 w-full py-2.5 px-4 bg-slate-800 hover:bg-emerald-600/20 border border-slate-700 hover:border-emerald-500/40 text-slate-200 hover:text-emerald-300 font-semibold text-xs rounded-xl transition-all text-center block"
              >
                Configurar Alquiler &rarr;
              </Link>
            </div>

            {/* Tarjeta Bento 3: CARTA DE RECLAMACIÓN (Ocupa la parte inferior) */}
            <div className="md:col-span-3 bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-amber-500/50 transition-all duration-300 group shadow-lg">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg">
                    Consumo & Servicios
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Reembolsos & Incidencias</span>
                </div>

                <h3 className="text-xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                  Carta de Reclamación Formal
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
                  Dirigida a servicios de Atención al Cliente para exigir soluciones a cobros indebidos, bajas no procesadas o incumplimiento de contratos comerciales.
                </p>
              </div>

              <Link 
                href="/plantillas/reclamacion" 
                className="w-full sm:w-auto shrink-0 px-6 py-3 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 text-white font-semibold text-xs rounded-xl transition-all text-center shadow-md hover:scale-105"
              >
                Crear Reclamación &rarr;
              </Link>
            </div>

          </div>
        </section>
      </main>

      {/* Pie de página elegante */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-10 mt-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <p>© 2026 PlantillasYGuías. Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/politica-de-privacidad" className="hover:text-slate-300 transition-colors">Política de Privacidad</Link>
            <Link href="/politica-de-cookies" className="hover:text-slate-300 transition-colors">Política de Cookies</Link>
            <Link href="/contacto" className="hover:text-slate-300 transition-colors">Contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}