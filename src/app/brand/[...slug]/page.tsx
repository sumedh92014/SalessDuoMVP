import { AppShell } from '@/components/app-shell';
import { PlaceholderPage } from '@/components/placeholder-page';

export default async function BrandPlaceholder({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = '/' + slug.join('/');
  return (
    <AppShell role="brand" title={`Brand ${slug[slug.length - 1]}`}>
      <PlaceholderPage title={`Brand Page: ${path}`} description="Placeholder route to keep navigation clickable." />
    </AppShell>
  );
}
