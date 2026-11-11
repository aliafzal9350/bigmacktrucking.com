import Image from 'next/image';
import Link from 'next/link';
import EditorialPage, { editorialMetadata } from '@/components/EditorialPage';
import truck from '@/public/image/fleet/freightliner-m2-box-truck-purple.webp';
import side from '@/public/image/fleet/box-truck-side-door.webp';
import door from '@/public/image/fleet/cab-door-usdot-mc.webp';
import street from '@/public/image/fleet/freightliner-m2-street.webp';

const title = 'Our Fleet: Freightliner M2 Box Truck';
const description = 'Real photos of the Big Mack Trucking Freightliner M2 straight box truck, with the USDOT and MC numbers on the cab door. See the equipment before you book.';
export const metadata = editorialMetadata(title, description, '/fleet');

const photos = [
  [truck, 'Purple Freightliner M2 box truck operated by Big Mack Trucking, parked on a Queens street', 'Freightliner M2 cab with a full-height straight box.'],
  [side, 'Side view of the Big Mack box truck showing the curbside access door and fuel tank', 'Curbside side door for reaching freight without opening the rear.'],
  [door, 'Big Mack Trucking cab door lettered with USDOT 3843409 and MC 1398475', 'Authority numbers on the door match FMCSA records and this site.'],
  [street, 'Big Mack Freightliner M2 box truck front three-quarter view', 'Daily city operation in tight New York streets.'],
];

export default function FleetPage() {
  return <EditorialPage title={title} description={description} path="/fleet">
    <section className="lp-section">
      <h2>The truck that runs your load</h2>
      <p>These are unedited photos of our own truck, not stock images. The cab is a Freightliner M2, one of the most common medium-duty chassis under a straight box truck in the US. The box has a curbside access door in addition to the rear door.</p>
      <p>Check the USDOT and MC numbers on the door against the <a href="https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&amp;query_type=queryCarrierSnapshot&amp;query_param=USDOT&amp;query_string=3843409" rel="noopener">FMCSA company snapshot</a> before you tender freight to any carrier.</p>
    </section>
    <section className="lp-section">
      <h2>Photos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
        {photos.map(([src, alt, caption]) => <figure key={alt} style={{ margin: 0 }}>
          <Image src={src} alt={alt} sizes="(max-width: 640px) 100vw, 50vw" style={{ width: '100%', height: 'auto', borderRadius: 12 }} />
          <figcaption>{caption}</figcaption>
        </figure>)}
      </div>
    </section>
    <section className="lp-section">
      <h2>Before you book</h2>
      <p>Dispatch confirms the usable floor dimensions, payload and liftgate capacity for the assigned truck on every quote. Read the <Link href="/resources">freight guides</Link> to prepare pallet counts and weights.</p>
    </section>
  </EditorialPage>;
}
