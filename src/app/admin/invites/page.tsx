'use client';

import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs } from '@/components/admin-actions';

export default function InvitesPage() {
  return (
    <AppShell role="admin" title="Invites">
      <Breadcrumbs items={[{ label: 'Invites' }]} />
      <div className="rounded-xl border bg-white p-5 shadow-sm space-y-4">
        <p className="text-sm text-slate-600">Track invite batches and reviewer outreach.</p>
        <div className="flex gap-2"><Link href="/admin/invites/new" className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white">Create Invite Batch</Link><Link href="/admin/reviewers" className="rounded-md border px-3 py-2 text-sm">Browse Reviewers</Link></div>
      </div>
    </AppShell>
  );
}
