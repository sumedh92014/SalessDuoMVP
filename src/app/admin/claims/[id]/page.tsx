'use client';

import Link from 'next/link';
import { useState, use } from 'react';
import { AppShell } from '@/components/app-shell';
import { ActionToast, Breadcrumbs } from '@/components/admin-actions';

export default function ClaimDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const [status, setStatus] = useState('Under Review');
  const [message, setMessage] = useState('');

  const act = (value: string) => {
    setStatus(value);
    setMessage(`Claim ${id} updated to ${value}.`);
  };

  return (
    <AppShell role="admin" title="Claim Detail">
      <Breadcrumbs items={[{ label: 'Claims', href: '/admin/claims' }, { label: id }]} />
      <ActionToast message={message} />

      <div className="rounded-xl border bg-white p-5 shadow-sm space-y-4">
        <p className="text-sm text-slate-600">
          Current status: <strong>{status}</strong>
        </p>

        <div className="flex flex-wrap gap-2">
          <button onClick={() => act('Approved')} className="rounded-md bg-emerald-600 px-3 py-2 text-sm text-white">
            Approve
          </button>

          <button onClick={() => act('Rejected')} className="rounded-md bg-rose-600 px-3 py-2 text-sm text-white">
            Reject
          </button>

          <button onClick={() => act('Flagged')} className="rounded-md border px-3 py-2 text-sm">
            Flag Suspicious
          </button>

          <button onClick={() => act('Returned for Resubmission')} className="rounded-md border px-3 py-2 text-sm">
            Return
          </button>

          <Link href="/admin/claims" className="rounded-md border px-3 py-2 text-sm">
            Back to Claims
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
