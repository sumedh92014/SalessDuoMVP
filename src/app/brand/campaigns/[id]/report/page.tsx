'use client';
import Link from 'next/link';
import { use, useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs, ActionToast } from '@/components/admin-actions';

export default function CampaignReportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [message, setMessage] = useState('');
  return <AppShell role="brand" title="Campaign Report"><Breadcrumbs items={[{label:'Reports',href:'/brand/reports'},{label:id}]} /><ActionToast message={message} /><div className="rounded-xl border bg-white p-5 shadow-sm space-y-4"><p className="text-sm text-slate-600">Mock summary: claims approved, assets submitted, spend utilization.</p><div className="flex gap-2"><button onClick={() => setMessage('Report export prepared (mock).')} className="rounded-md border px-3 py-2 text-sm">Export Report (Mock)</button><Link href={`/brand/campaigns/${id}`} className="rounded-md border px-3 py-2 text-sm">Back to Campaign</Link></div></div></AppShell>;
}
