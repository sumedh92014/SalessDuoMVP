import Link from 'next/link';
import { AppShell } from '@/components/app-shell';
import { Breadcrumbs } from '@/components/admin-actions';
import { reviewerClaims } from '@/lib/reviewer-data';

export default function ReviewerClaimsPage() {
  return <AppShell role="reviewer" title="My Claims"><Breadcrumbs items={[{label:'Claims'}]} /><div className="rounded-xl border bg-white p-5 shadow-sm"><table className="w-full text-left text-sm"><thead className="text-slate-500"><tr><th>ID</th><th>Campaign</th><th>Status</th><th>Reimbursement</th><th></th></tr></thead><tbody>{reviewerClaims.map((c)=><tr key={c.id} className="border-t"><td className="py-3">{c.id}</td><td>{c.campaign}</td><td>{c.status}</td><td>{c.reimbursement}</td><td><Link href={`/reviewer/claims/${c.id}`} className="text-violet-600">View</Link></td></tr>)}</tbody></table></div></AppShell>;
}
