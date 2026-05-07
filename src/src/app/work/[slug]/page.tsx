import Link from 'next/link';
import { getProjects, getCaseStudies } from '@/lib/queries';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

interface CaseStudyPageProps {
  params: { slug: string };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const [projects, caseStudies] = await Promise.all([
    getProjects(),
    getCaseStudies(),
  ]);

  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);

  // Parse JSON fields safely
  let metrics: { value: string; label: string }[] = [];
  let processSteps: string[] = [];
  let modules: string[] = [];

  if (caseStudy) {
    try { metrics = JSON.parse(caseStudy.metricsJson || '[]'); } catch {}
    try { processSteps = JSON.parse(caseStudy.processSteps || '[]'); } catch {}
    try { modules = JSON.parse(caseStudy.modules || '[]'); } catch {}
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-t3">
        <Link href="/work" className="hover:text-t2">Work</Link>
        <span>/</span>
        <span className="text-t1">{project.title}</span>
      </nav>

      {/* NDA Banner */}
      {project.nda && (
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-card">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Protected under NDA</span>
          </div>
          <p className="text-xs text-blue-600 mt-1">
            Some details have been modified or omitted to protect client confidentiality.
          </p>
        </div>
      )}

      {/* Project header */}
      <div>
        <h1 className="text-[22px] font-bold heading-tight">{project.title}</h1>
        <p className="text-sm text-t2 mt-2">
          {project.company} · {project.tags.join(', ')}
        </p>
      </div>

      {/* Cover image */}
      {project.coverImage && (
        <div className="w-full aspect-[16/10] bg-bg2 rounded-card-lg overflow-hidden">
          <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Metadata grid */}
      {caseStudy && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[11px] text-t3 uppercase tracking-wide">Role</p>
            <p className="text-sm text-t1 mt-0.5">{caseStudy.role}</p>
          </div>
          <div>
            <p className="text-[11px] text-t3 uppercase tracking-wide">Duration</p>
            <p className="text-sm text-t1 mt-0.5">{project.date}</p>
          </div>
          <div>
            <p className="text-[11px] text-t3 uppercase tracking-wide">Tools</p>
            <p className="text-sm text-t1 mt-0.5">{caseStudy.tools}</p>
          </div>
          <div>
            <p className="text-[11px] text-t3 uppercase tracking-wide">Status</p>
            <p className="text-sm text-t1 mt-0.5">{project.status}</p>
          </div>
        </div>
      )}

      {/* Impact metrics */}
      {metrics.length > 0 && (
        <section>
          <h2 className="text-base font-semibold text-t1 mb-4">Impact</h2>
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((m) => (
              <div key={m.label} className="p-4 border border-border rounded-card text-center">
                <p className="text-xl font-bold text-t1">{m.value}</p>
                <p className="text-xs text-t3 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Problem */}
      {caseStudy?.problem && (
        <section>
          <h2 className="text-base font-semibold text-t1 mb-3">The Problem</h2>
          <p className="text-sm text-t2 leading-relaxed">{caseStudy.problem}</p>
        </section>
      )}

      {/* Process */}
      {processSteps.length > 0 && (
        <section>
          <h2 className="text-base font-semibold text-t1 mb-4">Process</h2>
          <div className="flex flex-col gap-3">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-bg3 border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[10px] font-medium text-t3">{i + 1}</span>
                </div>
                <p className="text-sm text-t2">{step}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Modules */}
      {modules.length > 0 && (
        <section>
          <h2 className="text-base font-semibold text-t1 mb-4">Key Modules</h2>
          <div className="flex flex-wrap gap-2">
            {modules.map((mod) => (
              <span key={mod} className="px-4 py-2 border border-border rounded-pill text-xs text-t2">
                {mod}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Beyond Design */}
      {caseStudy?.beyondDesign && (
        <section>
          <h2 className="text-base font-semibold text-t1 mb-3">Beyond Design</h2>
          <p className="text-sm text-t2 leading-relaxed">{caseStudy.beyondDesign}</p>
        </section>
      )}

      {/* Back to work */}
      <div className="pt-4">
        <Link href="/work" className="text-sm text-t3 hover:text-t2">
          ← Back to all work
        </Link>
      </div>
    </div>
  );
}
