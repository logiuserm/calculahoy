import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50">
      {/* Navegación Superior */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-extrabold text-xl text-indigo-600 tracking-tight flex items-center gap-2">
            <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm">P</span>
            PlantillasYGuías
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <Link href="#plantillas" className="hover:text-indigo-600 transition-colors">
              Plantillas
            </Link>
            <Link href="/politica-de-privacidad" className="hover:text-indigo-600 transition-colors">
              Privacidad
            </Link>
            <Link href="/contacto" className="hover:text-indigo-600 transition-colors">
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section / Encabezado principal */}
      <main className="mb-auto">
        <section className="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center">
          <span className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold rounded-full mb-4 shadow-xs">
            100% Gratis y Sin Registro
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Modelos y Plantillas Legales <span className="text-indigo-600">Listos para Rellenar</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Genera cartas de renuncia, contratos y solicitudes administrativas en segundos. Copia el texto directamente o descarga tu documento.
          </p>
        </section>

        {/* Sección de Plantillas */}
        <section id="plantillas" className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            Documentos Destacados
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Tarjeta 1: Carta de Renuncia */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all group flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-md">
                  Laboral
                </span>
                <h3 className="text-xl font-bold mt-4 text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Carta de Renuncia Voluntaria
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Modelo legal con preaviso obligatorio de 15 días. Rellena tus datos y copia la carta generada al instante.
                </p>
              </div>
              <Link 
                href="/plantillas/carta-renuncia" 
                className="mt-6 inline-flex items-center justify-center w-full py-2.5 px-4 bg-slate-900 hover:bg-indigo-600 text-white font-semibold text-sm rounded-xl transition-colors shadow-xs"
              >
                Rellenar Plantilla &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Pie de página profesional */}
      <footer className="border-t border-slate-200 bg-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 PlantillasYGuías. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/politica-de-privacidad" className="hover:text-slate-900 transition-colors">Política de Privacidad</Link>
            <Link href="/politica-de-cookies" className="hover:text-slate-900 transition-colors">Política de Cookies</Link>
            <Link href="/contacto" className="hover:text-slate-900 transition-colors">Contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}