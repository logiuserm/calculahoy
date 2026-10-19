'use client';

import Link from 'next/link';
import AdSlot from '@/components/layout/AdSlot';

const calculators = [
  {
    title: 'Calculadora de Sueldo Neto',
    description: 'Calcula tu salario neto mensual y anual a partir del bruto con las retenciones de IRPF actualizadas.',
    href: '/sueldo-neto',
    icon: '💶',
    badge: 'Popular',
  },
  {
    title: 'Calculadora de Hipoteca',
    description: 'Estima la cuota mensual de tu hipoteca, intereses totales y cuadro de amortización de forma rápida.',
    href: '/hipoteca',
    icon: '🏠',
    badge: 'Finanzas',
  },
  {
    title: 'Calculadora de Finiquito',
    description: 'Averigua cuánto te corresponde por indemnización, vacaciones no disfrutadas y pagas extra.',
    href: '/finiquito',
    icon: '📄',
    badge: 'Laboral',
  },
  {
    title: 'Calculadora de Gasolina',
    description: 'Calcula el coste del combustible para tus viajes dividiendo los gastos entre los pasajeros.',
    href: '/gasolina',
    icon: '⛽',
    badge: 'Viajes',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 bg-grid-pattern">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full">
          Herramientas gratuitas y precisas
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Calcula tus finanzas en segundos,{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            sin complicaciones.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          Herramientas online diseñadas para darte respuestas exactas sobre salarios, hipotecas, despidos y gastos diarios.
        </p>
      </section>

      {/* Espacio para AdSense superior */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <AdSlot id="banner-home-top" format="horizontal" />
      </div>

      {/* Grid de Calculadoras */}
      <section id="calculadoras" className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {calculators.map((calc) => (
            <Link
              key={calc.title}
              href={calc.href}
              className="group relative p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl hover:border-indigo-500/50 hover:bg-slate-900/90 transition-all duration-300 shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 group-hover:scale-110 transition-transform">
                  {calc.icon}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {calc.badge}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {calc.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                {calc.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Espacio para AdSense inferior */}
      <div className="max-w-7xl mx-auto px-4 my-12">
        <AdSlot id="banner-home-bottom" format="horizontal" />
      </div>
    </div>
  );
}