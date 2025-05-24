import Image from 'next/image';
import Link from 'next/link';
import { getBlogPostBySlug, mockBlogPosts } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, UserCircle, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import type { Metadata } from 'next';

type BlogPostPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found - Archiblog'
    }
  }
  return {
    title: `${post.title} - Archiblog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Basic Markdown to HTML conversion (for <pre><code> and line breaks)
  // In a real app, use a proper Markdown parser like 'marked' or 'react-markdown'
  const renderContent = (content: string) => {
    // Replace ```lang\ncode``` with <pre><code class="language-lang">code</code></pre>
    let htmlContent = content.replace(/```(\w*)\n([\s\S]*?)```/g, (_match, lang, code) => {
        const languageClass = lang ? `language-${lang}` : '';
        // Basic HTML escaping for code content
        const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `<pre><code class="${languageClass}">${escapedCode.trim()}</code></pre>`;
    });
    // Replace inline `code` with <code>code</code>
    htmlContent = htmlContent.replace(/`([^`]+)`/g, '<code>$1</code>');
    // Replace newlines (not in pre/code) with <br />
    htmlContent = htmlContent.split('\n').map(paragraph => {
        if (paragraph.startsWith('<pre>')) return paragraph; // Don't add <br> to preformatted text
        return paragraph.trim() === '' ? '' : `<p>${paragraph}</p>`;
    }).join('');

    return { __html: htmlContent };
  };


  return (
    <div className="container-readable py-8">
      <Button variant="outline" asChild className="mb-8 group transition-all">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
        </Link>
      </Button>

      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CalendarDays className="mr-1.5 h-4 w-4" />
              <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center">
              <UserCircle className="mr-1.5 h-4 w-4" />
              <span>By {post.author}</span>
            </div>
          </div>
          {post.categories.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="h-4 w-4 text-muted-foreground" />
              {post.categories.map((category) => (
                <Badge key={category} variant="secondary" className="bg-accent/50 text-accent-foreground">
                  {category}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {post.imageUrl && (
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.dataAiHint}
              priority
            />
          </div>
        )}

        <div
          className="prose prose-lg dark:prose-invert max-w-none prose-p:text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-foreground"
          dangerouslySetInnerHTML={renderContent(post.content)}
        />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return mockBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}
