import { AppShell } from '@/components/app-shell';
import { Breadcrumbs } from '@/components/admin-actions';
import { reviewerClaims } from '@/lib/reviewer-data';

export default function ReimbursementsPage() {
  return <AppShell role="reviewer" title="Reimbursements"><Breadcrumbs items={[{label:'Reimbursements'}]} /><div className="rounded-xl border bg-white p-5 shadow-sm"><table className="w-full text-left text-sm"><thead className="text-slate-500"><tr><th>Claim</th><th>Status</th><th>Amount</th></tr></thead><tbody>{reviewerClaims.map((c)=><tr key={c.id} className="border-t"><td className="py-3">{c.id}</td><td>{c.status}</td><td>{c.reimbursement}</td></tr>)}</tbody></table></div></AppShell>;
}
