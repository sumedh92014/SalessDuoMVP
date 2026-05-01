'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { ActionToast, Breadcrumbs } from '@/components/admin-actions';

export default function CampaignPayment({ params }: { params: { id: string } }) {
  const [message, setMessage] = useState('');
  return <AppShell role="brand" title="Mock Payment"><Breadcrumbs items={[{label:'Campaigns',href:'/brand/campaigns'},{label:params.id,href:`/brand/campaigns/${params.id}`},{label:'Payment'}]} /><ActionToast message={message} /><div className="rounded-xl border bg-white p-5 shadow-sm space-y-4"><p className="text-sm text-slate-600">Payment is mock-only and optional for MVP preview.</p><div className="flex gap-2 flex-wrap"><button onClick={()=>setMessage('Mock payment successful. Campaign marked Paid.')} className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white">Pay Now</button><Link href={`/brand/campaigns/${params.id}`} className="rounded-md border px-3 py-2 text-sm">Skip & Continue</Link><Link href="/brand/campaigns" className="rounded-md border px-3 py-2 text-sm">Back to Campaigns</Link></div></div></AppShell>;
}
