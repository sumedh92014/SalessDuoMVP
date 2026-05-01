'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { ActionToast, Breadcrumbs } from '@/components/admin-actions';

export default function NewCampaignPage() {
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({ product: 'GlowRevive Serum', objective: 'Feedback + Photos', reviewers: 20, reimbursement: 25 });
  return <AppShell role="brand" title="Create Campaign"><Breadcrumbs items={[{label:'Campaigns',href:'/brand/campaigns'},{label:'New'}]} /><ActionToast message={message} /><div className="rounded-xl border bg-white p-5 shadow-sm space-y-4"><label className="block text-sm">Product Name<input value={form.product} onChange={(e)=>setForm({...form,product:e.target.value})} className="mt-1 w-full rounded-md border px-3 py-2"/></label><label className="block text-sm">Objective<select value={form.objective} onChange={(e)=>setForm({...form,objective:e.target.value})} className="mt-1 w-full rounded-md border px-3 py-2"><option>Feedback</option><option>Feedback + Photos</option><option>Feedback + Video + Photos</option></select></label><label className="block text-sm">Reviewers<input type="number" value={form.reviewers} onChange={(e)=>setForm({...form,reviewers:Number(e.target.value)})} className="mt-1 w-full rounded-md border px-3 py-2"/></label><div className="flex flex-wrap gap-2"><button onClick={()=>setMessage('Draft saved locally.')} className="rounded-md border px-3 py-2 text-sm">Save Draft</button><Link href="/brand/campaigns/new/preview" className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white">Preview Campaign</Link><Link href="/brand/campaigns" className="rounded-md border px-3 py-2 text-sm">Back</Link></div></div></AppShell>;
}
