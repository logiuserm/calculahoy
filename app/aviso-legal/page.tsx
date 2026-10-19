'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full space-y-6 text-slate-300">
        <h1 className="text-3xl font-bold text-white mb-6">Aviso Legal</h1>
        <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa de que el sitio web <strong>CalculaHoy</strong> es un portal informativo y de herramientas de cálculo gratuitas.</p>
        <h2 className="text-xl font-bold text-white pt-4">Exención de Responsabilidad</h2>
        <p>Los resultados ofrecidos por las calculadoras son meramente orientativos e informativos. No constituyen asesoramiento legal, laboral, fiscal ni financiero oficial. Se recomienda consultar con un profesional cualificado para decisiones específicas.</p>
      </main>
      <Footer />
    </div>
  );
}