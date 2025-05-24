import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle, Edit3 } from 'lucide-react';
import { format } from 'date-fns';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      {post.imageUrl && (
         <Link href={`/blog/${post.slug}`} aria-label={`Read more about ${post.title}`}>
          <div className="relative w-full h-56">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              data-ai-hint={post.dataAiHint}
            />
          </div>
        </Link>
      )}
      <CardHeader>
        <Link href={`/blog/${post.slug}`}>
          <CardTitle className="text-xl hover:text-primary transition-colors">{post.title}</CardTitle>
        </Link>
        <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-2">
          <div className="flex items-center">
            <CalendarDays className="mr-1.5 h-4 w-4" />
            {format(new Date(post.date), 'MMM d, yyyy')}
          </div>
          <div className="flex items-center">
            <UserCircle className="mr-1.5 h-4 w-4" />
            {post.author}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="line-clamp-3 h-[3.75rem]">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 pt-4 border-t">
        {post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <Badge key={category} variant="outline" className="text-xs border-primary/50 text-primary">
                {category}
              </Badge>
            ))}
          </div>
        )}
        <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline flex items-center">
          Read More <Edit3 className="ml-1.5 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
