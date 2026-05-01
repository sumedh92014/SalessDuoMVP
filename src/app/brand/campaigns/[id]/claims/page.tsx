'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { ActionToast, Breadcrumbs } from '@/components/admin-actions';
import { brandClaims } from '@/lib/brand-data';

export default function CampaignClaims({ params }: { params: { id: string } }) {
  const [message, setMessage] = useState('');
  return <AppShell role="brand" title="Campaign Claims"><Breadcrumbs items={[{label:'Campaigns',href:'/brand/campaigns'},{label:params.id,href:`/brand/campaigns/${params.id}`},{label:'Claims'}]} /><ActionToast message={message} /><div className="rounded-xl border bg-white p-5 shadow-sm"><table className="w-full text-left text-sm"><thead className="text-slate-500"><tr><th>ID</th><th>Reviewer</th><th>Status</th><th>Order</th><th>Actions</th></tr></thead><tbody>{brandClaims.map((c)=><tr key={c.id} className="border-t"><td className="py-3">{c.id}</td><td>{c.reviewer}</td><td>{c.status}</td><td>{c.orderId}</td><td className="space-x-2"><button className="text-emerald-600" onClick={()=>setMessage(`${c.id} approved.`)}>Approve</button><button className="text-rose-600" onClick={()=>setMessage(`${c.id} rejected.`)}>Reject</button></td></tr>)}</tbody></table><div className="mt-4"><Link href={`/brand/campaigns/${params.id}`} className="rounded-md border px-3 py-2 text-sm">Back to Campaign</Link></div></div></AppShell>;
}
