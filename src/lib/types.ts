export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  technologies: string[];
  projectUrl?: string;
  repoUrl?: string;
  dataAiHint?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string; // Markdown or HTML content
  excerpt: string;
  author: string;
  date: string; // ISO 8601 date string
  categories: string[];
  imageUrl?: string;
  dataAiHint?: string;
}
