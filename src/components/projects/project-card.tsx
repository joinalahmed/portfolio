import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="relative w-full h-56">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          data-ai-hint={project.dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="line-clamp-3 h-[3.75rem]">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-semibold text-muted-foreground">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-accent/50 text-accent-foreground">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center gap-2 pt-4 border-t">
        <Button variant="outline" asChild size="sm">
          <Link href={`/projects/${project.id}`}>
            Details
          </Link>
        </Button>
        <div className="flex gap-2">
          {project.projectUrl && (
            <Button variant="ghost" size="icon" asChild title="View Project">
              <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button variant="ghost" size="icon" asChild title="View Code">
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
