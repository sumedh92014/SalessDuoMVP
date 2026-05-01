import Link from 'next/link';

const roles = [
  { label: 'Admin', href: '/admin/dashboard' },
  { label: 'Brand', href: '/brand/dashboard' },
  { label: 'Reviewer', href: '/reviewer/dashboard' },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-2xl rounded-xl border bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold">SalesDuo MVP</h1>
        <p className="mt-2 text-sm text-slate-600">Select a role to enter the clickable prototype.</p>
        <p className="mt-1 text-xs text-slate-500">Prototype mode: backend/auth/payments/uploads are mocked.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {roles.map((role) => (
            <Link key={role.href} href={role.href} className="rounded-md border px-4 py-3 text-center font-medium hover:bg-slate-100">
              {role.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
