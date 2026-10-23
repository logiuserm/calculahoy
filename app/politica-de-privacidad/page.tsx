import Link from 'next/link'

export default function PoliticaPrivacidad() {
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
        <h1 className="text-3xl font-extrabold mb-6 text-slate-900">Politica de Privacidad</h1>

        <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
          <p>
            En cumplimiento con el Reglamento General de Proteccion de Datos (RGPD) y la normativa vigente de proteccion de datos personales, informamos a los usuarios sobre el tratamiento de los datos recogidos en este sitio web.
          </p>

          <h2 className="text-lg font-bold text-slate-800 mt-6">1. Recopilacion de Datos</h2>
          <p>
            Este sitio web no almacena ni guarda en servidores externos los datos personales introducidos en los formularios interactivos o generadores de plantillas. Toda la informacion procesada se ejecuta de forma local en el navegador del usuario.
          </p>

          <h2 className="text-lg font-bold text-slate-800 mt-6">2. Uso de Cookies y Publicidad</h2>
          <p>
            Utilizamos servicios publicitarios de terceros, como Google AdSense, para mostrar anuncios cuando visita nuestro sitio web. Google utiliza cookies para publicar anuncios basados en las visitas anteriores del usuario a este u otros sitios web.
          </p>
          <p>
            Los usuarios pueden inhabilitar la publicidad personalizada dirigiéndose a la Configuración de anuncios de Google.
          </p>

          <h2 className="text-lg font-bold text-slate-800 mt-6">3. Enlaces a Terceros</h2>
          <p>
            Nuestro sitio web puede contener enlaces a otros sitios de interes. Una vez que haga clic en estos enlaces y abandone nuestra pagina, no tenemos control sobre el sitio al que es redirigido.
          </p>
        </div>
      </div>
    </main>
  )
}