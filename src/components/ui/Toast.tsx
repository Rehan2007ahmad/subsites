'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { MdCheckCircle, MdError, MdInfo, MdClose } from 'react-icons/md';

type ToastType = 'success' | 'error' | 'info';

interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  toast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue>({ toast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

function ToastCard({ item, onRemove }: { item: ToastItem; onRemove: (id: string) => void }) {
  useEffect(() => {
    const t = setTimeout(() => onRemove(item.id), 3500);
    return () => clearTimeout(t);
  }, [item.id, onRemove]);

  const Icon =
    item.type === 'success' ? MdCheckCircle
    : item.type === 'error'   ? MdError
    : MdInfo;

  const iconColor =
    item.type === 'success' ? 'text-green-500'
    : item.type === 'error'   ? 'text-red-500'
    : 'text-blue-500';

  return (
    <div
      role="status"
      aria-live="polite"
      className="flex items-center gap-2.5 rounded-lg bg-white px-4 py-3 shadow-lg border border-slate-200 min-w-[240px] max-w-sm text-sm text-slate-800"
    >
      <Icon className={`${iconColor} shrink-0 text-base`} aria-hidden="true" />
      <span className="flex-1">{item.message}</span>
      <button
        onClick={() => onRemove(item.id)}
        className="text-slate-400 hover:text-slate-600"
        aria-label="Dismiss"
      >
        <MdClose size={16} />
      </button>
    </div>
  );
}

let _id = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback((message: string, type: ToastType = 'success') => {
    const id = String(++_id);
    setItems((prev) => [...prev.slice(-3), { id, message, type }]);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-2" aria-label="Notifications">
        {items.map((t) => (
          <ToastCard key={t.id} item={t} onRemove={remove} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
