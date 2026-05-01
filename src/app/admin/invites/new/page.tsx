'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs, ActionToast } from '@/components/admin-actions';

export default function NewInvitePage() {
  const [message, setMessage] = useState('');
  const [campaign, setCampaign] = useState('CAM-2405-001');
  const [count, setCount] = useState(5);

  return (
    <AppShell role="admin" title="New Invite Batch">
      <Breadcrumbs items={[{ label: 'Invites', href: '/admin/invites' }, { label: 'New' }]} />
      <ActionToast message={message} />
      <div className="rounded-xl border bg-white p-5 shadow-sm space-y-4">
        <label className="block text-sm">Campaign<select value={campaign} onChange={(e) => setCampaign(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2"><option>CAM-2405-001</option><option>CAM-2405-002</option></select></label>
        <label className="block text-sm">Invite Count<input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} className="mt-1 w-full rounded-md border px-3 py-2" /></label>
        <div className="flex flex-wrap gap-2"><button className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white" onClick={() => setMessage(`Sent ${count} invites for ${campaign}.`)}>Send Invites</button><button className="rounded-md border px-3 py-2 text-sm" onClick={() => setMessage('Invite draft saved.')}>Save Draft</button><Link href="/admin/invites" className="rounded-md border px-3 py-2 text-sm">Back to Invites</Link></div>
      </div>
    </AppShell>
  );
}
