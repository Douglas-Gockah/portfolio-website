'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Project } from '@/types/notion';

const filters = ['All', 'Enterprise Platform', 'Payment Systems', 'Brand Identity', 'Design Systems', 'Mobile'];

interface WorkPageClientProps {
  projects: Project[];
}

export function WorkPageClient({ projects }: WorkPageClientProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-[22px] font-bold heading-tight">Work</h1>
        <p className="text-sm text-t2 mt-1">
          Selected projects and explorations
        </p>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 border rounded-pill text-xs transition-colors ${
              activeFilter === filter
                ? 'bg-accent text-bg border-accent'
                : 'text-t2 border-border hover:border-border2'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 gap-4">
        {filtered.map((project) => (
          <Link
            key={project.id}
            href={`/work/${project.slug}`}
            className="border border-border rounded-card-lg overflow-hidden transition-transform hover:-translate-y-0.5"
          >
            <div className="w-full aspect-[16/10] bg-bg2 relative overflow-hidden">
              {project.coverImage && (
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
              {project.nda && (
                <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-pill border border-blue-100">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  NDA
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-t1">
                {project.title}
              </h3>
              <p className="text-xs text-t2 mt-1">
                {project.company} · {project.date}
              </p>
              <p className="text-xs text-t3 mt-2 line-clamp-2">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-t3 text-center py-8">
            No projects found for this filter.
          </p>
        )}
      </div>
    </div>
  );
}
