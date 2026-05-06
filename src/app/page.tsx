import { ProfileHero } from '@/components/home/ProfileHero';
import { SnapshotsCarousel } from '@/components/home/SnapshotsCarousel';
import { FeaturedProject } from '@/components/home/FeaturedProject';
import { ExplorationsGrid } from '@/components/home/ExplorationsGrid';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ToolsSection } from '@/components/home/ToolsSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <ProfileHero />
      <SnapshotsCarousel />
      <FeaturedProject />
      <ExplorationsGrid />
      <ServicesSection />
      <ToolsSection />
      <ContactSection />
    </div>
  );
}
