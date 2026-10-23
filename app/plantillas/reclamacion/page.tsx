'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CartaReclamacion() {
  const [cliente, setCliente] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [numContrato, setNumContrato] = useState('')
  const [motivo, setMotivo] = useState('')
  const [copiado, setCopiado] = useState(false)

  const textoReclamacion = `A LA ATENCION DEL SERVICIO DE ATENCION AL CLIENTE DE:
${empresa || '[Nombre de la Empresa o Entidad]'}

Por la presente, yo, ${cliente || '[Tu Nombre Completo]'}, presento RECLAMACION FORMAL en relacion con el servicio/producto contratado bajo la referencia o numero de contrato ${numContrato || '[Numero de contrato o factura]'}.

MOTIVO DE LA RECLAMACION:
${motivo || '[Describe brevemente los hechos y el problema surgido]'}

SOLICITUD:
Por todo lo expuesto, solicito la inmediata revision de mi caso y la correspondiente solucion o reembolso del importe abonado indebidamente.

En caso de no recibir respuesta satisfactoria en el plazo legalmente estipulado, me reservo el derecho de acudir a los organismos oficiales de Consumo oportunos.

Atentamente,

____________________________
${cliente || '[Tu Nombre Completo]'}`

  const copiarTexto = () => {
    navigator.clipboard.writeText(textoReclamacion)
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
          <span className="text-xs font-semibold px-3 py-1 bg-amber-50 text-amber-600 rounded-full">
            Modelo Rellenable
          </span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          Carta de Reclamación
        </h1>
        <p className="text-slate-600 mb-8">
          Modelo formal para exigir soluciones a cobros indebidos, fallos de servicio o devoluciones.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">
              Detalles de la Reclamación
            </h2>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Tu Nombre Completo</label>
              <input 
                type="text" 
                placeholder="Ej. Carlos Ruiz Gomez" 
                value={cliente}
                onChange={(e) => setCliente(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Empresa a Reclamar</label>
              <input 
                type="text" 
                placeholder="Ej. Compania Telefonica S.A." 
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nº Contrato / Factura / Cliente</label>
              <input 
                type="text" 
                placeholder="Ej. FAC-2026-9948" 
                value={numContrato}
                onChange={(e) => setNumContrato(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Motivo / Explicacion del problema</label>
              <textarea 
                rows={4}
                placeholder="Explica brevemente lo ocurrido..." 
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">
                  Documento Generado
                </h2>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 whitespace-pre-wrap font-mono text-xs leading-relaxed text-slate-800">
                  {textoReclamacion}
                </div>
              </div>

              <button 
                onClick={copiarTexto}
                className="mt-6 w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg text-sm transition flex items-center justify-center gap-2"
              >
                {copiado ? '¡Copiado al portapapeles!' : 'Copiar Carta de Reclamación'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}