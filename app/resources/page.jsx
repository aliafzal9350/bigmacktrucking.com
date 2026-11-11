import Link from 'next/link';
import EditorialPage, { editorialMetadata } from '@/components/EditorialPage';
import { RESOURCES } from '@/lib/resources';
export const metadata = editorialMetadata('Freight Planning Guides', 'Box truck freight planning guides from Big Mack Trucking: liftgate site checklists, multi-stop delivery planning and dedicated truck vs. LTL comparisons.', '/resources');
export default function Resources() {
  return <EditorialPage title="Freight planning guides" description={metadata.description} path="/resources">{RESOURCES.map(r => <section className="lp-section" key={r.slug}><h2><Link href={`/resources/${r.slug}`}>{r.title}</Link></h2><p>{r.description}</p><Link href={`/resources/${r.slug}`}>Read guide →</Link></section>)}</EditorialPage>;
}
