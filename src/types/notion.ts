export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  status: string;
  company: string;
  date: string;
  coverImage: string;
  featured: boolean;
  nda: boolean;
  order: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  problem: string;
  role: string;
  modules: string;
  impact: string;
  beyondDesign: string;
  tools: string;
  metricsJson: string;
  processSteps: string;
}

export interface SiteContent {
  key: string;
  value: string;
  section: string;
}

export interface Testimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  authorInitials: string;
  order: number;
}

export interface MediaItem {
  name: string;
  url: string;
  type: string;
  altText: string;
}
