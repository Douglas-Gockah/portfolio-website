import { queryDatabase } from './notion';
import type { Project, CaseStudy, Testimonial, SiteContent, MediaItem } from '@/types/notion';

const PROJECTS_DB = process.env.NOTION_PROJECTS_DB_ID!;
const CASE_STUDIES_DB = process.env.NOTION_CASE_STUDIES_DB_ID!;
const SITE_CONTENT_DB = process.env.NOTION_SITE_CONTENT_DB_ID!;
const TESTIMONIALS_DB = process.env.NOTION_TESTIMONIALS_DB_ID!;
const MEDIA_DB = process.env.NOTION_MEDIA_DB_ID!;

// Helper to safely extract Notion property values
function getText(prop: any): string {
  if (!prop) return '';
  if (prop.type === 'title') return prop.title?.[0]?.plain_text ?? '';
  if (prop.type === 'rich_text') return prop.rich_text?.[0]?.plain_text ?? '';
  if (prop.type === 'url') return prop.url ?? '';
  if (prop.type === 'number') return String(prop.number ?? '');
  if (prop.type === 'select') return prop.select?.name ?? '';
  if (prop.type === 'checkbox') return prop.checkbox;
  if (prop.type === 'multi_select') return prop.multi_select?.map((s: any) => s.name) ?? [];
  return '';
}

export async function getProjects(): Promise<Project[]> {
  if (!PROJECTS_DB) return [];
  const pages = await queryDatabase(PROJECTS_DB);
  return pages.map((page: any) => ({
    id: page.id,
    title: getText(page.properties.Title),
    slug: getText(page.properties.Slug),
    description: getText(page.properties.Description),
    tags: getText(page.properties.Tags),
    status: getText(page.properties.Status),
    company: getText(page.properties.Company),
    date: getText(page.properties.Date),
    coverImage: getText(page.properties['Cover Image URL']),
    featured: getText(page.properties.Featured),
    nda: getText(page.properties.NDA),
    order: Number(getText(page.properties.Order)) || 0,
  }));
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects();
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  if (!CASE_STUDIES_DB) return [];
  const pages = await queryDatabase(CASE_STUDIES_DB);
  return pages.map((page: any) => ({
    id: page.id,
    title: getText(page.properties.Title),
    slug: getText(page.properties.Slug),
    problem: getText(page.properties.Problem),
    role: getText(page.properties.Role),
    modules: getText(page.properties.Modules),
    impact: getText(page.properties.Impact),
    beyondDesign: getText(page.properties['Beyond Design']),
    tools: getText(page.properties.Tools),
    metricsJson: getText(page.properties['Metrics JSON']),
    processSteps: getText(page.properties['Process Steps']),
  }));
}

export async function getSiteContent(section?: string): Promise<SiteContent[]> {
  if (!SITE_CONTENT_DB) return [];
  const filter = section
    ? { property: 'Section', select: { equals: section } }
    : undefined;
  const pages = await queryDatabase(SITE_CONTENT_DB, filter);
  return pages.map((page: any) => ({
    key: getText(page.properties.Key),
    value: getText(page.properties.Value),
    section: getText(page.properties.Section),
  }));
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!TESTIMONIALS_DB) return [];
  const pages = await queryDatabase(TESTIMONIALS_DB);
  return pages
    .map((page: any) => ({
      quote: getText(page.properties.Quote),
      authorName: getText(page.properties['Author Name']),
      authorRole: getText(page.properties['Author Role']),
      authorInitials: getText(page.properties['Author Initials']),
      order: Number(getText(page.properties.Order)) || 0,
    }))
    .sort((a, b) => a.order - b.order);
}

export async function getMedia(type?: string): Promise<MediaItem[]> {
  if (!MEDIA_DB) return [];
  const filter = type
    ? { property: 'Type', select: { equals: type } }
    : undefined;
  const pages = await queryDatabase(MEDIA_DB, filter);
  return pages.map((page: any) => ({
    name: getText(page.properties.Name),
    url: getText(page.properties['Cloudinary URL']),
    type: getText(page.properties.Type),
    altText: getText(page.properties['Alt Text']),
  }));
}
