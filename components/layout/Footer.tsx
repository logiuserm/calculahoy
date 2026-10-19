import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 py-10 mt-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <p>© {new Date().getFullYear()} CalculaHoy. Herramientas de cálculo gratuitas.</p>
        <div className="flex space-x-6">
          <Link href="/aviso-legal" className="hover:text-white">Aviso Legal</Link>
          <Link href="/privacidad" className="hover:text-white">Privacidad</Link>
          <Link href="/cookies" className="hover:text-white">Cookies</Link>
          <Link href="/contacto" className="hover:text-white">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}