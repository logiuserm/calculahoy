'use client';
import { useState } from 'react';

export default function MortgageCalculator() {
  const [prestamo, setPrestamo] = useState<number>(180000);
  const [anos, setAnos] = useState<number>(25);
  const [interes, setInteres] = useState<number>(3.2);

  const r = interes / 100 / 12;
  const n = anos * 12;
  const cuota = r > 0 ? (prestamo * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : prestamo / n;
  const totalPagado = cuota * n;
  const totalIntereses = totalPagado - prestamo;

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-white shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-cyan-400">Calculadora de Hipoteca</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="text-xs text-slate-400">Importe del Préstamo (€)</label>
          <input type="number" value={prestamo} onChange={e => setPrestamo(Number(e.target.value))} className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700 mt-1"/>
        </div>
        <div>
          <label className="text-xs text-slate-400">Plazo (Años)</label>
          <input type="number" value={anos} onChange={e => setAnos(Number(e.target.value))} className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700 mt-1"/>
        </div>
        <div>
          <label className="text-xs text-slate-400">Interés Anual (%)</label>
          <input type="number" step="0.1" value={interes} onChange={e => setInteres(Number(e.target.value))} className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700 mt-1"/>
        </div>
      </div>
      <div className="mt-6 p-4 bg-slate-950 rounded-xl border border-cyan-900/40">
        <div className="flex justify-between text-sm mb-1 text-slate-400"><span>Total Intereses:</span><span className="text-white font-mono">{totalIntereses.toFixed(2)} €</span></div>
        <div className="flex justify-between text-lg font-bold border-t border-slate-800 pt-2 text-cyan-400"><span>Cuota Mensual:</span><span className="font-mono">{cuota.toFixed(2)} €</span></div>
      </div>
    </div>
  );
}