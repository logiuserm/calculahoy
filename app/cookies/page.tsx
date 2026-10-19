import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full space-y-6 text-slate-300">
        <h1 className="text-3xl font-bold text-white mb-6">Política de Cookies</h1>
        <p>Este sitio web utiliza cookies propias y de terceros para gestionar la publicidad publicitaria a través de Google AdSense y recopilar métricas de uso anónimas.</p>
        <p>Usted puede rechazar o configurar el uso de cookies en cualquier momento a través de los ajustes de su navegador web habitual.</p>
      </main>
      <Footer />
    </div>
  );
}