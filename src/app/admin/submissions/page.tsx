'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs, ActionToast } from '@/components/admin-actions';

const rows = [
  { id: 'SUB-1001', reviewer: 'Sarah Johnson', campaign: 'GlowRevive Face Cream', status: 'Submitted' },
  { id: 'SUB-1002', reviewer: 'Pam Beesly', campaign: 'ChefMaster Non-Stick Pan', status: 'Returned for Resubmission' },
  { id: 'SUB-1003', reviewer: 'Jim Halpert', campaign: 'PawCare Omega Drops', status: 'Approved' },
];

export default function SubmissionsPage() {
  const [message, setMessage] = useState('');
  return (
    <AppShell role="admin" title="Submissions">
      <Breadcrumbs items={[{ label: 'Submissions' }]} />
      <ActionToast message={message} />
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <table className="w-full text-left text-sm"><thead className="text-slate-500"><tr><th>ID</th><th>Reviewer</th><th>Campaign</th><th>Status</th><th>Actions</th></tr></thead><tbody>{rows.map((r) => <tr className="border-t" key={r.id}><td className="py-3">{r.id}</td><td>{r.reviewer}</td><td>{r.campaign}</td><td>{r.status}</td><td className="space-x-2"><button className="text-emerald-600" onClick={() => setMessage(`${r.id} approved.`)}>Approve</button><button className="text-amber-600" onClick={() => setMessage(`${r.id} returned for resubmission.`)}>Return</button><Link className="text-violet-600" href={`/admin/submissions/${r.id}`}>View</Link></td></tr>)}</tbody></table>
      </div>
    </AppShell>
  );
}
