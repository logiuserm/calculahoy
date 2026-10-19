'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Contacto() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 max-w-2xl mx-auto px-4 py-12 w-full space-y-6">
        <h1 className="text-3xl font-bold text-white mb-2">Contacto</h1>
        <p className="text-slate-400">¿Tienes dudas o sugerencias sobre nuestras calculadoras? Escríbenos.</p>
        <form className="space-y-4 bg-slate-900 p-6 rounded-xl border border-slate-800">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Nombre</label>
            <input type="text" className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Correo electrónico</label>
            <input type="email" className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700" placeholder="tu@email.com" />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Mensaje</label>
            <textarea rows={4} className="w-full bg-slate-800 p-2.5 rounded-lg text-white border border-slate-700" placeholder="Escribe tu mensaje aquí..."></textarea>
          </div>
          <button type="button" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-lg transition-colors">
            Enviar mensaje
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}