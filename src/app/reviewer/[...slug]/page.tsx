import { AppShell } from '@/components/app-shell';
import { PlaceholderPage } from '@/components/placeholder-page';

export default async function ReviewerPlaceholder({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = '/' + slug.join('/');
  return (
    <AppShell role="reviewer" title={`Reviewer ${slug[slug.length - 1]}`}>
      <PlaceholderPage title={`Reviewer Page: ${path}`} description="Placeholder route to keep navigation clickable." />
    </AppShell>
  );
}
