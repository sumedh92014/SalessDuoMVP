import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs } from '@/components/admin-actions';
import { SectionCard, StatCard } from '@/components/admin-ui';
import { brandCampaigns, brandStats } from '@/lib/brand-data';

export default function BrandDashboard() {
  return (
    <AppShell role="brand" title="Brand Dashboard">
      <Breadcrumbs items={[{ label: 'Dashboard' }]} />
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{brandStats.map((s) => <StatCard key={s.label} label={s.label} value={s.value} tone={s.tone} />)}</div>
        <SectionCard title="My Campaigns" href="/brand/campaigns">
          <div className="space-y-3">{brandCampaigns.map((c) => <div key={c.id} className="flex items-center justify-between rounded-lg border p-3"><div><p className="font-medium">{c.product}</p><p className="text-xs text-slate-500">{c.id} · {c.status}</p></div><Link href={`/brand/campaigns/${c.id}`} className="text-violet-600">Open</Link></div>)}</div>
          <div className="mt-4"><Link href="/brand/campaigns/new" className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white">Create Campaign</Link></div>
        </SectionCard>
      </div>
    </AppShell>
  );
}
