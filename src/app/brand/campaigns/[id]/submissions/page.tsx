'use client';
import { use, useState } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { ActionToast, Breadcrumbs } from '@/components/admin-actions';
import { brandSubmissions } from '@/lib/brand-data';

export default function CampaignSubmissions({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [message, setMessage] = useState('');
  return <AppShell role="brand" title="Campaign Submissions"><Breadcrumbs items={[{label:'Campaigns',href:'/brand/campaigns'},{label:id,href:`/brand/campaigns/${id}`},{label:'Submissions'}]} /><ActionToast message={message} /><div className="rounded-xl border bg-white p-5 shadow-sm"><table className="w-full text-left text-sm"><thead className="text-slate-500"><tr><th>ID</th><th>Reviewer</th><th>Status</th><th>Assets</th><th>Actions</th></tr></thead><tbody>{brandSubmissions.map((s)=><tr key={s.id} className="border-t"><td className="py-3">{s.id}</td><td>{s.reviewer}</td><td>{s.status}</td><td>{s.assets}</td><td className="space-x-2"><button className="text-emerald-600" onClick={()=>setMessage(`${s.id} approved.`)}>Approve</button><button className="text-amber-600" onClick={()=>setMessage(`${s.id} returned for resubmission.`)}>Return</button></td></tr>)}</tbody></table><div className="mt-4"><Link href={`/brand/campaigns/${id}`} className="rounded-md border px-3 py-2 text-sm">Back to Campaign</Link></div></div></AppShell>;
}
