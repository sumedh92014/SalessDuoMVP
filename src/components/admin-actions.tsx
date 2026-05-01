'use client';

import Link from 'next/link';

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="mb-4 text-sm text-slate-500">
      {items.map((item, idx) => (
        <span key={`${item.label}-${idx}`}>
          {item.href ? <Link href={item.href} className="hover:text-violet-600">{item.label}</Link> : <span className="text-slate-700">{item.label}</span>}
          {idx < items.length - 1 ? ' / ' : ''}
        </span>
      ))}
    </nav>
  );
}

export function ActionToast({ message }: { message: string }) {
  if (!message) return null;
  return <div className="mb-4 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{message}</div>;
}
