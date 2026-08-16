'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { MdCheckCircle, MdError, MdInfo, MdClose } from 'react-icons/md';

type ToastType = 'success' | 'error' | 'info';

interface ToastItem { id: string; message: string; type: ToastType; }
interface ToastCtx  { toast: (msg: string, type?: ToastType) => void; }

const Ctx = createContext<ToastCtx>({ toast: () => {} });
export const useToast = () => useContext(Ctx);

const ICONS = {
  success: <MdCheckCircle size={16} className="text-emerald-500 shrink-0" />,
  error:   <MdError       size={16} className="text-red-500    shrink-0" />,
  info:    <MdInfo        size={16} className="text-blue-500   shrink-0" />,
};

function Card({ item, remove }: { item: ToastItem; remove: (id: string) => void }) {
  useEffect(() => {
    const t = setTimeout(() => remove(item.id), 3600);
    return () => clearTimeout(t);
  }, [item.id, remove]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-slide-up flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg border border-slate-200 min-w-[260px] max-w-xs text-sm text-slate-800"
    >
      {ICONS[item.type]}
      <span className="flex-1 leading-snug">{item.message}</span>
      <button onClick={() => remove(item.id)} className="text-slate-400 hover:text-slate-600 ml-1 shrink-0" aria-label="Dismiss">
        <MdClose size={14} />
      </button>
    </div>
  );
}

let _n = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);
  const remove = useCallback((id: string) => setItems(p => p.filter(t => t.id !== id)), []);
  const toast  = useCallback((message: string, type: ToastType = 'success') => {
    setItems(p => [...p.slice(-3), { id: String(++_n), message, type }]);
  }, []);

  return (
    <Ctx.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-2 pointer-events-none">
        {items.map(t => (
          <div key={t.id} className="pointer-events-auto">
            <Card item={t} remove={remove} />
          </div>
        ))}
      </div>
    </Ctx.Provider>
  );
}
