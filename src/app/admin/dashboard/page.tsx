import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { SectionCard, StatCard, StatusPill } from '@/components/admin-ui';
import { adminCampaigns, adminClaims, adminStats } from '@/lib/admin-data';

export default function AdminDashboard() {
  return (
    <AppShell role="admin" title="Welcome back, Admin!">
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {adminStats.dashboard.map((item) => (
            <StatCard key={item.label} label={item.label} value={item.value} tone={item.tone} />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <SectionCard title="Recent Campaigns" href="/admin/campaigns">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-slate-500">
                    <tr>
                      <th className="pb-3">Campaign</th><th className="pb-3">Brand</th><th className="pb-3">Status</th><th className="pb-3">Slots</th><th className="pb-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminCampaigns.slice(0, 4).map((campaign) => (
                      <tr key={campaign.id} className="border-t">
                        <td className="py-3"><p className="font-medium">{campaign.product}</p><p className="text-xs text-slate-500">{campaign.id}</p></td>
                        <td>{campaign.brand}</td>
                        <td><StatusPill value={campaign.status} /></td>
                        <td>{campaign.slots}</td>
                        <td><Link className="text-violet-600" href={`/admin/campaigns/${campaign.id}`}>View</Link></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>
          </div>
          <SectionCard title="Recent Activity" href="/admin/claims">
            <ul className="space-y-4 text-sm">
              {adminClaims.map((claim) => (
                <li key={claim.id} className="rounded-lg border p-3">
                  <p className="font-medium">{claim.reviewer} · {claim.status}</p>
                  <p className="text-slate-600">{claim.campaign}</p>
                  <Link href={`/admin/claims/${claim.id}`} className="mt-1 inline-block text-violet-600">Open claim</Link>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>
    </AppShell>
  );
}
