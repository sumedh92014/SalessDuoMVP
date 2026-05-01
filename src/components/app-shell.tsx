import Link from 'next/link';
import { roleNav, type Role } from '@/lib/navigation';

type AppShellProps = {
  role: Role;
  title: string;
  children: React.ReactNode;
};

export function AppShell({ role, title, children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        <aside className="w-64 bg-slate-900 p-4 text-slate-100">
          <Link href="/" className="mb-6 block text-xl font-semibold">
            SalesDuo MVP
          </Link>
          <nav className="space-y-2">
            {roleNav[role].map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm hover:bg-slate-700">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1">
          <header className="border-b bg-white px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold capitalize">{title}</h1>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-wide">{role}</span>
                <Link href="/" className="rounded-md border px-3 py-1 text-sm hover:bg-slate-100">Switch Role</Link>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500">Prototype mode: backend, auth, payments, and uploads are mocked for demo flow.</p>
          </header>
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
