import { getProjectById } from '@/lib/data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type ProjectDetailPageProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const project = getProjectById(params.id);
  if (!project) {
    return {
      title: 'Project Not Found - Joinal Ahmed',
    };
  }
  return {
    title: `${project.title} - Joinal Ahmed`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container-readable py-8">
      <Button variant="outline" asChild className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
      </Button>

      <article className="space-y-8">
        <header>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-6">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              data-ai-hint={project.dataAiHint}
              priority
            />
          </div>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </header>

        {project.longDescription && (
          <section>
            <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
            <div className="prose prose-invert max-w-none text-foreground" dangerouslySetInnerHTML={{ __html: project.longDescription.replace(/\n/g, '<br />') }} />
          </section>
        )}
        
        <section>
          <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm px-3 py-1 bg-accent/50 text-accent-foreground">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {(project.projectUrl || project.repoUrl) && (
          <section>
            <h2 className="text-2xl font-semibold mb-3">Links</h2>
            <div className="flex flex-wrap gap-4">
              {project.projectUrl && (
                <Button asChild variant="outline">
                  <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                </Button>
              )}
              {project.repoUrl && (
                <Button asChild variant="outline">
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  // In a real app, fetch all project IDs
  const { mockProjects } = await import('@/lib/data');
  return mockProjects.map((project) => ({
    id: project.id,
  }));
}
