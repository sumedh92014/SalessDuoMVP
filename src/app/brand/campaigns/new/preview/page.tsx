import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs } from '@/components/admin-actions';

export default function CampaignPreview() {
  return <AppShell role="brand" title="Campaign Preview"><Breadcrumbs items={[{label:'Campaigns',href:'/brand/campaigns'},{label:'New',href:'/brand/campaigns/new'},{label:'Preview'}]} /><div className="rounded-xl border bg-white p-5 shadow-sm space-y-4"><p className="text-sm text-slate-600">Review campaign details and proceed with mock payment or skip for demo.</p><div className="flex gap-2 flex-wrap"><Link href="/brand/campaigns/CAM-2405-NEW/payment" className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white">Proceed to Payment</Link><Link href="/brand/campaigns/CAM-2405-NEW" className="rounded-md border px-3 py-2 text-sm">Skip Payment (Demo)</Link><Link href="/brand/campaigns/new" className="rounded-md border px-3 py-2 text-sm">Edit</Link></div></div></AppShell>;
}
