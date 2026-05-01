'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs } from '@/components/admin-actions';
import { SectionCard, StatusPill } from '@/components/admin-ui';
import { brandCampaigns } from '@/lib/brand-data';

export default function BrandCampaignsPage() {
  const [tab, setTab] = useState('All');
  const tabs = ['All', 'Draft', 'Under Admin Review', 'Live'];
  const rows = useMemo(() => brandCampaigns.filter((c) => tab === 'All' || c.status === tab), [tab]);
  return <AppShell role="brand" title="Campaigns"><Breadcrumbs items={[{ label: 'Campaigns' }]} /><SectionCard title="Manage campaigns"><div className="mb-4 flex gap-2 flex-wrap">{tabs.map((t)=><button key={t} onClick={()=>setTab(t)} className={`rounded-md border px-3 py-1 text-sm ${tab===t?'bg-violet-600 text-white':''}`}>{t}</button>)}<Link href="/brand/campaigns/new" className="ml-auto rounded-md bg-violet-600 px-3 py-1 text-sm text-white">New Campaign</Link></div><table className="w-full text-left text-sm"><thead className="text-slate-500"><tr><th>Campaign</th><th>Status</th><th>Slots</th><th>Spend</th><th></th></tr></thead><tbody>{rows.map((r)=><tr key={r.id} className="border-t"><td className="py-3"><p className="font-medium">{r.product}</p><p className="text-xs text-slate-500">{r.id}</p></td><td><StatusPill value={r.status} /></td><td>{r.filled}/{r.reviewers}</td><td>{r.spend}</td><td><Link href={`/brand/campaigns/${r.id}`} className="text-violet-600">View</Link></td></tr>)}</tbody></table></SectionCard></AppShell>;
}
