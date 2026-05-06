import Link from 'next/link';

export function ExplorationsGrid() {
  // Placeholder projects — will be populated from Notion Projects DB
  const projects = [
    {
      slug: 'payment-system',
      title: 'Payment System Redesign',
      company: 'Confidential Client',
      tag: 'Payment Systems',
    },
    {
      slug: 'brand-identity',
      title: 'Brand Identity System',
      company: 'Social Enterprise',
      tag: 'Brand Identity',
    },
    {
      slug: 'design-system',
      title: 'Component Library',
      company: 'Confidential Client',
      tag: 'Design Systems',
    },
    {
      slug: 'mobile-app',
      title: 'Mobile App Experience',
      company: 'Confidential Client',
      tag: 'Mobile',
    },
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
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="border border-border rounded-card overflow-hidden transition-transform hover:-translate-y-0.5"
          >
            <div className="w-full aspect-[16/10] bg-bg2" />
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
