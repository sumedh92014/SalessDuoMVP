import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs } from '@/components/admin-actions';
import { brandCampaigns } from '@/lib/brand-data';

export default function BrandReportsPage() {
  return <AppShell role="brand" title="Reports"><Breadcrumbs items={[{label:'Reports'}]} /><div className="rounded-xl border bg-white p-5 shadow-sm"><p className="mb-4 text-sm text-slate-600">Campaign performance and spend summaries.</p><ul className="space-y-2">{brandCampaigns.map((c)=><li key={c.id} className="flex items-center justify-between rounded-md border p-3"><span>{c.product}</span><Link href={`/brand/campaigns/${c.id}/report`} className="text-violet-600">View Report</Link></li>)}</ul></div></AppShell>;
}
