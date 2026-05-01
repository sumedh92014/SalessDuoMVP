'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { ActionToast, Breadcrumbs } from '@/components/admin-actions';

export default function ReviewerCampaignDetail({ params }: { params: { id: string } }) {
  const [message, setMessage] = useState('');
  return <AppShell role="reviewer" title="Campaign Detail"><Breadcrumbs items={[{label:'Campaigns',href:'/reviewer/campaigns'},{label:params.id}]} /><ActionToast message={message} /><div className="rounded-xl border bg-white p-5 shadow-sm space-y-4"><p className="text-sm text-slate-600">Review requirements and decide whether to participate.</p><div className="flex gap-2 flex-wrap"><button onClick={()=>setMessage('Invite accepted. Proceed to claim slot.')} className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white">Accept Invite</button><button onClick={()=>setMessage('Invite declined (mock).')} className="rounded-md border px-3 py-2 text-sm">Decline Invite</button><Link href={`/reviewer/campaigns/${params.id}/claim`} className="rounded-md border px-3 py-2 text-sm">Claim Slot</Link><Link href="/reviewer/campaigns" className="rounded-md border px-3 py-2 text-sm">Back</Link></div></div></AppShell>;
}
