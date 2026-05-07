import Link from 'next/link';
import type { Project } from '@/types/notion';

interface ExplorationsGridProps {
  projects?: Project[];
}

const DEFAULT_PROJECTS: Project[] = [
  { id: '1', title: 'Payment System Redesign', slug: 'payment-system', description: '', tags: [], status: '', company: 'Confidential Client', date: '', coverImage: '', featured: false, nda: false, order: 1 },
  { id: '2', title: 'Brand Identity System', slug: 'brand-identity', description: '', tags: [], status: '', company: 'Confidential Client', date: '', coverImage: '', featured: false, nda: false, order: 2 },
  { id: '3', title: 'Mobile App Design', slug: 'mobile-app', description: '', tags: [], status: '', company: 'Confidential Client', date: '', coverImage: '', featured: false, nda: false, order: 3 },
];

export function ExplorationsGrid({ projects = DEFAULT_PROJECTS }: ExplorationsGridProps = {}) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-t1">Explorations</h2>
        <Link href="/work" className="text-xs text-t3 hover:text-t2">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/work/${project.slug}`}
            className="block border border-border rounded-card overflow-hidden transition-transform hover:-translate-y-0.5"
          >
            <div className="aspect-[4/3] bg-bg2" />
            <div className="p-3">
              <h3 className="text-xs font-semibold text-t1 truncate">{project.title}</h3>
              <p className="text-xs text-t3 mt-0.5">{project.company}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
