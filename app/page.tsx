import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AdSlot from '@/components/layout/AdSlot';
import FiniquitoCalculator from '@/components/calculators/FiniquitoCalculator';
import NetSalaryCalculator from '@/components/calculators/NetSalaryCalculator';
import MortgageCalculator from '@/components/calculators/MortgageCalculator';
import FuelCalculator from '@/components/calculators/FuelCalculator';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full space-y-12">
        <div className="text-center my-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Calculadoras Financieras y Laborales
          </h1>
          <p className="text-slate-400 text-base md:text-lg">
            Calcula tu finiquito, salario neto, hipoteca o gastos de viaje de forma rápida y gratuita.
          </p>
        </div>

        <AdSlot label="Anuncio Superior" />

        <section id="finiquito">
          <FiniquitoCalculator />
          <article className="mt-4 bg-slate-900/40 border border-slate-800 rounded-xl p-6 text-slate-300 text-sm leading-relaxed">
            <h3 className="text-lg font-bold text-white mb-2">¿Cómo se calcula el finiquito laboral?</h3>
            <p>El finiquito incluye las proporciones del salario no cobradas en el mes en curso, la compensación de vacaciones no disfrutadas y las pagas extraordinarias no prorrateadas. En caso de despido improcedente, corresponden 33 días por año trabajado.</p>
          </article>
        </section>

        <AdSlot label="Anuncio Intermedio" />

        <section id="salario">
          <NetSalaryCalculator />
        </section>

        <section id="hipoteca">
          <MortgageCalculator />
        </section>

        <section id="gasolina">
          <FuelCalculator />
        </section>
      </main>

      <Footer />
    </div>
  );
}