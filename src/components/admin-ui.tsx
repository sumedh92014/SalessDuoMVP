'use client';

import Link from 'next/link';

export function StatCard({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-2xl font-semibold text-slate-900">{value}</p>
        <span className={`rounded-full px-2 py-1 text-xs font-medium ${tone}`}>Live</span>
      </div>
    </div>
  );
}

export function StatusPill({ value }: { value: string }) {
  const tone = value.toLowerCase().includes('live') || value.toLowerCase().includes('approved') || value.toLowerCase().includes('active')
    ? 'bg-green-100 text-green-700'
    : value.toLowerCase().includes('review') || value.toLowerCase().includes('paused') || value.toLowerCase().includes('invited')
      ? 'bg-amber-100 text-amber-700'
      : value.toLowerCase().includes('blocked') || value.toLowerCase().includes('rejected') || value.toLowerCase().includes('cancel')
        ? 'bg-rose-100 text-rose-700'
        : 'bg-slate-100 text-slate-700';

  return <span className={`rounded-full px-2 py-1 text-xs font-medium ${tone}`}>{value}</span>;
}

export function SectionCard({ title, href, children }: { title: string; href?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border bg-white shadow-sm">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h2 className="font-semibold text-slate-900">{title}</h2>
        {href ? <Link href={href} className="text-sm font-medium text-violet-600 hover:text-violet-700">View all</Link> : null}
      </div>
      <div className="p-4">{children}</div>
    </section>
  );
}
