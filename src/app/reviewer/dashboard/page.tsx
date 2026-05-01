import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs } from '@/components/admin-actions';
import { SectionCard, StatCard } from '@/components/admin-ui';
import { reviewerCampaigns, reviewerStats } from '@/lib/reviewer-data';

export default function ReviewerDashboard() {
  return (
    <AppShell role="reviewer" title="Reviewer Dashboard">
      <Breadcrumbs items={[{ label: 'Dashboard' }]} />
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{reviewerStats.map((s) => <StatCard key={s.label} label={s.label} value={s.value} tone={s.tone} />)}</div>
        <SectionCard title="Available Campaigns" href="/reviewer/campaigns">
          <div className="space-y-2">{reviewerCampaigns.map((c) => <div className="flex items-center justify-between rounded-md border p-3" key={c.id}><div><p className="font-medium">{c.product}</p><p className="text-xs text-slate-500">{c.reimbursement} · {c.status}</p></div><Link href={`/reviewer/campaigns/${c.id}`} className="text-violet-600">Open</Link></div>)}</div>
        </SectionCard>
      </div>
    </AppShell>
  );
}
