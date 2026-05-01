'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { SectionCard, StatusPill } from '@/components/admin-ui';
import { adminClaims } from '@/lib/admin-data';
import { ActionToast, Breadcrumbs } from '@/components/admin-actions';

export default function AdminClaimsPage() {
  const [status, setStatus] = useState('All');
  const [message, setMessage] = useState('');
  const tabs = ['All', 'Submitted', 'Under Review', 'Approved', 'Rejected'];
  const rows = useMemo(() => adminClaims.filter((c) => status === 'All' || c.status === status), [status]);

  return (
    <AppShell role="admin" title="Claims">
      <Breadcrumbs items={[{ label: 'Claims' }]} />
      <ActionToast message={message} />
      <SectionCard title="Review and manage claims">
        <div className="mb-4 flex flex-wrap gap-2">{tabs.map((t) => <button key={t} onClick={() => setStatus(t)} className={`rounded-md border px-3 py-1 text-sm ${status === t ? 'bg-violet-600 text-white' : ''}`}>{t}</button>)}</div>
        <div className="mb-4 flex gap-2"><input placeholder="Search by reviewer, order ID" className="w-full rounded-md border px-3 py-2 text-sm" /><button onClick={() => setMessage('Filters opened (mock).')} className="rounded-md border px-3 py-2 text-sm">Filters</button><button onClick={() => setMessage('Claims export started (mock).')} className="rounded-md border px-3 py-2 text-sm">Export</button></div>
        <table className="w-full text-left text-sm"><thead className="text-slate-500"><tr><th>Claim ID</th><th>Reviewer</th><th>Campaign</th><th>Order ID</th><th>Status</th><th>Reimbursement</th><th></th></tr></thead><tbody>{rows.map((r) => <tr key={r.id} className="border-t"><td className="py-3">{r.id}</td><td>{r.reviewer}</td><td>{r.campaign}</td><td>{r.orderId}</td><td><StatusPill value={r.status} /></td><td>{r.reimbursement}</td><td><Link className="text-violet-600" href={`/admin/claims/${r.id}`}>View</Link></td></tr>)}</tbody></table>
      </SectionCard>
    </AppShell>
  );
}
