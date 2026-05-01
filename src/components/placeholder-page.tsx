export function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-dashed bg-white p-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}
