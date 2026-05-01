import { AppShell } from '@/components/app-shell';
import { PlaceholderPage } from '@/components/placeholder-page';

export default async function AdminPlaceholder({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = '/' + slug.join('/');
  return (
    <AppShell role="admin" title={`Admin ${slug[slug.length - 1]}`}>
      <PlaceholderPage title={`Admin Page: ${path}`} description="Placeholder route to keep navigation clickable." />
    </AppShell>
  );
}
