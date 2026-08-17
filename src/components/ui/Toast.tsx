'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { HiCheckCircle, HiXCircle, HiInformationCircle, HiXMark } from 'react-icons/hi2';

type ToastType = 'success' | 'error' | 'info';
interface ToastItem { id: string; message: string; type: ToastType; }
interface ToastCtx  { toast: (msg: string, type?: ToastType) => void; }

const Ctx = createContext<ToastCtx>({ toast: () => {} });
export const useToast = () => useContext(Ctx);

const ICONS = {
  success: <HiCheckCircle className="text-black shrink-0" size={15} />,
  error:   <HiXCircle className="text-red-600 shrink-0" size={15} />,
  info:    <HiInformationCircle className="text-[#595959] shrink-0" size={15} />,
};

function Card({ item, remove }: { item: ToastItem; remove: (id: string) => void }) {
  useEffect(() => {
    const t = setTimeout(() => remove(item.id), 3800);
    return () => clearTimeout(t);
  }, [item.id, remove]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-slide-up flex items-center gap-3 bg-white border border-[#E5E5E5] px-4 py-3 shadow-lg min-w-[260px] max-w-xs text-sm text-black"
    >
      {ICONS[item.type]}
      <span className="flex-1 leading-snug text-xs font-medium">{item.message}</span>
      <button onClick={() => remove(item.id)} className="text-[#595959] hover:text-black shrink-0 ml-1" aria-label="Dismiss">
        <HiXMark size={13} />
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
