'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { ActionToast, Breadcrumbs } from '@/components/admin-actions';

export default function CampaignReview({ params }: { params: { id: string } }) {
  const [decision, setDecision] = useState('Pending Review');
  const [message, setMessage] = useState('');
  const decide = (value: string) => { setDecision(value); setMessage(`Campaign ${params.id} marked as ${value}.`); };

  return (
    <AppShell role="admin" title="Campaign Review">
      <Breadcrumbs items={[{ label: 'Campaigns', href: '/admin/campaigns' }, { label: params.id, href: `/admin/campaigns/${params.id}` }, { label: 'Review' }]} />
      <ActionToast message={message} />
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="mb-4 text-sm text-slate-600">Review Decision: <strong>{decision}</strong></p>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => decide('Approved')} className="rounded-md bg-emerald-600 px-3 py-2 text-sm text-white">Approve Campaign</button>
          <button onClick={() => decide('Rejected')} className="rounded-md bg-rose-600 px-3 py-2 text-sm text-white">Reject Campaign</button>
          <button onClick={() => decide('Needs Changes')} className="rounded-md border px-3 py-2 text-sm">Return to Brand</button>
          <Link href={`/admin/campaigns/${params.id}`} className="rounded-md border px-3 py-2 text-sm">Back to Detail</Link>
        </div>
      </div>
    </AppShell>
  );
}
