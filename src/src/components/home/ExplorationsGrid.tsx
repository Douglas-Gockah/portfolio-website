import Link from 'next/link';
import type { Project } from '@/types/notion';

interface ExplorationsGridProps {
  projects?: Project[];
}

export function ExplorationsGrid({ projects = [] }: ExplorationsGridProps) {
  // Fall back to placeholders if no projects from Notion
  const items = projects.length > 0
    ? projects
    : [
        { id: '1', slug: 'payment-system', title: 'Payment System Redesign', company: 'Confidential Client', tags: ['Payment Systems'], coverImage: '' } as Project,
        { id: '2', slug: 'brand-identity', title: 'Brand Identity System', company: 'Social Enterprise', tags: ['Brand Identity'], coverImage: '' } as Project,
        { id: '3', slug: 'design-system', title: 'Component Library', company: 'Confidential Client', tags: ['Design Systems'], coverImage: '' } as Project,
        { id: '4', slug: 'mobile-app', title: 'Mobile App Experience', company: 'Confidential Client', tags: ['Mobile'], coverImage: '' } as Project,
      ];

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-t1">Explorations</h2>
        <Link href="/work" className="text-xs text-t3 hover:text-t2">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {items.slice(0, 4).map((project) => (
          <Link
            key={project.id || project.slug}
            href={`/work/${project.slug}`}
            className="border border-border rounded-card overflow-hidden transition-transform hover:-translate-y-0.5"
          >
            <div className="w-full aspect-[16/10] bg-bg2 overflow-hidden">
              {project.coverImage && (
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-3">
              <h3 className="text-xs font-medium text-t1 truncate">
                {project.title}
              </h3>
              <p className="text-[11px] text-t3 mt-0.5">{project.company}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
