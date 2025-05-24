import Link from 'next/link';
import { BlogPostCard } from '@/components/blog/blog-post-card';
import { SectionHeading } from '@/components/shared/section-heading';
import { mockBlogPosts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Joinal Ahmed',
  description: 'Insights and articles on AI, architecture, and technology from Joinal Ahmed.',
};

export default function BlogListPage() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <SectionHeading
          title="The Blog"
          subtitle="Sharing insights, tutorials, and thoughts on the ever-evolving landscape of AI and software architecture."
          className="mb-0"
        />
        <Button asChild className="flex-shrink-0">
          <Link href="/blog/create">
            <PlusCircle className="mr-2 h-5 w-5" />
            Create New Post
          </Link>
        </Button>
      </div>
      
      {mockBlogPosts.length === 0 ? (
        <p className="text-center text-muted-foreground text-lg py-12">
          No blog posts yet. Stay tuned for updates!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBlogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
