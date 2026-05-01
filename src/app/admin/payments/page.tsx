'use client';

import { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs, ActionToast } from '@/components/admin-actions';

const payouts = [
  { id: 'PAY-8001', reviewer: 'Sarah Johnson', amount: '$25.00', status: 'Pending' },
  { id: 'PAY-8002', reviewer: 'Pam Beesly', amount: '$28.00', status: 'Processing' },
];

export default function PaymentsPage() {
  const [message, setMessage] = useState('');
  return (
    <AppShell role="admin" title="Payments">
      <Breadcrumbs items={[{ label: 'Payments' }]} />
      <ActionToast message={message} />
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <table className="w-full text-left text-sm"><thead className="text-slate-500"><tr><th>ID</th><th>Reviewer</th><th>Amount</th><th>Status</th><th>Actions</th></tr></thead><tbody>{payouts.map((p) => <tr key={p.id} className="border-t"><td className="py-3">{p.id}</td><td>{p.reviewer}</td><td>{p.amount}</td><td>{p.status}</td><td className="space-x-2"><button onClick={() => setMessage(`${p.id} marked processing.`)} className="text-amber-600">Process</button><button onClick={() => setMessage(`${p.id} marked paid.`)} className="text-emerald-600">Mark Paid</button></td></tr>)}</tbody></table>
      </div>
    </AppShell>
  );
}
