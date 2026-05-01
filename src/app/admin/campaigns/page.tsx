'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { SectionCard, StatusPill } from '@/components/admin-ui';
import { adminCampaigns } from '@/lib/admin-data';

export default function AdminCampaignsPage() {
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState('All');
  const tabs = ['All', 'Draft', 'Paid', 'Under Admin Review', 'Live', 'Paused'];

  const rows = useMemo(() => adminCampaigns.filter((c) => (tab === 'All' || c.status === tab) && `${c.product} ${c.brand}`.toLowerCase().includes(query.toLowerCase())), [query, tab]);

  return (
    <AppShell role="admin" title="Campaigns">
      <SectionCard title="Manage all campaigns">
        <div className="mb-4 flex flex-wrap gap-2">
          {tabs.map((t) => <button key={t} onClick={() => setTab(t)} className={`rounded-md border px-3 py-1 text-sm ${tab === t ? 'bg-violet-600 text-white' : 'bg-white'}`}>{t}</button>)}
        </div>
        <div className="mb-4 flex gap-2">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search campaign or brand" className="w-full rounded-md border px-3 py-2 text-sm" />
          <button onClick={() => setQuery('')} className="rounded-md border px-3 py-2 text-sm">Reset</button>
          <Link href="/admin/campaigns/new" className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white">Create Campaign</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-slate-500"><tr><th>Campaign</th><th>Brand</th><th>Status</th><th>Slots</th><th>Reimbursement</th><th>Created</th><th></th></tr></thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-t"><td className="py-3"><p className="font-medium">{row.product}</p><p className="text-xs text-slate-500">{row.id}</p></td><td>{row.brand}</td><td><StatusPill value={row.status} /></td><td>{row.slots}</td><td>{row.reimbursement}</td><td>{row.createdOn}</td><td><Link href={`/admin/campaigns/${row.id}`} className="text-violet-600">View Details</Link></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </AppShell>
  );
}
