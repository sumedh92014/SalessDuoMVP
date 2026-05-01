'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { ActionToast, Breadcrumbs } from '@/components/admin-actions';

export default function NewSubmissionPage() {
  const [message, setMessage] = useState('');
  return <AppShell role="reviewer" title="New Submission"><Breadcrumbs items={[{label:'Submissions',href:'/reviewer/submissions'},{label:'New'}]} /><ActionToast message={message} /><div className="rounded-xl border bg-white p-5 shadow-sm space-y-4"><textarea className="w-full rounded-md border px-3 py-2" rows={4} placeholder="Write feedback..." /><label className="block text-sm">Upload Images (Mock)<input type="text" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="image1.jpg, image2.jpg"/></label><label className="block text-sm">Upload Video (Mock)<input type="text" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="video.mp4"/></label><div className="flex gap-2 flex-wrap"><button className="rounded-md border px-3 py-2 text-sm" onClick={()=>setMessage('Submission draft saved.')}>Save Draft</button><button className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white" onClick={()=>setMessage('Submission sent for review.')}>Submit</button><Link href="/reviewer/submissions/SUB-1001" className="rounded-md border px-3 py-2 text-sm">Open Submitted</Link></div></div></AppShell>;
}
