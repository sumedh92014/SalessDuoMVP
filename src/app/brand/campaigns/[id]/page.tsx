'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { ActionToast, Breadcrumbs } from '@/components/admin-actions';

export default function BrandCampaignDetail({ params }: { params: { id: string } }) {
  const [status, setStatus] = useState('Live');
  const [message, setMessage] = useState('');
  return <AppShell role="brand" title="Campaign Detail"><Breadcrumbs items={[{label:'Campaigns',href:'/brand/campaigns'},{label:params.id}]} /><ActionToast message={message} /><div className="rounded-xl border bg-white p-5 shadow-sm space-y-4"><p className="text-sm text-slate-600">Status: <strong>{status}</strong></p><div className="flex flex-wrap gap-2"><button onClick={()=>{setStatus('Paused');setMessage('Campaign paused.');}} className="rounded-md border px-3 py-2 text-sm">Pause</button><button onClick={()=>{setStatus('Live');setMessage('Campaign resumed.');}} className="rounded-md border px-3 py-2 text-sm">Resume</button><Link href={`/brand/campaigns/${params.id}/claims`} className="rounded-md border px-3 py-2 text-sm">View Claims</Link><Link href={`/brand/campaigns/${params.id}/submissions`} className="rounded-md border px-3 py-2 text-sm">View Submissions</Link><Link href={`/brand/campaigns/${params.id}/report`} className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white">View Report</Link></div></div></AppShell>;
}
