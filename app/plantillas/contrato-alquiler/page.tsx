'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContratoAlquiler() {
  const [arrendador, setArrendador] = useState('')
  const [arrendatario, setArrendatario] = useState('')
  const [direccion, setDireccion] = useState('')
  const [renta, setRenta] = useState('')
  const [fianza, setFianza] = useState('')
  const [copiado, setCopiado] = useState(false)

  const textoContrato = `CONTRATO DE ARRENDAMIENTO DE VIVIENDA

En la ciudad correspondiente, se reunen:

DE UNA PARTE (Arrendador/a): ${arrendador || '[Nombre del Propietario/a]'}
DE OTRA PARTE (Arrendatario/a): ${arrendatario || '[Nombre del Inquilino/a]'}

Ambas partes se reconocen capacidad legal suficiente para este acto y ACUERDAN:

PRIMERA.- OBJETO. El arrendador cede en alquiler la vivienda ubicada en:
${direccion || '[Direccion completa del inmueble]'}

SEGUNDA.- DURACION. El contrato se estipula por el plazo legalmente establecido a contar desde la firma del presente documento.

TERCERA.- RENTA Y FIANZA. La renta mensual pactada es de ${renta || '[Importe en euros]'} euros, abonables dentro de los primeros 7 dias del mes. Se hace entrega en este acto de una fianza de ${fianza || '[Importe fianza]'} euros.

CUARTA.- USO Y CONSERVACION. La vivienda se destinara exclusivamente a residencia habitual del arrendatario.

Firmado en duplicado ejemplar por ambas partes:


____________________________            ____________________________
Arrendador/a                            Arrendatario/a`

  const copiarTexto = () => {
    navigator.clipboard.writeText(textoContrato)
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
          <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full">
            Modelo Rellenable
          </span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          Contrato de Alquiler de Vivienda
        </h1>
        <p className="text-slate-600 mb-8">
          Borrador sencillo para formalizar el arrendamiento urbano. Rellena los campos principales y copia el documento.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">
              Datos del Contrato
            </h2>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nombre Propietario (Arrendador)</label>
              <input 
                type="text" 
                placeholder="Ej. Juan Perez Gomez" 
                value={arrendador}
                onChange={(e) => setArrendador(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nombre Inquilino (Arrendatario)</label>
              <input 
                type="text" 
                placeholder="Ej. Ana Martinez Lopez" 
                value={arrendatario}
                onChange={(e) => setArrendatario(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Direccion de la Vivienda</label>
              <input 
                type="text" 
                placeholder="Ej. Calle Mayor 12, 3B, Madrid" 
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Renta Mensual (€)</label>
                <input 
                  type="text" 
                  placeholder="Ej. 850" 
                  value={renta}
                  onChange={(e) => setRenta(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Fianza (€)</label>
                <input 
                  type="text" 
                  placeholder="Ej. 850" 
                  value={fianza}
                  onChange={(e) => setFianza(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">
                  Documento Generado
                </h2>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 whitespace-pre-wrap font-mono text-xs leading-relaxed text-slate-800">
                  {textoContrato}
                </div>
              </div>

              <button 
                onClick={copiarTexto}
                className="mt-6 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-sm transition flex items-center justify-center gap-2"
              >
                {copiado ? '¡Copiado al portapapeles!' : 'Copiar Contrato'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}