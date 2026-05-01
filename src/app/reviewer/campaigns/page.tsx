'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs } from '@/components/admin-actions';
import { SectionCard, StatusPill } from '@/components/admin-ui';
import { reviewerCampaigns } from '@/lib/reviewer-data';

export default function ReviewerCampaignsPage() {
  const [tab, setTab] = useState('All');
  const tabs = ['All', 'Invited', 'Live'];
  const rows = useMemo(() => reviewerCampaigns.filter((c) => tab === 'All' || c.status === tab), [tab]);
  return <AppShell role="reviewer" title="Campaigns"><Breadcrumbs items={[{label:'Campaigns'}]} /><SectionCard title="Discover campaigns"><div className="mb-4 flex gap-2">{tabs.map((t)=><button key={t} onClick={()=>setTab(t)} className={`rounded-md border px-3 py-1 text-sm ${tab===t?'bg-violet-600 text-white':''}`}>{t}</button>)}</div><table className="w-full text-left text-sm"><thead className="text-slate-500"><tr><th>Campaign</th><th>Reimbursement</th><th>Status</th><th></th></tr></thead><tbody>{rows.map((r)=><tr key={r.id} className="border-t"><td className="py-3">{r.product}</td><td>{r.reimbursement}</td><td><StatusPill value={r.status} /></td><td><Link href={`/reviewer/campaigns/${r.id}`} className="text-violet-600">View</Link></td></tr>)}</tbody></table></SectionCard></AppShell>;
}
