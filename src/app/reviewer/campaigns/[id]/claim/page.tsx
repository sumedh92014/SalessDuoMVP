'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { ActionToast, Breadcrumbs } from '@/components/admin-actions';

export default function ClaimSlotPage({ params }: { params: { id: string } }) {
  const [proof, setProof] = useState('');
  const [message, setMessage] = useState('');
  return <AppShell role="reviewer" title="Claim Campaign Slot"><Breadcrumbs items={[{label:'Campaigns',href:'/reviewer/campaigns'},{label:params.id,href:`/reviewer/campaigns/${params.id}`},{label:'Claim'}]} /><ActionToast message={message} /><div className="rounded-xl border bg-white p-5 shadow-sm space-y-4"><button className="rounded-md border px-3 py-2 text-sm" onClick={()=>setMessage('Slot reserved for 1 hour (mock).')}>Reserve Slot</button><label className="block text-sm">Order ID<input value={proof} onChange={(e)=>setProof(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Enter order ID"/></label><label className="block text-sm">Invoice Upload (Mock)<input type="text" placeholder="invoice.png" className="mt-1 w-full rounded-md border px-3 py-2"/></label><div className="flex gap-2 flex-wrap"><button className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white" onClick={()=>setMessage('Proof submitted (mock). Claim created.')}>Submit Proof</button><Link href="/reviewer/claims/CLM-3121" className="rounded-md border px-3 py-2 text-sm">Go to Claim</Link></div></div></AppShell>;
}
