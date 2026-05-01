'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { SectionCard, StatusPill } from '@/components/admin-ui';
import { adminReviewers } from '@/lib/admin-data';
import { ActionToast, Breadcrumbs } from '@/components/admin-actions';

export default function AdminReviewersPage() {
  const [status, setStatus] = useState('All');
  const [message, setMessage] = useState('');
  const tabs = ['All', 'Active', 'Invited', 'Blocked'];
  const rows = useMemo(() => adminReviewers.filter((r) => status === 'All' || r.status === status), [status]);

  return (
    <AppShell role="admin" title="Reviewers">
      <Breadcrumbs items={[{ label: 'Reviewers' }]} />
      <ActionToast message={message} />
      <SectionCard title="Manage reviewer profiles">
        <div className="mb-4 flex flex-wrap gap-2">{tabs.map((t) => <button key={t} onClick={() => setStatus(t)} className={`rounded-md border px-3 py-1 text-sm ${status === t ? 'bg-violet-600 text-white' : ''}`}>{t}</button>)}</div>
        <div className="mb-4 flex gap-2"><input placeholder="Search reviewer" className="w-full rounded-md border px-3 py-2 text-sm" /><button onClick={() => setMessage('Reviewer export started (mock).')} className="rounded-md border px-3 py-2 text-sm">Export</button><Link href="/admin/reviewers/new" className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white">Add Reviewer</Link></div>
        <table className="w-full text-left text-sm"><thead className="text-slate-500"><tr><th>Name</th><th>Categories</th><th>Reliability</th><th>Location</th><th>Status</th><th></th></tr></thead><tbody>{rows.map((r) => <tr key={r.id} className="border-t"><td className="py-3"><p className="font-medium">{r.name}</p><p className="text-xs text-slate-500">{r.id}</p></td><td>{r.categories}</td><td>{r.reliability}</td><td>{r.location}</td><td><StatusPill value={r.status} /></td><td><Link className="text-violet-600" href={`/admin/reviewers/${r.id}`}>Open</Link></td></tr>)}</tbody></table>
      </SectionCard>
    </AppShell>
  );
}
