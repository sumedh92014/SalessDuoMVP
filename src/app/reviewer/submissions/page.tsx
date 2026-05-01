import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs } from '@/components/admin-actions';
import { reviewerSubmissions } from '@/lib/reviewer-data';

export default function ReviewerSubmissionsPage() {
  return <AppShell role="reviewer" title="My Submissions"><Breadcrumbs items={[{label:'Submissions'}]} /><div className="rounded-xl border bg-white p-5 shadow-sm space-y-4"><Link href="/reviewer/submissions/new" className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white">New Submission</Link><table className="w-full text-left text-sm"><thead className="text-slate-500"><tr><th>ID</th><th>Campaign</th><th>Status</th><th></th></tr></thead><tbody>{reviewerSubmissions.map((s)=><tr key={s.id} className="border-t"><td className="py-3">{s.id}</td><td>{s.campaign}</td><td>{s.status}</td><td><Link href={`/reviewer/submissions/${s.id}`} className="text-violet-600">Open</Link></td></tr>)}</tbody></table></div></AppShell>;
}
