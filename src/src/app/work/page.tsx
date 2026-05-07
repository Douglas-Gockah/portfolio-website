import { getProjects } from '@/lib/queries';
import { WorkPageClient } from '@/components/work/WorkPageClient';

export const revalidate = 60;

export default async function WorkPage() {
  const projects = await getProjects();
  const sorted = projects.sort((a, b) => a.order - b.order);

  return <WorkPageClient projects={sorted} />;
}
