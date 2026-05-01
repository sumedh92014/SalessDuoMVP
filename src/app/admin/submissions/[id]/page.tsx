'use client';

import Link from 'next/link';
import { use, useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs, ActionToast } from '@/components/admin-actions';

export default function SubmissionDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [status, setStatus] = useState('Submitted');
  const [message, setMessage] = useState('');
  const act = (next: string) => { setStatus(next); setMessage(`Submission ${id} set to ${next}.`); };

  return (
    <AppShell role="admin" title="Submission Detail">
      <Breadcrumbs items={[{ label: 'Submissions', href: '/admin/submissions' }, { label: id }]} />
      <ActionToast message={message} />
      <div className="rounded-xl border bg-white p-5 shadow-sm space-y-4">
        <p className="text-sm text-slate-600">Status: <strong>{status}</strong></p>
        <div className="flex gap-2 flex-wrap"><button onClick={() => act('Approved')} className="rounded-md bg-emerald-600 px-3 py-2 text-sm text-white">Approve</button><button onClick={() => act('Returned for Resubmission')} className="rounded-md border px-3 py-2 text-sm">Return</button><button onClick={() => act('Rejected')} className="rounded-md bg-rose-600 px-3 py-2 text-sm text-white">Reject</button><Link href="/admin/submissions" className="rounded-md border px-3 py-2 text-sm">Back to Submissions</Link></div>
      </div>
    </AppShell>
  );
}
