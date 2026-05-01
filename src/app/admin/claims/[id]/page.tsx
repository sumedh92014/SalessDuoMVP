'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { ActionToast, Breadcrumbs } from '@/components/admin-actions';

export default function ClaimDetail({ params }: { params: { id: string } }) {
  const [status, setStatus] = useState('Under Review');
  const [message, setMessage] = useState('');
  const act = (v: string) => { setStatus(v); setMessage(`Claim ${params.id} updated to ${v}.`); };

  return (
    <AppShell role="admin" title="Claim Detail">
      <Breadcrumbs items={[{ label: 'Claims', href: '/admin/claims' }, { label: params.id }]} />
      <ActionToast message={message} />
      <div className="rounded-xl border bg-white p-5 shadow-sm space-y-4">
        <p className="text-sm text-slate-600">Current status: <strong>{status}</strong></p>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => act('Approved')} className="rounded-md bg-emerald-600 px-3 py-2 text-sm text-white">Approve</button>
          <button onClick={() => act('Rejected')} className="rounded-md bg-rose-600 px-3 py-2 text-sm text-white">Reject</button>
          <button onClick={() => act('Flagged')} className="rounded-md border px-3 py-2 text-sm">Flag Suspicious</button>
          <button onClick={() => act('Returned for Resubmission')} className="rounded-md border px-3 py-2 text-sm">Return</button>
          <Link href="/admin/claims" className="rounded-md border px-3 py-2 text-sm">Back to Claims</Link>
        </div>
      </div>
    </AppShell>
  );
}
