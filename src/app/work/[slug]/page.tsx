import Link from 'next/link';

interface CaseStudyPageProps {
  params: { slug: string };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  // TODO: Fetch from Notion via getProjectBySlug(params.slug)
  return (
    <div className="flex flex-col gap-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-t3">
        <Link href="/work" className="hover:text-t2">
          Work
        </Link>
        <span>/</span>
        <span className="text-t1">Case Study</span>
      </nav>

      {/* NDA Banner */}
      <div className="p-4 bg-blue-50 border border-blue-100 rounded-card">
        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-blue-600"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="text-sm font-medium text-blue-800">
            Protected under NDA
          </span>
        </div>
        <p className="text-xs text-blue-600 mt-1">
          Some details have been modified or omitted to protect client
          confidentiality.
        </p>
      </div>

      {/* Project header */}
      <div>
        <h1 className="text-[22px] font-bold heading-tight">
          Enterprise Design System
        </h1>
        <p className="text-sm text-t2 mt-2">
          Confidential Client · Enterprise Platform
        </p>
      </div>

      {/* Metadata grid */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'Role', value: 'Lead Product Designer' },
          { label: 'Industry', value: 'Agritech / Enterprise' },
          { label: 'Duration', value: '2023 – Present' },
          { label: 'Team', value: '4 Designers, 12 Engineers' },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-[11px] text-t3 uppercase tracking-wide">
              {item.label}
            </p>
            <p className="text-sm text-t1 mt-0.5">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Content sections placeholder */}
      <section>
        <h2 className="text-base font-semibold text-t1 mb-3">The Problem</h2>
        <p className="text-sm text-t2 leading-relaxed">
          Content will be pulled from the Notion Case Studies database once
          connected.
        </p>
      </section>
    </div>
  );
}
