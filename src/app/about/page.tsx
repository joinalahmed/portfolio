
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Mail, Linkedin, Briefcase } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me - Joinal Ahmed - Archiblog',
  description: 'Learn more about Joinal Ahmed, an AI Solutions Architect with experience at Google Cloud, AWS, and helping startups.',
};

const skills = [
  "AI/ML Solutions Architecture on AWS & Google Cloud",
  "AI Strategy & Prototyping for Startups",
  "Machine Learning Model Design (NLP, CV, Predictive Analytics)",
  "Data Engineering & MLOps Pipelines",
  "Generative AI & LLM Integration",
  "Ethical AI & Responsible Innovation"
];

export default function AboutPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <SectionHeading
        title="About Joinal Ahmed"
        subtitle="AI Solutions Architect passionate about building innovative and impactful intelligent systems."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-1 flex flex-col items-center text-center">
          <div className="relative w-60 h-60 md:w-72 md:h-72 mb-6">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Joinal Ahmed - AI Architect"
              width={400}
              height={400}
              className="rounded-full shadow-2xl object-cover aspect-square"
              data-ai-hint="professional portrait"
              priority
            />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Joinal Ahmed</h2>
          <p className="text-lg text-primary mb-4">AI Solutions Architect</p>
          <div className="flex space-x-4 mb-6">
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:contact@archiblog.example.com" aria-label="Email Joinal Ahmed">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com/in/ai-architect-example" target="_blank" rel="noopener noreferrer" aria-label="Joinal Ahmed's LinkedIn Profile">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">My Journey & Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Joinal Ahmed, an AI Solutions Architect with a deep passion for leveraging artificial intelligence
                to solve complex challenges and drive innovation. My journey in tech has led me through exciting roles at
                leading cloud providers like Google Cloud and AWS, where I've specialized in designing and implementing
                scalable AI and Machine Learning solutions.
              </p>
              <p>
                I thrive on collaborating with organizations of all sizes, from dynamic startups to established enterprises,
                helping them to unlock the transformative potential of AI. My focus is on creating systems that are not only
                technologically advanced but also practical, ethical, and aligned with business objectives.
              </p>
              <p>
                I believe in a hands-on approach, staying current with the latest advancements in AI/ML, and fostering a culture
                of continuous learning and experimentation. Whether it's architecting a robust MLOps pipeline, developing a
                cutting-edge generative AI application, or strategizing an enterprise-wide AI adoption, my goal is to deliver
                solutions that create tangible value.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Core Expertise</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-base text-muted-foreground">{skill}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/projects">
                <Briefcase className="mr-2 h-5 w-5" />
                View My Work
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
