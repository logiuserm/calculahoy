'use client';

interface AdSlotProps {
  id?: string;
  format?: 'horizontal' | 'vertical' | 'rectangle';
  className?: string;
}

export default function AdSlot({ id, format = 'horizontal', className = '' }: AdSlotProps) {
  return (
    <div
      id={id}
      className={`my-6 p-4 bg-slate-900/40 border border-dashed border-slate-800 rounded-xl flex items-center justify-center text-xs text-slate-500 min-h-[90px] ${className}`}
    >
      <span>Espacio publicitario AdSense ({format})</span>
    </div>
  );
}