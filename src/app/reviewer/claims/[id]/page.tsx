import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs } from '@/components/admin-actions';

export default function ReviewerClaimDetail({ params }: { params: { id: string } }) {
  return <AppShell role="reviewer" title="Claim Detail"><Breadcrumbs items={[{label:'Claims',href:'/reviewer/claims'},{label:params.id}]} /><div className="rounded-xl border bg-white p-5 shadow-sm space-y-3"><p className="text-sm text-slate-600">Track your claim progress and reimbursement lifecycle.</p><div className="flex gap-2"><Link href="/reviewer/submissions/new" className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white">Submit Task</Link><Link href="/reviewer/reimbursements" className="rounded-md border px-3 py-2 text-sm">View Reimbursements</Link></div></div></AppShell>;
}
