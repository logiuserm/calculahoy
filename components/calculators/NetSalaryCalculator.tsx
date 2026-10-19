'use client';
import { useState } from 'react';

export default function NetSalaryCalculator() {
  const [bruto, setBruto] = useState<number>(24000);
  const [irpf, setIrpf] = useState<number>(15);
  const [pagas, setPagas] = useState<number>(12);

  const retencionAnual = bruto * (irpf / 100);
  const seguridadSocial = bruto * 0.0635;
  const netoAnual = bruto - retencionAnual - seguridadSocial;
  const netoMensual = netoAnual / pagas;

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-white shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-emerald-400">Calculadora de Salario Neto</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="text-xs text-slate-400">Sueldo Bruto Anual (€)</label>
          <input type="number" value={bruto} onChange={e => setBruto(Number(e.target.value))} className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700 mt-1"/>
        </div>
        <div>
          <label className="text-xs text-slate-400">Retención IRPF (%)</label>
          <input type="number" value={irpf} onChange={e => setIrpf(Number(e.target.value))} className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700 mt-1"/>
        </div>
        <div>
          <label className="text-xs text-slate-400">Número de Pagas</label>
          <select value={pagas} onChange={e => setPagas(Number(e.target.value))} className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700 mt-1">
            <option value={12}>12 Pagas</option>
            <option value={14}>14 Pagas</option>
          </select>
        </div>
      </div>
      <div className="mt-6 p-4 bg-slate-950 rounded-xl border border-emerald-900/40">
        <div className="flex justify-between text-sm mb-1 text-slate-400"><span>Sueldo Neto Anual:</span><span className="text-white font-mono">{netoAnual.toFixed(2)} €</span></div>
        <div className="flex justify-between text-lg font-bold border-t border-slate-800 pt-2 text-emerald-400"><span>Neto Mensual ({pagas} pagas):</span><span className="font-mono">{netoMensual.toFixed(2)} €</span></div>
      </div>
    </div>
  );
}