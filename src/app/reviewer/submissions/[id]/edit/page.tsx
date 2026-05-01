'use client';
import Link from 'next/link';
import { use, useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { ActionToast, Breadcrumbs } from '@/components/admin-actions';

export default function SubmissionEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [message, setMessage] = useState('');
  return <AppShell role="reviewer" title="Edit Submission"><Breadcrumbs items={[{label:'Submissions',href:'/reviewer/submissions'},{label:id,href:`/reviewer/submissions/${id}`},{label:'Edit'}]} /><ActionToast message={message} /><div className="rounded-xl border bg-white p-5 shadow-sm space-y-4"><textarea className="w-full rounded-md border px-3 py-2" rows={4} defaultValue="Updated feedback based on comments..."/><label className="block text-sm">Replace Uploads (Mock)<input type="text" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="new-image.jpg"/></label><div className="flex gap-2"><button onClick={()=>setMessage('Submission resubmitted successfully.')} className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white">Resubmit</button><Link href={`/reviewer/submissions/${id}`} className="rounded-md border px-3 py-2 text-sm">Back</Link></div></div></AppShell>;
}
