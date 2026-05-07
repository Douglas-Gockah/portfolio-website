import Link from 'next/link';
import type { Project } from '@/types/notion';

interface FeaturedProjectProps {
  project?: Project;
}

const DEFAULT_PROJECT: Project = {
  id: '',
  title: 'Enterprise Design System',
  slug: 'enterprise-platform',
  description: 'Confidential Client · Enterprise Platform',
  tags: [],
  status: '',
  company: 'Confidential Client',
  date: '',
  coverImage: '',
  featured: true,
  nda: true,
  order: 0,
};

export function FeaturedProject({ project = DEFAULT_PROJECT }: FeaturedProjectProps = {}) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-t1">Featured</h2>
        <Link href="/work" className="text-xs text-t3 hover:text-t2">
          View all
        </Link>
      </div>
      <Link
        href={`/work/${project.slug || 'enterprise-platform'}`}
        className="block border border-border rounded-card-lg overflow-hidden transition-transform hover:-translate-y-0.5"
      >
        {/* Project image area */}
        <div className="w-full aspect-[16/10] bg-bg2 relative">
          {/* NDA Badge */}
          {project.nda && (
            <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 0 0 1 10 0v4" />
              </svg>
              NDA
            </span>
          )}
        </div>
        {/* Project info */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-t1">{project.title}</h3>
          <p className="text-xs text-t2 mt-1">{project.company} · {project.description}</p>
        </div>
      </Link>
    </section>
  );
}
