
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Cpu, Briefcase, Edit3 } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';

const skills = [
  "AI/ML Solutions Architecture on AWS & Google Cloud",
  "AI Strategy & Prototyping for Startups",
  "Machine Learning Model Design (NLP, CV, Predictive Analytics)",
  "Data Engineering & MLOps Pipelines",
  "Generative AI & LLM Integration",
  "Ethical AI & Responsible Innovation"
];

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] max-h-screen flex flex-col justify-center bg-[#151718] rounded-3xl shadow-2xl border border-[#23272e] overflow-hidden px-0 md:px-8 pt-8">
  <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12 py-4 md:py-8 px-4 md:px-10">
    {/* Left: Circular Image */}
    <div className="flex-1 flex items-center justify-center">
      <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex items-center justify-center motion-safe:animate-fade-in-left">
  <Image
    src="/joinal.jpg"
    alt="Joinal Ahmed - AI Architect"
    width={400}
    height={400}
    className="object-cover w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border-4 border-green-400 shadow-2xl"
    priority
  />
</div>
    </div>
    {/* Right: Text Content */}
    <div className="flex-1 flex flex-col justify-center px-6 md:px-0 py-4 md:py-0 motion-safe:animate-fade-in-up">
      <span className="text-green-400 font-mono text-3xl md:text-4xl font-bold mb-2">Hey, I'm Joinal</span>
      <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
        <span className="text-blue-400">AI Architect</span> & Engineering Leader
      </h1>
      <p className="text-gray-300 text-base md:text-lg mb-4 max-w-xl">
        I design intelligent systems, shape AI strategy, and build scalable cloud-native solutions. Deep expertise in <span className="text-orange-400">GenAI</span>, <span className="text-blue-400">Cloud</span>, <span className="text-yellow-400">Data</span>, and <span className="text-green-400">AI</span>.
      </p>
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-flex items-center text-gray-300 text-xl"><Cpu className="h-5 w-5 mr-1 text-green-400" />AI/ML</span>
        <span className="inline-flex items-center text-gray-300 text-xl"><Briefcase className="h-5 w-5 mr-1 text-blue-400" />Cloud</span>
        <span className="inline-flex items-center text-gray-300 text-xl"><Edit3 className="h-5 w-5 mr-1 text-yellow-400" />Apps</span>
      </div>
      <div className="flex gap-4 mb-7">
        <Button asChild size="lg" className="bg-green-400 text-black font-bold shadow-lg hover:bg-green-300 transition">
          <Link href="/projects">See Projects</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10 transition">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>
      <div className="space-y-2 mt-2">
  <div className="flex flex-wrap items-center gap-2">
    <span className="text-xs text-gray-400 font-bold uppercase mr-2">Languages & Frameworks:</span>
    <span className="px-2 py-1 rounded-full bg-blue-900/60 text-blue-300 text-xs font-mono">Python</span>
    <span className="px-2 py-1 rounded-full bg-yellow-900/60 text-yellow-200 text-xs font-mono">TensorFlow</span>
    <span className="px-2 py-1 rounded-full bg-orange-900/60 text-orange-200 text-xs font-mono">PyTorch</span>
  </div>
  <div className="flex flex-wrap items-center gap-2">
    <span className="text-xs text-gray-400 font-bold uppercase mr-2">Cloud Platforms:</span>
    <span className="px-2 py-1 rounded-full bg-blue-800/60 text-blue-200 text-xs font-mono">Google Cloud Platform</span>
    <span className="px-2 py-1 rounded-full bg-yellow-800/60 text-yellow-200 text-xs font-mono">AWS</span>
    <span className="px-2 py-1 rounded-full bg-indigo-900/60 text-indigo-200 text-xs font-mono">Azure</span>
  </div>
  <div className="flex flex-wrap items-center gap-2">
    <span className="text-xs text-gray-400 font-bold uppercase mr-2">AI/ML Technologies:</span>
    <span className="px-2 py-1 rounded-full bg-green-800/60 text-green-200 text-xs font-mono">GenAI</span>
    <span className="px-2 py-1 rounded-full bg-blue-900/60 text-blue-200 text-xs font-mono">CV</span>
    <span className="px-2 py-1 rounded-full bg-orange-900/60 text-orange-200 text-xs font-mono">NLP</span>
    <span className="px-2 py-1 rounded-full bg-pink-900/60 text-pink-200 text-xs font-mono">Voice Bots</span>
    <span className="px-2 py-1 rounded-full bg-purple-900/60 text-purple-200 text-xs font-mono">RecSys</span>
    <span className="px-2 py-1 rounded-full bg-yellow-900/60 text-yellow-200 text-xs font-mono">MLOps</span>
    <span className="px-2 py-1 rounded-full bg-red-900/60 text-red-200 text-xs font-mono">LLM Fine-Tuning & Deployment</span>
    <span className="px-2 py-1 rounded-full bg-green-900/60 text-green-200 text-xs font-mono">Custom ML Solutions</span> 
  </div>
</div>
    </div>
  </div>
  {/* Stats Row (moved inside hero card) */}
  <div className="w-full flex flex-wrap justify-around items-center py-10 border-t border-[#23272e] bg-[#181a1b] mt-6 rounded-b-3xl">
    <div className="flex flex-col items-center px-4">
      <span className="text-2xl text-green-400 font-mono font-bold">8+</span>
      <span className="text-xs text-gray-400 mt-1">Years Experience</span>
    </div>
    <div className="flex flex-col items-center px-4">
      <span className="text-2xl text-blue-400 font-mono font-bold">50+</span>
      <span className="text-xs text-gray-400 mt-1">Projects Completed</span>
    </div>
    <div className="flex flex-col items-center px-4">
      <span className="text-2xl text-yellow-400 font-mono font-bold">20+</span>
      <span className="text-xs text-gray-400 mt-1">Satisfied Clients</span>
    </div>
    <div className="flex flex-col items-center px-4">
      <span className="text-2xl text-purple-400 font-mono font-bold">5+</span>
      <span className="text-xs text-gray-400 mt-1">Awards Won</span>
    </div>
  </div>

  {/* Background accents */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-24 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    <div className="absolute inset-0 opacity-40" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
  </div>
        {/* Scroll Down Indicator */}
        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 z-20 flex flex-col items-center">
          <a href="#about" aria-label="Scroll Down" className="animate-bounce text-green-400 hover:text-green-300">
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
              <polyline points="6 9 16 19 26 9" />
            </svg>
          </a>
        </div>
      </section>

      {/* Services Card Section */}
      <section className="relative min-h-[calc(100vh-4rem)] max-h-screen flex flex-col justify-center bg-[#151718] rounded-3xl shadow-2xl border border-[#23272e] overflow-hidden px-0 md:px-8 pt-8">

        <div className="bg-[#181a1b] rounded-3xl shadow-2xl border border-[#23272e] p-8 md:p-12 h-full flex flex-col justify-center">
          <div className="text-center mb-10">
            <span className="block text-green-400 font-mono text-lg mb-2">What do I offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">Designing Solutions <span className="text-blue-300">Customized</span> to Meet<br /><span className="text-gray-400 font-mono">Your Requirements</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Card 1: GenAI & LLM Solutions */}
  <div className="bg-[#151718] border border-[#23272e] rounded-2xl p-6 shadow-md flex flex-col gap-2">
    <span className="text-2xl mb-2">🤖</span>
    <span className="font-mono text-lg text-white font-bold">GenAI & LLM Solutions</span>
    <span className="text-xs text-gray-400">Build, fine-tune, and deploy Large Language Models and generative AI for real business impact.</span>
  </div>
  {/* Card 2: AI Strategy & Consulting */}
  <div className="bg-[#151718] border border-[#23272e] rounded-2xl p-6 shadow-md flex flex-col gap-2">
    <span className="text-2xl mb-2">🧠</span>
    <span className="font-mono text-lg text-white font-bold">AI Strategy & Consulting</span>
    <span className="text-xs text-gray-400">Shape your AI roadmap, identify high-ROI use cases, and ensure responsible, scalable adoption.</span>
  </div>
  {/* Card 3: Cloud-Native ML Platforms */}
  <div className="bg-[#151718] border border-[#23272e] rounded-2xl p-6 shadow-md flex flex-col gap-2">
    <span className="text-2xl mb-2">☁️</span>
    <span className="font-mono text-lg text-white font-bold">Cloud-Native ML Platforms</span>
    <span className="text-xs text-gray-400">Design and implement robust ML systems on AWS, GCP, or Azure with best-in-class security and scalability.</span>
  </div>
  {/* Card 4: MLOps & Data Engineering */}
  <div className="bg-[#151718] border border-[#23272e] rounded-2xl p-6 shadow-md flex flex-col gap-2">
    <span className="text-2xl mb-2">🔄</span>
    <span className="font-mono text-lg text-white font-bold">MLOps & Data Engineering</span>
    <span className="text-xs text-gray-400">Automate model pipelines, CI/CD, and data workflows for reliable, production-grade AI delivery.</span>
  </div>
  {/* Card 5: Custom AI Integrations */}
  <div className="bg-[#151718] border border-[#23272e] rounded-2xl p-6 shadow-md flex flex-col gap-2">
    <span className="text-2xl mb-2">🔌</span>
    <span className="font-mono text-lg text-white font-bold">Custom AI Integrations</span>
    <span className="text-xs text-gray-400">Embed AI into apps, products, and business processes—voice, vision, NLP, and more.</span>
  </div>
  {/* Card 6: AI-Driven Automation */}
  <div className="bg-[#151718] border border-[#23272e] rounded-2xl p-6 shadow-md flex flex-col gap-2">
    <span className="text-2xl mb-2">⚡</span>
    <span className="font-mono text-lg text-white font-bold">AI-Driven Automation</span>
    <span className="text-xs text-gray-400">Streamline operations and boost productivity with intelligent, automated workflows.</span>
  </div>
</div>
          <div className="text-center mt-8">
            <span className="text-sm text-gray-400">Excited to take on new projects and collaborate. Let’s chat about your ideas. <a href="/contact" className="text-green-400 underline hover:text-green-300">Reach Out</a></span>
          </div>
        </div>
      </section>

      
      {/* Featured Projects Showcase */}
      <section className="section-padding bg-gradient-to-br from-[#191c24]/80 to-[#23272e]/80 rounded-3xl py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading
            title="Featured Projects"
            subtitle="AI, Cloud, and Automation in Action"
            centered
          />
        <div className="mt-16 flex gap-8 overflow-x-auto whitespace-nowrap md:grid md:grid-cols-3 md:gap-8 md:whitespace-normal snap-x max-w-8xl mx-auto">
        {/* Project Card 1 */}
          <Card className="w-[320px] max-w-[340px] overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4 md:p-6 mx-auto">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="AI Predictive Maintenance" 
              width={600} 
              height={400} 
              className="w-full h-64 object-cover"
            />
            <CardHeader className="flex flex-col items-center gap-2 text-center">
              <span className="text-xs bg-blue-900/70 text-blue-200 rounded-full px-3 py-1 font-mono mr-2">AI/ML</span>
              <CardTitle className="text-xl text-center">Predictive Maintenance</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">Reduced downtime 20% using real-time analytics & ML models.</p>
              <Button variant="link" asChild className="p-0 h-auto text-primary">
                <Link href="/projects">Learn More &rarr;</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Project Card 2 */}
          <Card className="w-[320px] max-w-[340px] overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4 md:p-6 mx-auto">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="AI Content Generation" 
              width={600} 
              height={400} 
              className="w-full h-64 object-cover"
            />
            <CardHeader className="flex flex-col items-center gap-2 text-center">
              <span className="text-xs bg-green-900/70 text-green-200 rounded-full px-3 py-1 font-mono mr-2">Automation</span>
              <CardTitle className="text-xl text-center">Content Generation Platform</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">AI-driven platform for scalable, automated content creation.</p>
              <Button variant="link" asChild className="p-0 h-auto text-primary">
                <Link href="/projects">Learn More &rarr;</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Project Card 3 */}
          <Card className="w-[320px] max-w-[340px] overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4 md:p-6 mx-auto">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Cloud ML Platform" 
              width={600} 
              height={400} 
              className="w-full h-64 object-cover"
            />
            <CardHeader className="flex flex-col items-center gap-2 text-center">
              <span className="text-xs bg-purple-900/70 text-purple-200 rounded-full px-3 py-1 font-mono mr-2">Cloud</span>
              <CardTitle className="text-xl text-center">Cloud ML Platform</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">Deployed end-to-end ML pipelines on GCP for enterprise scale.</p>
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
      </div>
      </section>

      {/* Insights/Blog Teaser */}
      <section className="section-padding bg-gradient-to-br from-[#181a1b]/80 to-[#23272e]/70 rounded-3xl mt-16">
        <SectionHeading
          title="Latest Blogs"
          subtitle="AI, Cloud, and Tech Leadership Perspectives"
          centered
        />
        <div className="mt-12 flex gap-8 overflow-x-auto whitespace-nowrap md:grid md:grid-cols-2 md:gap-8 md:whitespace-normal snap-x max-w-4xl mx-auto">
          {/* Blog Card 1 (New) */}
          <Card className="min-w-[260px] max-w-md w-full overflow-hidden hover:shadow-xl transition-shadow duration-300 snap-center relative">
            <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">New</span>
            <Image 
              src="https://placehold.co/600x350.png" 
              alt="Blog Teaser 1" 
              width={600} 
              height={350} 
              className="w-full h-56 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-xl text-center">The Future of AI in Solution Architecture</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 line-clamp-2">How AI is transforming the landscape of enterprise architecture and delivery.</p>
              <Button variant="link" asChild className="p-0 h-auto text-primary">
                <Link href="/blog/the-future-of-ai-in-architecture">Read More &rarr;</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Blog Card 2 */}
          <Card className="w-[320px] max-w-[340px] overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4 md:p-6 mx-auto">
            <Image 
              src="https://placehold.co/600x350.png" 
              alt="Blog Teaser 2" 
              width={600} 
              height={350} 
              className="w-full h-56 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-xl text-center">Scaling ML in the Cloud</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 line-clamp-2">Best practices for deploying and managing ML workloads on cloud platforms.</p>
              <Button variant="link" asChild className="p-0 h-auto text-primary">
                <Link href="/blog/scaling-ml-in-the-cloud">Read More &rarr;</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">
              <Edit3 className="mr-2 h-5 w-5" />
              View All Insights
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 mt-20 rounded-3xl bg-gradient-to-br from-green-700 via-blue-800 to-purple-900 text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to build the future with AI?</h2>
        <p className="text-lg text-blue-100 mb-8">Let's collaborate on impactful solutions for your business. Book a call or send a message to get started.</p>
        <Button asChild size="lg" className="text-lg px-8 py-4 font-bold rounded-full bg-green-500 hover:bg-green-400">
          <Link href="/contact">Let's Connect</Link>
        </Button>
      </section>
    </div>
  );
}
