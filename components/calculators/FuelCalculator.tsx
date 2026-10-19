'use client';
import { useState } from 'react';

export default function FuelCalculator() {
  const [distancia, setDistancia] = useState<number>(450);
  const [consumo, setConsumo] = useState<number>(6.5);
  const [precio, setPrecio] = useState<number>(1.65);
  const [personas, setPersonas] = useState<number>(2);

  const litros = (distancia * consumo) / 100;
  const costeTotal = litros * precio;
  const costePersona = personas > 0 ? costeTotal / personas : costeTotal;

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-white shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-amber-400">Calculadora de Gasolina para Viajes</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="text-xs text-slate-400">Distancia (km)</label>
          <input type="number" value={distancia} onChange={e => setDistancia(Number(e.target.value))} className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700 mt-1"/>
        </div>
        <div>
          <label className="text-xs text-slate-400">Consumo (L/100km)</label>
          <input type="number" step="0.1" value={consumo} onChange={e => setConsumo(Number(e.target.value))} className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700 mt-1"/>
        </div>
        <div>
          <label className="text-xs text-slate-400">Precio Litro (€/L)</label>
          <input type="number" step="0.01" value={precio} onChange={e => setPrecio(Number(e.target.value))} className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700 mt-1"/>
        </div>
        <div>
          <label className="text-xs text-slate-400">Pasajeros</label>
          <input type="number" min={1} value={personas} onChange={e => setPersonas(Number(e.target.value))} className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700 mt-1"/>
        </div>
      </div>
      <div className="mt-6 p-4 bg-slate-950 rounded-xl border border-amber-900/40">
        <div className="flex justify-between text-sm mb-1 text-slate-400"><span>Coste Total Gasolina:</span><span className="text-white font-mono">{costeTotal.toFixed(2)} €</span></div>
        <div className="flex justify-between text-lg font-bold border-t border-slate-800 pt-2 text-amber-400"><span>Coste por Persona:</span><span className="font-mono">{costePersona.toFixed(2)} €</span></div>
      </div>
    </div>
  );
}