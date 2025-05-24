import Link from 'next/link';
import { BlogPostCard } from '@/components/blog/blog-post-card';
import { SectionHeading } from '@/components/shared/section-heading';
import { getAllBlogPosts } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Joinal Ahmed',
  description: 'Insights and articles on AI, architecture, and technology from Joinal Ahmed.',
};

export default async function BlogListPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="space-y-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <SectionHeading
          title="The Blog"
          subtitle="Sharing insights, tutorials, and thoughts on the ever-evolving landscape of AI and software architecture."
          className="mb-0"
        />
      </div>
      
      {posts.length === 0 ? (
        <div className="text-center text-muted-foreground text-lg py-12">
          <p>No blog posts yet. Create your first post in the <code>src/content/blog/</code> directory!</p>
          <p className="text-sm mt-2">(e.g., <code>src/content/blog/my-first-post.md</code>)</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
