import Link from 'next/link'

export default function PoliticaCookies() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-indigo-600">
            &larr; Volver al inicio
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-10 bg-white my-8 rounded-xl border border-slate-200">
        <h1 className="text-3xl font-extrabold mb-6 text-slate-900">Politica de Cookies</h1>

        <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
          <p>
            Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegacion y ofrecer contenidos y publicidad de interes.
          </p>

          <h2 className="text-lg font-bold text-slate-800 mt-6">Que es una cookie?</h2>
          <p>
            Una cookie es un pequeno archivo de texto que se almacena en su navegador cuando visita casi cualquier pagina web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa pagina.
          </p>

          <h2 className="text-lg font-bold text-slate-800 mt-6">Cookies de Publicidad (Google AdSense)</h2>
          <p>
            Google, como proveedor asociado, utiliza cookies para publicar anuncios en este sitio web. El uso de la cookie de DoubleClick permite a Google y a sus socios mostrar anuncios basados en las visitas realizadas por los usuarios a este sitio o a otros sitios de Internet.
          </p>

          <h2 className="text-lg font-bold text-slate-800 mt-6">Como gestionar las cookies?</h2>
          <p>
            Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuracion de las opciones del navegador instalado en su ordenador.
          </p>
        </div>
      </div>
    </main>
  )
}