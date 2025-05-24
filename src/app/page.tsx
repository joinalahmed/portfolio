import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Cpu, Briefcase, Edit3 } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';

const skills = [
  "AI Strategy & Roadmap Development",
  "Machine Learning Model Design (NLP, CV, Predictive Analytics)",
  "Cloud Architecture (AWS, Azure, GCP)",
  "Data Engineering & MLOps Pipelines",
  "Generative AI & LLM Integration",
  "Ethical AI & Responsible Innovation"
];

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden rounded-lg shadow-xl bg-gradient-to-br from-primary/10 via-background to-background">
         <div className="absolute inset-0 opacity-50" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 0.5px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <Cpu className="mx-auto md:mx-0 h-16 w-16 text-primary mb-6" />
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
                Architecting the Future of Intelligence
              </h1>
              <p className="mx-auto max-w-2xl md:max-w-none text-xl text-muted-foreground mb-10">
                I'm an AI Architect specializing in designing and implementing cutting-edge AI solutions that drive business value and innovation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
                  <Link href="/projects">View My Work</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-accent/50 transition-shadow">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Your Name - AI Architect"
                width={400}
                height={400}
                className="rounded-full shadow-2xl object-cover aspect-square"
                data-ai-hint="portrait professional"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About/Skills Section */}
      <section className="section-padding">
        <SectionHeading
          title="My Expertise"
          subtitle="Leveraging deep knowledge in AI and cloud technologies to build robust and scalable intelligent systems."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill) => (
            <Card key={skill} className="bg-card/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-base font-medium text-foreground">{skill}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Featured Projects Teaser */}
      <section className="section-padding bg-card/30 rounded-lg">
        <SectionHeading
          title="Featured Projects"
          subtitle="A glimpse into impactful solutions I've designed and delivered."
        />
        {/* In a real app, you'd fetch 2-3 featured projects here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Project Teaser 1" 
              width={600} 
              height={400} 
              className="w-full h-64 object-cover"
              data-ai-hint="ai algorithm" 
            />
            <CardHeader>
              <CardTitle className="text-xl">AI-Powered Predictive Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Reduced machinery downtime by 20% through predictive analytics.</p>
              <Button variant="link" asChild className="p-0 h-auto text-primary">
                <Link href="/projects">Learn More &rarr;</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Project Teaser 2" 
              width={600} 
              height={400} 
              className="w-full h-64 object-cover"
              data-ai-hint="code screen" 
            />
            <CardHeader>
              <CardTitle className="text-xl">Automated Content Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Architected a platform for AI-driven content creation.</p>
              <Button variant="link" asChild className="p-0 h-auto text-primary">
                <Link href="/projects">Learn More &rarr;</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                <Briefcase className="mr-2 h-5 w-5" />
                View All Projects
              </Link>
            </Button>
          </div>
      </section>

      {/* Blog Teaser */}
      <section className="section-padding">
        <SectionHeading
          title="Latest Insights"
          subtitle="Sharing knowledge and perspectives on the evolving world of AI and architecture."
          centered
        />
         {/* In a real app, you'd fetch 1-2 latest blog posts here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
           <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image 
              src="https://placehold.co/600x350.png" 
              alt="Blog Teaser 1" 
              width={600} 
              height={350} 
              className="w-full h-56 object-cover"
              data-ai-hint="futuristic city" 
            />
            <CardHeader>
              <CardTitle className="text-xl">The Future of AI in Solution Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 line-clamp-3">Exploring how artificial intelligence is reshaping the landscape of solution architecture, from design to deployment...</p>
              <Button variant="link" asChild className="p-0 h-auto text-primary">
                <Link href="/blog/the-future-of-ai-in-architecture">Read More &rarr;</Link>
              </Button>
            </CardContent>
          </Card>
           <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image 
              src="https://placehold.co/600x350.png" 
              alt="Blog Teaser 2" 
              width={600} 
              height={350} 
              className="w-full h-56 object-cover"
              data-ai-hint="server room"
            />
            <CardHeader>
              <CardTitle className="text-xl">Mastering LLMs for Enterprise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 line-clamp-3">A guide to effectively integrating and managing LLMs within enterprise environments, focusing on security and scalability...</p>
              <Button variant="link" asChild className="p-0 h-auto text-primary">
                <Link href="/blog/mastering-llms-for-enterprise">Read More &rarr;</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/blog">
                <Edit3 className="mr-2 h-5 w-5" />
                Visit The Blog
              </Link>
            </Button>
          </div>
      </section>
    </div>
  );
}
