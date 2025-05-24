import { ProjectCard } from '@/components/projects/project-card';
import { SectionHeading } from '@/components/shared/section-heading';
import { mockProjects } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - AI Portfolio & Blog',
  description: 'A showcase of AI and architecture projects by Joinal Ahmed.',
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        title="My Portfolio"
        subtitle="A collection of projects where I've applied AI and architectural principles to solve complex problems and deliver innovative solutions."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
