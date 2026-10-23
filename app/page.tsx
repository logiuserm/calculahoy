import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header / Navegación */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-indigo-600">
            Plantillas & Guías Útiles
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <Link href="#plantillas" className="hover:text-indigo-600 transition">
              Plantillas
            </Link>
            <Link href="#herramientas" className="hover:text-indigo-600 transition">
              Herramientas
            </Link>
            <Link href="/sobre-nosotros" className="hover:text-indigo-600 transition">
              Sobre Nosotros
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Modelos, Plantillas y Guías Prácticas Rellenables
        </h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          Encuentra documentos legales y administrativos listos para personalizar, copiar y descargar gratis. Sin registro previo.
        </p>
      </section>

      {/* Grid de Plantillas */}
      <section id="plantillas" className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Plantillas Populares</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Tarjeta 1: Carta de Renuncia */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
            <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-full">
              Laboral
            </span>
            <h3 className="text-xl font-bold mt-3 text-slate-900">
              Carta de Renuncia Voluntaria
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Modelo editable con preaviso legal de 15 días listo para imprimir o enviar.
            </p>
            <Link 
              href="/plantillas/carta-renuncia" 
              className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Rellenar plantilla &rarr;
            </Link>
          </div>

          {/* Tarjeta 2: Contrato de Alquiler */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
            <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full">
              Vivienda
            </span>
            <h3 className="text-xl font-bold mt-3 text-slate-900">
              Contrato de Alquiler Simple
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Modelo básico con las cláusulas obligatorias de arrendamiento urbano.
            </p>
            <Link 
              href="/plantillas/contrato-alquiler" 
              className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Rellenar plantilla &rarr;
            </Link>
          </div>

          {/* Tarjeta 3: Carta de Reclamación */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
            <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-600 rounded-full">
              Consumo
            </span>
            <h3 className="text-xl font-bold mt-3 text-slate-900">
              Carta de Reclamación
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Formulario para solicitar devoluciones o exigir el cumplimiento de un servicio.
            </p>
            <Link 
              href="/plantillas/carta-reclamacion" 
              className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Rellenar plantilla &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Footer / Enlaces Legales (Obligatorios para AdSense) */}
      <footer className="mt-20 border-t border-slate-200 bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PlantillasYGuias. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/politica-de-privacidad" className="hover:underline">Política de Privacidad</Link>
            <Link href="/politica-de-cookies" className="hover:underline">Política de Cookies</Link>
            <Link href="/aviso-legal" className="hover:underline">Aviso Legal</Link>
            <Link href="/contacto" className="hover:underline">Contacto</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}