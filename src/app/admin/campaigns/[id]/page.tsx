'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { ActionToast, Breadcrumbs } from '@/components/admin-actions';

export default function CampaignDetail({ params }: { params: { id: string } }) {
  const [status, setStatus] = useState('Live');
  const [message, setMessage] = useState('');
  const set = (next: string) => { setStatus(next); setMessage(`Campaign ${params.id} set to ${next}.`); };

  return (
    <AppShell role="admin" title="Campaign Detail">
      <Breadcrumbs items={[{ label: 'Campaigns', href: '/admin/campaigns' }, { label: params.id }]} />
      <ActionToast message={message} />
      <div className="rounded-xl border bg-white p-5 shadow-sm space-y-4">
        <div><h2 className="text-xl font-semibold">Campaign {params.id}</h2><p className="text-sm text-slate-600">Status: <strong>{status}</strong></p></div>
        <div className="flex flex-wrap gap-2">
          <button className="rounded-md border px-3 py-2 text-sm" onClick={() => set('Paused')}>Pause</button>
          <button className="rounded-md border px-3 py-2 text-sm" onClick={() => set('Live')}>Resume</button>
          <button className="rounded-md border px-3 py-2 text-sm" onClick={() => set('Cancelled')}>Cancel</button>
          <Link href={`/admin/campaigns/${params.id}/review`} className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white">Open Review</Link>
          <Link href="/admin/campaigns" className="rounded-md border px-3 py-2 text-sm">Back to Campaigns</Link>
        </div>
      </div>
    </AppShell>
  );
}
