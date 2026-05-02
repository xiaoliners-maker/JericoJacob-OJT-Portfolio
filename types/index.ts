export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  completionDate: string;
  category: "Frontend" | "Mobile" | "Research" | "Backend" | "SEO Audit";
  featured: boolean;
  liveUrl?: string;
  repoUrl?: string;
  highlights: string[];
}

export interface LogMeta {
  title: string;
  slug: string;
  period: string;
  week: number;
  tags: string[];
}

export interface LogPost extends LogMeta {
  content: string;
}

export interface TimelineItem {
  week: number;
  period: string;
  keyActivity: string;
  status: "completed";
}
