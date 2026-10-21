import type { Metadata } from 'next';
import { PublicationsPage } from '../../components/brand/Publications';

export const metadata: Metadata = {
  title: 'Writing | Amin Chouaibi',
  description: 'Technical articles and reflections by Amin Chouaibi on software, technology, teams and people.',
  alternates: { canonical: 'https://aminch18.github.io/portfolio/publications/', languages: { en:'https://aminch18.github.io/portfolio/publications/', es:'https://aminch18.github.io/portfolio/publications/', ca:'https://aminch18.github.io/portfolio/publications/' } },
  openGraph: { title:'Writing | Amin Chouaibi', description:'Technical writing and reflections on technology, teams and people.', url:'https://aminch18.github.io/portfolio/publications/' },
};

export default function Page() { return <PublicationsPage/>; }
