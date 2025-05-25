import Link from 'next/link';
import { CalendarDays, ExternalLink, Users, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'AI Converge - Meetups & Events',
  description: 'Discover all AI Converge meetups and events. Join the community and stay updated on upcoming events, workshops, and networking opportunities.',
};

const upcomingEvents = [
  {
    title: 'Agentic Afterparty: Protocol Remix - Rerun',
    date: '2025-06-15',
    location: 'Bangalore, India',
    description: 'Join us for a deep dive into Agentic AI and Application-to-Application (A2A) integration, exploring how these technologies are redefining enterprise automation and multi-agent collaboration. This two-session event combines technical insights, real-world use cases, and hands-on demos to empower developers and AI practitioners.',
    link: 'https://lu.ma/gpzy0fhz',
  },
  {
    title: 'Beyond the Black Box: Demystifying Agentic AI with Weights & Biases',
    date: '2025-07-10',
    location: 'Bangalore, India',
    description: 'A dynamic meetup exploring the cutting edge of AI agentic workflows! This collaborative event with Weights & Biases dives into the design and implementation of autonomous AI systems, traceability, and reliability in production. Includes sessions on agentic workflows, MCP, A2A, and monitoring with W&B.',
    link: 'https://lu.ma/hrmt0kne',
  },
];

const pastEvents = [
  {
    title: 'Agentic Afterparty: Protocol Remix',
    date: '2024-05-10', // Example date, update if known
    location: 'Bangalore, India',
    description: 'A deep dive into Agentic AI and Application-to-Application (A2A) integration, redefining enterprise automation and multi-agent collaboration. Technical insights, real-world use cases, and hands-on demos for developers and AI practitioners.',
    link: 'https://lu.ma/oodttw1z',
  },
  {
    title: 'Beyond RAG',
    date: '2024-04-20', // Example date, update if known
    location: 'Bangalore, India',
    description: 'An in-depth exploration of the latest advancements in Retrieval Augmented Generation (RAG), including Graph RAG and Multimodal RAG. Industry experts shared best practices, real-world applications, and future directions.',
    link: 'https://lu.ma/9333arde',
  },
  {
    title: 'Let\'s Build Agents !',
    date: '2024-03-16', // Example date, update if known
    location: 'Bangalore, India',
    description: 'A hands-on meetup on LLM-Based Autonomous Agents, featuring Google Cloud AI Engineers and Developer Advocates. Attendees learned about agent design, automation, and connected with experts in the field.',
    link: 'https://lu.ma/aju16bxm',
  },
  {
    title: 'Bangalore Engineering Leaders Meetup',
    date: "2024-02-23", // Example date, update if known
    location: 'Bangalore, India',
    description: 'An exclusive coffee meetup for engineering leaders to network, discuss leadership, innovation, and the future of engineering. Included a keynote, breakout discussions, and premium networking experience.',
    link: 'https://lu.ma/5pww5e9j',
  },
];

export default function AIConvergePage() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-blue-950 via-background to-background pb-16">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto pt-16 pb-10 px-4 flex flex-col items-center text-center">
        <span className="inline-flex items-center justify-center mb-4 rounded-full bg-blue-900/80 p-4 shadow-lg">
          <Sparkles className="h-10 w-10 text-yellow-400 animate-pulse" />
        </span>
        <h1 className="text-5xl font-extrabold text-primary drop-shadow mb-3 tracking-tight">AI Converge</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-6">
          AI Converge is a community initiative with my friends , bringing together AI enthusiasts, professionals, and industry leaders through meetups, workshops, and networking events. Join us to learn, share, and grow in the world of AI!
        </p>
        <Link href="https://www.linkedin.com/company/79139424/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition shadow-lg mb-4">
          <ExternalLink className="h-5 w-5" />
          Follow AI Converge on LinkedIn
        </Link>
        <div className="flex flex-wrap gap-6 justify-center mt-2">
          <div className="flex flex-col items-center">
            <Users className="h-7 w-7 text-green-400 mb-1" />
            <span className="font-bold text-lg text-foreground">5000+</span>
            <span className="text-xs text-muted-foreground">Community Members</span>
          </div>
          <div className="flex flex-col items-center">
            <CalendarDays className="h-7 w-7 text-blue-400 mb-1" />
            <span className="font-bold text-lg text-foreground">25+</span>
            <span className="text-xs text-muted-foreground">Events Organized</span>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-primary">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {upcomingEvents.map((event: typeof upcomingEvents[0], idx: number) => (
            <div key={idx} className="rounded-2xl border border-border bg-card/90 p-6 shadow-lg hover:shadow-xl transition group relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2 text-primary font-semibold">
                <CalendarDays className="h-5 w-5 mr-1" />
                <span>{event.date}</span>
                <span className="text-xs text-muted-foreground">| {event.location}</span>
              </div>
              <div className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition">{event.title}</div>
              <div className="text-muted-foreground mb-3">{event.description}</div>
              {event.link && (
                <Link href={event.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-blue-600 hover:underline font-medium">Event Details</Link>
              )}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-200/30 to-transparent rounded-full blur-2xl opacity-70 pointer-events-none" />
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4 text-primary">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastEvents.map((event: typeof pastEvents[0], idx: number) => (
            <div key={idx} className="rounded-2xl border border-border bg-card/70 p-6 shadow-md group relative overflow-hidden opacity-90">
              <div className="flex items-center gap-2 mb-2 text-primary font-semibold">
                <CalendarDays className="h-5 w-5 mr-1" />
                <span>{event.date}</span>
                <span className="text-xs text-muted-foreground">| {event.location}</span>
              </div>
              <div className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition">{event.title}</div>
              <div className="text-muted-foreground mb-3">{event.description}</div>
              {event.link && (
                <Link href={event.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-blue-600 hover:underline font-medium">Event Details</Link>
              )}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-200/30 to-transparent rounded-full blur-2xl opacity-70 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
