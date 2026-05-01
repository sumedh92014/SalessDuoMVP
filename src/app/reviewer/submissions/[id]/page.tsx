import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs } from '@/components/admin-actions';

export default async function SubmissionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <AppShell role="reviewer" title="Submission Detail"><Breadcrumbs items={[{label:'Submissions',href:'/reviewer/submissions'},{label:id}]} /><div className="rounded-xl border bg-white p-5 shadow-sm space-y-3"><p className="text-sm text-slate-600">Status: Returned for Resubmission (mock)</p><div className="flex gap-2"><Link href={`/reviewer/submissions/${id}/edit`} className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white">Resubmit</Link><Link href="/reviewer/submissions" className="rounded-md border px-3 py-2 text-sm">Back</Link></div></div></AppShell>;
}
