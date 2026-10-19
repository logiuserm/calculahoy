export default function AdSlot({ label = "Publicidad AdSense" }: { label?: string }) {
  return (
    <div className="my-8 p-4 bg-slate-800/40 border border-dashed border-slate-700/60 rounded-xl text-center">
      <span className="text-xs uppercase tracking-wider text-slate-500 font-mono block mb-2">{label}</span>
      <div className="h-24 sm:h-32 bg-slate-900/60 rounded flex items-center justify-center text-slate-600 text-xs">
        [Espacio reservado para AdSense]
      </div>
    </div>
  );
}