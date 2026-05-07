import { ProfileHero } from '@/components/home/ProfileHero';
import { SnapshotsCarousel } from '@/components/home/SnapshotsCarousel';
import { FeaturedProject } from '@/components/home/FeaturedProject';
import { ExplorationsGrid } from '@/components/home/ExplorationsGrid';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ToolsSection } from '@/components/home/ToolsSection';
import { ContactSection } from '@/components/home/ContactSection';
import { getProjects, getSiteContent, getMedia } from '@/lib/queries';

export const revalidate = 60;

export default async function HomePage() {
  const [projects, siteContent, media] = await Promise.all([
    getProjects(),
    getSiteContent(),
    getMedia(),
  ]);

  const featured = projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
  const explorations = projects.filter((p) => !p.featured).sort((a, b) => a.order - b.order);
  const snapshots = media.filter((m) => m.type === 'Snapshot');

  const content = (key: string) =>
    siteContent.find((c) => c.key === key)?.value ?? '';

  return (
    <div className="flex flex-col gap-16">
      <ProfileHero
        headline={content('hero_headline')}
        subtitle={content('hero_subtitle')}
        status={content('hero_status')}
        email={content('contact_email')}
      />
      <SnapshotsCarousel snapshots={snapshots} />
      <FeaturedProject project={featured[0]} />
      <ExplorationsGrid projects={explorations} />
      <ServicesSection />
      <ToolsSection />
      <ContactSection
        headline={content('contact_headline')}
        subtitle={content('contact_subtitle')}
        email={content('contact_email')}
      />
    </div>
  );
}
