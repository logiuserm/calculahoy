import Link from 'next/link';
import { Calculator } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 text-xl font-bold text-indigo-400">
          <div className="p-2 bg-indigo-600 text-white rounded-xl shadow-lg">
            <Calculator className="w-6 h-6" />
          </div>
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            CalculaHoy
          </span>
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-indigo-400 transition-colors">Inicio</Link>
          <Link href="/contacto" className="hover:text-indigo-400 transition-colors">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}