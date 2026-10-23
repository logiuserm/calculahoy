'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CartaRenuncia() {
  const [nombre, setNombre] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [cargo, setCargo] = useState('')
  const [fechaBaja, setFechaBaja] = useState('')
  const [copiado, setCopiado] = useState(false)

  const fechaHoy = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const textoCarta = `A la atención del Departamento de Recursos Humanos de ${empresa || '[Nombre de la Empresa]'}:

Por medio de la presente carta, les comunico mi decisión individual y voluntaria de rescindir mi contrato de trabajo con la empresa, en la cual he venido desempeñando el puesto de ${cargo || '[Tu Cargo]'}.

En cumplimiento con la normativa laboral vigente y respetando el periodo de preaviso legalmente establecido, les informo que mi último día de trabajo en la entidad será el próximo ${fechaBaja || '[Fecha del último día de trabajo]'}.

Agradezco sinceramente las oportunidades de desarrollo profesional y personal que se me han brindado durante mi estancia en la organización. Quedo a su entera disposición para coordinar la entrega de mis funciones y la firma del correspondiente finiquito y liquidación de haberes hasta la fecha señalada.

Atentamente,

____________________________
${nombre || '[Tu Nombre Completo]'}
Fecha de comunicación: ${fechaHoy}`

  const copiarTexto = () => {
    navigator.clipboard.writeText(textoCarta)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 3000)
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-indigo-600">
            &larr; Volver al inicio
          </Link>
          <span className="text-xs font-semibold px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full">
            Modelo Oficial Rellenable
          </span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          Carta de Renuncia Voluntaria (Baja Voluntaria)
        </h1>
        <p className="text-slate-600 mb-8">
          Rellena los datos en el formulario y obtén tu carta redactada al instante. Copia el texto o imprímelo directamente.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulario */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">
              Datos para personalizar
            </h2>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Tu Nombre Completo</label>
              <input 
                type="text" 
                placeholder="Ej. María García López" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nombre de la Empresa</label>
              <input 
                type="text" 
                placeholder="Ej. Tech Solutions S.L." 
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Tu Cargo o Puesto</label>
              <input 
                type="text" 
                placeholder="Ej. Administrativo / Desarrollador" 
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Fecha del Último Día de Trabajo</label>
              <input 
                type="date" 
                value={fechaBaja}
                onChange={(e) => setFechaBaja(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Vista Previa de la Carta */}
          <div className="flex flex-col">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">
                  Documento Generado
                </h2>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 whitespace-pre-wrap font-mono text-xs leading-relaxed text-slate-800">
                  {textoCarta}
                </div>
              </div>

              <button 
                onClick={copiarTexto}
                className="mt-6 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm transition flex items-center justify-center gap-2"
              >
                {copiado ? '✓ ¡Copiado al Portapapeles!' : 'Copiar Texto de la Carta'}
              </button>
            </div>
          </div>
        </div>

        {/* Contenido Informativo SEO (Fundamental para AdSense) */}
        <article className="mt-16 bg-white p-8 rounded-xl border border-slate-200 prose max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Guía Legal: ¿Cómo presentar una carta de baja voluntaria?
          </h2>
          
          <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">1. ¿Con cuánto tiempo de antelación debo avisar?</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Por regla general, la Ley del Estatuto de los Trabajadores estipula un preaviso mínimo de **15 días naturales**. No obstante, es fundamental revisar el convenio colectivo aplicable a tu sector o lo estipulado en tu contrato de trabajo, ya que algunos convenios pueden exigir un plazo superior (por ejemplo, 30 días para puestos de responsabilidad).
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">2. Formas de entregar la carta</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Se recomienda presentar el documento por duplicado en mano al responsable de Recursos Humanos o Dirección, solicitando que firmen y sellen la copia que te quedas como fe de recepción. En caso de teletrabajo o imposibilidad presencial, la vía legalmente idónea es el envío de un **burofax con acuse de recibo y certificado de texto**.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">3. ¿Tengo derecho a finiquito tras la renuncia?</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Sí. La baja voluntaria no da derecho a indemnización por despido ni a prestación por desempleo (paro), pero el trabajador conserva **100% el derecho a percibir el finiquito**. Este debe incluir los días trabajados en el mes en curso, la parte proporcional de las pagas extraordinarias no cobradas y los días de vacaciones generados y no disfrutados.
          </p>
        </article>
      </div>
    </main>
  )
}