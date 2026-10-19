'use client';
import { useState } from 'react';

export default function FiniquitoCalculator() {
  const [salario, setSalario] = useState<number>(1800);
  const [motivo, setMotivo] = useState<string>('improcedente');
  const [anos, setAnos] = useState<number>(2);
  const [vacaciones, setVacaciones] = useState<number>(5);

  const indemnizacion = motivo === 'improcedente' ? anos * 33 * (salario / 30) :
                        motivo === 'procedente' ? anos * 20 * (salario / 30) : 0;
  const parteVacaciones = (salario / 30) * vacaciones;
  const total = indemnizacion + parteVacaciones;

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-white shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-indigo-400">Calculadora de Finiquito e Indemnización</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs text-slate-400">Salario Mensual Bruto (€)</label>
          <input type="number" value={salario} onChange={e => setSalario(Number(e.target.value))} className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700 mt-1"/>
        </div>
        <div>
          <label className="text-xs text-slate-400">Motivo de Baja</label>
          <select value={motivo} onChange={e => setMotivo(e.target.value)} className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700 mt-1">
            <option value="improcedente">Despido Improcedente (33 días)</option>
            <option value="procedente">Despido Objetivo/Procedente (20 días)</option>
            <option value="voluntaria">Baja Voluntaria (0 días)</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-400">Años Trabajados</label>
          <input type="number" value={anos} onChange={e => setAnos(Number(e.target.value))} className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700 mt-1"/>
        </div>
        <div>
          <label className="text-xs text-slate-400">Días de Vacaciones Pendientes</label>
          <input type="number" value={vacaciones} onChange={e => setVacaciones(Number(e.target.value))} className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700 mt-1"/>
        </div>
      </div>
      <div className="mt-6 p-4 bg-slate-950 rounded-xl border border-indigo-900/40">
        <div className="flex justify-between text-sm mb-1 text-slate-400"><span>Indemnización:</span><span className="text-white font-mono">{indemnizacion.toFixed(2)} €</span></div>
        <div className="flex justify-between text-sm mb-1 text-slate-400"><span>Vacaciones pendientes:</span><span className="text-white font-mono">{parteVacaciones.toFixed(2)} €</span></div>
        <div className="flex justify-between text-lg font-bold border-t border-slate-800 pt-2 text-indigo-400"><span>Total Est. Finiquito:</span><span className="font-mono">{total.toFixed(2)} €</span></div>
      </div>
    </div>
  );
}