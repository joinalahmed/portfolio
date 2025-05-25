
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Mail, Linkedin, Briefcase, Building, Youtube, Mic, BriefcaseBusiness } from 'lucide-react';
import type { Metadata } from 'next';
import { title } from 'process';

export const metadata: Metadata = {
  title: 'About Me',
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

const workHistory = [
  {
    company: "Microsoft",
    role: "Solutions Architect - Azure AI & OpenAI, Global Black Belt",
    period: "Sept 2023 – April 2025",
    location: "Bangalore, India",
    description: "Specialist for Azure OpenAI & Azure AI Stack across APAC. Led enterprise AI strategies, developed solution architectures, and delivered high-impact use cases integrating LLMs and ML solutions. Oversaw a $3M MRR portfolio and led customer workshops, POCs, and GTM initiatives.",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    dataAiHint: "microsoft logo",
  },
  {
    company: "Google",
    role: "Outbound Product Manager [20% Role]",
    period: "Mar 2023 – Aug 2023",
    location: "Bangalore, India",
    description: "Developed GTM strategies and product assets for the ABAP SDK on Google Cloud. Fostered strategic partnerships and piloted innovative projects, prioritizing enhancements based on user feedback.",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    dataAiHint: "google logo",
  },
  {
    company: "Google Cloud",
    role: "AI Solutions Lead, Google Cloud Platform",
    period: "Sept 2022 – Aug 2023",
    location: "Bangalore, India",
    description: "Delivery lead for Custom AI solutions, managing teams to deliver scalable ML solutions and integrating advanced ML models, LLMs, Dialogflow, and VertexAI into customer applications. Presented at Google I/O, Cloud Next, and DevFests.",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png",
    dataAiHint: "google cloud logo",
  },
  {
    company: "Amazon Web Services (AWS)",
    role: "ML Solutions Architect - II",
    period: "Dec 2021 – Aug 2022",
    location: "Bangalore, India",
    description: "Advised enterprise clients on deploying AI/ML solutions using SageMaker, EKS, EMR, and native AWS services. Focused on NLP and computer vision, delivering enablement sessions and bridging research with practical product applications.",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
    dataAiHint: "aws logo",
  },
  {
    company: "Halodoc Technology",
    role: "Lead Data Scientist",
    period: "Nov 2018 – Dec 2021",
    location: "Jakarta, Indonesia",
    description: "Led data science and engineering teams, architected ML platforms, set OKRs, and drove talent acquisition. Built an MLOps platform on AWS EKS, implemented batch inference with Airflow, and developed ML@Edge frameworks. Achieved significant business impact with personalized recommendations and NLP solutions.",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Halodoc-logo-red.jpg",
    dataAiHint: "halodoc logo",
  },
  {
    company: "Leadics Consulting",
    role: "Senior Data Scientist",
    period: "Jun 2017 – Nov 2018",
    location: "Bangalore, India",
    description: "Developed edge-based people re-identification, footfall tracking, and sentiment analysis systems for retail analytics. Built ANPR and ML-driven monitoring systems, improving KPIs and operational efficiency.",
    logoUrl: "https://leadics.com/wp-content/uploads/2021/05/Leadics-Logo-Transparent-1.png",
    dataAiHint: "leadics logo",
  },
];


const advisedCompanies = [
  { name: "Zomato", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png", alt: "Zomato logo", dataAiHint: "zomato logo" },
  { name: "Swiggy", logoUrl: "https://cdn.worldvectorlogo.com/logos/swiggy-logo-1.svg", alt: "Swiggy logo", dataAiHint: "swiggy logo" },
  { name: "Groww", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Groww_app_logo.png/640px-Groww_app_logo.png", alt: "Groww logo", dataAiHint: "groww logo" },
  { name: "Gupshup", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Logo_Gupshup.png", alt: "Gupshup logo", dataAiHint: "gupshup logo" },
  { name: "Cred", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9d/CRED-LOGO2.png", alt: "Cred logo", dataAiHint: "cred logo" },
  { name: "HealthifyMe", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Logo_of_HealthifyMe.png", alt: "HealthifyMe logo", dataAiHint: "healthifyme logo" },
  { name: "Builder.io", logoUrl: "https://logowik.com/content/uploads/images/builderio7580.logowik.com.webp", alt: "Builder.io logo", dataAiHint: "builder.io logo" },
  { name: "PhysicsWallah", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Physics_wallah_logo.svg", alt: "PhysicsWallah logo", dataAiHint: "physicswallah logo" },
  { name: "Dream11", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Dream11_logo.svg/2560px-Dream11_logo.svg.png", alt: "Dream11 logo", dataAiHint: "dream11 logo" },  
];

const publicTalks = [
  { 
    title: "Deploying Efficient PyTorch Models on Vertex AI", 
    youtubeUrl: "https://youtu.be/dR2J6Jqdszs", 
    description: "Deploying efficient PyTorch models on Vertex AI for production use.",
    videoId: "dR2J6Jqdszs" 
  },
  { 
    title: "LLM's Anywhere: Browser Deployment with Wasm & WebGPU", 
    youtubeUrl: "https://youtu.be/a_0NxMv9YCg", 
    description: "leveraging Wasm and WebGPU for deploying Single Layer Models (SLMs) directly within web browsers, eliminating the need for extensive cloud GPU clusters and reducing reliance on constant internet access.",
    videoId: "a_0NxMv9YCg" 
  },
  { 
    title: "Scaling Intelligence: Orchestrating Large Language Model Inference", 
    youtubeUrl: "https://youtu.be/cmN3zIMiBFE", 
    description: "deploying and orchestrating large open-source inference models on Kubernetes",
    videoId: "cmN3zIMiBFE" 
  },
  {
    title: "AI/ML Workloads Needs Extra Security", 
    youtubeUrl: "https://www.youtube.com/watch?v=0tWPqLeifPE", 
    description: "Securing AI/ML workloads in production.",
    videoId: "0tWPqLeifPE" 
  },
  {
    title: "Building a MLOps Platform with Kubeflow on GKE", 
    youtubeUrl: "https://www.youtube.com/watch?v=z1luvuetYxo", 
    description: "Building a MLOps platform using Kubeflow on GKE.",
    videoId: "z1luvuetYxo" 
  },
  {
    title: "Effortless Scalability: Orchestrating Large Language Model Inference on Kubernetes", 
    youtubeUrl: "https://www.youtube.com/watch?v=Tzmd78XuHgQ", 
    description: "Effortless scalability for large language model inference on Kubernetes.",
    videoId: "Tzmd78XuHgQ" 
  },
  {
    title: "Lets Build Serverless ML Applications", 
    youtubeUrl: "https://www.youtube.com/watch?v=8znFmdfE3b8", 
    description: "Building serverless ML applications using Vertex AI.",
    videoId: "8znFmdfE3b8" 
  },
  {
    title: "Responsible AI in Action: LLM Models and Ethical Best Practices", 
    youtubeUrl: "https://www.youtube.com/watch?v=q1uzoIk4IP8", 
    description: "Responsible AI in Action: LLM Models and Ethical Best Practices",
    videoId: "q1uzoIk4IP8" 
  },
  {
    title: "Scaling Intelligence:Kubernetes CRDs for Large Model Orchestration", 
    youtubeUrl: "https://www.youtube.com/watch?v=2nDFktWUl60", 
    description: "Scaling Intelligence:Kubernetes CRDs for Large Model Orchestration",
    videoId: "2nDFktWUl60" 
  }
];


export default function AboutPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <SectionHeading
        title="About Me"
        className="[&_.section-subtitle]:whitespace-nowrap"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        {/* Left column: Profile card above Work History timeline */}
        <div className="lg:col-span-1 flex flex-col gap-8 lg:gap-12 lg:sticky lg:top-24">
          {/* Profile Card */}
          <Card className="shadow-lg">
            <CardContent className="flex flex-col items-center text-center py-10">
              <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6">
                <Image
                  src="/joinal.jpg"
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
              <div className="flex space-x-4 mb-2 justify-center">
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:joinalahmed@gmail.com" aria-label="Email Joinal Ahmed">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com/in/joinalahmed" target="_blank" rel="noopener noreferrer" aria-label="Joinal Ahmed's LinkedIn Profile">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          {/* Work History Timeline */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <BriefcaseBusiness className="mr-3 h-6 w-6 text-primary" />
                Work History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative border-l-2 border-primary/30 pl-10 pr-2 py-4 space-y-12">
                {workHistory.map((job, index) => (
                  <div key={index} className="relative flex items-start gap-x-4 sm:gap-x-6">
                    <div className="absolute -left-[calc(2.5rem + 9px - 2px)] top-[6px] h-5 w-5 rounded-full bg-primary border-[3px] border-card shadow-md"></div>
                    {job.logoUrl && (
                      <div className="flex-shrink-0 pt-1">
                        <Image
                          src={job.logoUrl}
                          alt={`${job.company} logo`}
                          width={44}
                          height={44}
                          className="rounded-md object-contain bg-muted/20 p-1"
                          data-ai-hint={job.dataAiHint}
                        />
                      </div>
                    )}
                    <div className="flex-grow">
                      <h4 className="text-lg sm:text-xl font-semibold text-foreground leading-tight">{job.role}</h4>
                      <p className="text-base sm:text-md text-primary font-medium">{job.company}</p>
                      <p className="text-xs text-muted-foreground mb-1.5">{job.period}</p>
                      <p className="text-sm sm:text-base text-muted-foreground">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile, Journey, Skills, Talks, Advised Companies - right column */}
        <div className="lg:col-span-2 space-y-8">
         

          {/* Journey & Philosophy */}
          <Card className="shadow-lg">
            <CardHeader className="py-8">
              <CardTitle className="text-2xl">My Journey & Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                I am an innovative AI leader with over 8 years of experience leading cross-functional teams to deliver consumer-facing, ML-powered products. Combining deep technical expertise in AI/ML—including large language models, NLP, and computer vision—with a strong product strategy mindset, I excel at translating research breakthroughs into scalable, high-impact solutions. Adept at balancing product requirements with state-of-the-art research, I have a proven track record in driving product roadmaps, executing go-to-market strategies, and fostering collaborative, agile environments.
              led me through exciting roles at
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
                      className="marquee-item mx-4 w-36 h-24 p-3 bg-muted/30 rounded-lg hover:shadow-md transition-shadow flex items-center justify-center" // Added flex for centering
                      aria-hidden={index >= advisedCompanies.length ? "true" : undefined}
                    >
                      <Image
                        src={company.logoUrl}
                        alt={`${company.name} logo`}
                        width={120}
                        height={50} // Adjusted height
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
                and many more.
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

    
