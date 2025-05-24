
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Mail, Linkedin, Briefcase, Building, Youtube, Mic } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me - Joinal Ahmed - Archiblog',
  description: 'Learn more about Joinal Ahmed, an AI Solutions Architect, public speaker, and startup advisor with experience at Google Cloud and AWS.',
};

const skills = [
  "AI/ML Solutions Architecture on AWS & Google Cloud",
  "AI Strategy & Prototyping for Startups",
  "Machine Learning Model Design (NLP, CV, Predictive Analytics)",
  "Data Engineering & MLOps Pipelines",
  "Generative AI & LLM Integration",
  "Ethical AI & Responsible Innovation",
  "Public Speaking & Technical Workshops on AI"
];

const advisedCompanies = [
  { name: "Innovatech", logoUrl: "https://placehold.co/150x70.png?text=Innovatech", dataAiHint: "tech logo" },
  { name: "DataSolutions Co.", logoUrl: "https://placehold.co/150x70.png?text=DataSolutions", dataAiHint: "data logo" },
  { name: "AI Forward Inc.", logoUrl: "https://placehold.co/150x70.png?text=AI+Forward", dataAiHint: "ai logo" },
  { name: "NextGen Startup", logoUrl: "https://placehold.co/150x70.png?text=NextGen", dataAiHint: "startup logo" },
  { name: "CloudPioneers", logoUrl: "https://placehold.co/150x70.png?text=CloudPioneers", dataAiHint: "cloud logo" },
  { name: "HealthAI Corp", logoUrl: "https://placehold.co/150x70.png?text=HealthAI", dataAiHint: "health logo" },
];

const publicTalks = [
  { 
    title: "The Future of Generative AI in Enterprise", 
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual video ID
    description: "A keynote on how businesses can leverage generative AI for innovation and efficiency.",
    videoId: "dQw4w9WgXcQ" // Replace with actual video ID
  },
  { 
    title: "Ethical Considerations in AI Development", 
    youtubeUrl: "https://www.youtube.com/watch?v=abcdef12345", // Replace with actual video ID
    description: "Discussing the importance of building responsible AI systems.",
    videoId: "abcdef12345" // Replace with actual video ID
  },
  { 
    title: "Scaling ML Operations (MLOps) in the Cloud", 
    youtubeUrl: "https://www.youtube.com/watch?v=ghijkl67890", // Replace with actual video ID
    description: "Practical strategies for implementing and managing MLOps pipelines on major cloud platforms.",
    videoId: "ghijkl67890" // Replace with actual video ID
  },
];


export default function AboutPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <SectionHeading
        title="About Joinal Ahmed"
        subtitle="AI Solutions Architect, Public Speaker, and Startup Advisor passionate about building innovative and impactful intelligent systems."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-1 flex flex-col items-center text-center">
          <div className="relative w-60 h-60 md:w-72 md:h-72 mb-6">
            <Image
              src="https://placehold.co/400x400.png" // Replace with your actual photo URL
              alt="Joinal Ahmed - AI Architect"
              width={400}
              height={400}
              className="rounded-full shadow-2xl object-cover aspect-square"
              data-ai-hint="professional portrait"
              priority
            />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Joinal Ahmed</h2>
          <p className="text-lg text-primary mb-4">AI Solutions Architect & Speaker</p>
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
            <Button variant="outline" size="icon" asChild>
              <Link href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" aria-label="Joinal Ahmed's YouTube Channel">
                <Youtube className="h-5 w-5" />
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
                helping them to unlock the transformative potential of AI. I also enjoy sharing my knowledge through public speaking engagements, 
                discussing the latest trends and ethical considerations in AI.
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

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Mic className="mr-3 h-6 w-6 text-primary" />
                Public Speaking & Talks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                I frequently speak at conferences and events on topics related to AI, machine learning, and cloud architecture. Here are a few selected talks:
              </p>
              <div className="space-y-6">
                {publicTalks.map((talk) => (
                  <div key={talk.videoId} className="flex flex-col sm:flex-row gap-4 items-start p-4 border rounded-lg hover:shadow-md transition-shadow bg-muted/20">
                    <Link href={talk.youtubeUrl} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-48 aspect-video rounded-md overflow-hidden relative shadow-lg flex-shrink-0 group">
                      <Image
                        src={`https://img.youtube.com/vi/${talk.videoId}/hqdefault.jpg`}
                        alt={`Thumbnail for ${talk.title}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 192px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint="youtube thumbnail"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 flex items-center justify-center transition-colors duration-300">
                        <Youtube className="h-12 w-12 text-white/70 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </Link>
                    <div className="flex-1">
                      <Link href={talk.youtubeUrl} target="_blank" rel="noopener noreferrer">
                        <h4 className="text-lg font-semibold text-primary hover:underline">{talk.title}</h4>
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-3">{talk.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Building className="mr-3 h-6 w-6 text-primary" />
                Companies I've Advised
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                I've had the privilege of advising a diverse range of companies, helping them harness the power of AI.
              </p>
              <div className="relative w-full overflow-hidden group">
                <div className="animate-marquee-scroll flex">
                  {[...advisedCompanies, ...advisedCompanies].map((company, index) => (
                    <div
                      key={`${company.name}-${index}`}
                      className="marquee-item mx-4 w-36 h-24 p-3 bg-muted/30 rounded-lg hover:shadow-md transition-shadow"
                      aria-hidden={index >= advisedCompanies.length ? "true" : undefined}
                    >
                      <Image
                        src={company.logoUrl}
                        alt={`${company.name} logo`}
                        width={120}
                        height={60}
                        className="object-contain max-h-[50px] w-auto"
                        data-ai-hint={company.dataAiHint}
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-card to-transparent group-hover:from-card/80 transition-opacity"></div>
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-card to-transparent group-hover:from-card/80 transition-opacity"></div>
              </div>
               <p className="text-xs text-muted-foreground mt-6 text-center">
                Logos are for illustrative purposes.
              </p>
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
