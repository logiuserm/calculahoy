'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full space-y-6 text-slate-300">
        <h1 className="text-3xl font-bold text-white mb-6">Política de Privacidad</h1>
        <p>En <strong>CalculaHoy</strong> nos tomamos muy en serio la privacidad de nuestros usuarios. Esta web no requiere ningún tipo de registro para el uso de las calculadoras y no almacena ningún dato personal en servidores externos.</p>
        <h2 className="text-xl font-bold text-white pt-4">Google AdSense</h2>
        <p>Utilizamos proveedores de anuncios de terceros, como Google AdSense, para mostrar anuncios cuando visita nuestro sitio web. Estas empresas pueden usar información sobre sus visitas a este sitio para ofrecerle anuncios sobre bienes y servicios de su interés.</p>
      </main>
      <Footer />
    </div>
  );
}