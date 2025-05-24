'use client';

import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SectionHeading } from '@/components/shared/section-heading';
import { AiTitleSuggester } from './components/ai-title-suggester';
import { createBlogPostAction, type BlogPostFormState } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, Loader2, Save } from 'lucide-react';
import type { Metadata } from 'next';

// Cannot export Metadata from client component.
// export const metadata: Metadata = {
//   title: 'Create New Post - Joinal Ahmed',
//   description: 'Create a new blog post for Joinal Ahmed.',
// };

const BlogPostSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  content: z.string().min(50, { message: "Content must be at least 50 characters." }),
  imageUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
  tags: z.string().optional(), // Comma-separated tags, e.g., "AI, Machine Learning, Cloud"
});

type BlogPostFormData = z.infer<typeof BlogPostSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Publishing...
        </>
      ) : (
        <>
          <Save className="mr-2 h-4 w-4" />
          Publish Post
        </>
      )}
    </Button>
  );
}

export default function CreateBlogPostPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [state, formAction] = useFormState<BlogPostFormState, FormData>(createBlogPostAction, {
    message: '',
    success: false,
  });

  const form = useForm<BlogPostFormData>({
    resolver: zodResolver(BlogPostSchema),
    defaultValues: {
      title: '',
      content: '',
      imageUrl: '',
      tags: '',
    },
  });

  const currentTitleForAISuggestion = form.watch('title');

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Success!',
          description: state.message,
        });
        form.reset();
        // Optionally redirect to the new post or blog list
        // router.push(state.createdPostId ? `/blog/${state.createdPostId}` : '/blog');
        router.push('/blog');
      } else {
        toast({
          title: 'Error Creating Post',
          description: state.message || 'An error occurred.',
          variant: 'destructive',
        });
      }
    }
  }, [state, toast, form, router]);

  useEffect(() => {
    if (state.errors?.title) form.setError('title', { type: 'server', message: state.errors.title.join(', ') });
    if (state.errors?.content) form.setError('content', { type: 'server', message: state.errors.content.join(', ') });
    if (state.errors?.imageUrl) form.setError('imageUrl', { type: 'server', message: state.errors.imageUrl.join(', ') });
    if (state.errors?.tags) form.setError('tags', { type: 'server', message: state.errors.tags.join(', ') });
  }, [state.errors, form]);

  const handleSelectTitle = (selectedTitle: string) => {
    form.setValue('title', selectedTitle, { shouldValidate: true });
  };

  return (
    <div className="space-y-12">
      <SectionHeading
        title="Create New Blog Post"
        subtitle="Share your knowledge and insights with the world. Use Markdown for formatting content."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <form action={formAction} className="lg:col-span-2 space-y-6 p-6 border rounded-lg shadow-xl bg-card">
          <div>
            <Label htmlFor="title" className="text-lg">Title</Label>
            <Input
              id="title"
              {...form.register('title')}
              className="mt-1 text-base"
              placeholder="Your engaging blog post title"
              aria-invalid={form.formState.errors.title ? "true" : "false"}
            />
            {form.formState.errors.title && (
              <p className="mt-1 text-sm text-destructive">{form.formState.errors.title.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="content" className="text-lg">Content (Markdown supported)</Label>
            <Textarea
              id="content"
              rows={15}
              {...form.register('content')}
              className="mt-1 text-base"
              placeholder="Write your blog post here. Use Markdown for formatting, e.g., ## Heading, *italic*, **bold**, `code`, ```python\nprint('Hello')\n```"
              aria-invalid={form.formState.errors.content ? "true" : "false"}
            />
            {form.formState.errors.content && (
              <p className="mt-1 text-sm text-destructive">{form.formState.errors.content.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="imageUrl" className="text-lg">Featured Image URL (Optional)</Label>
            <Input
              id="imageUrl"
              type="url"
              {...form.register('imageUrl')}
              className="mt-1 text-base"
              placeholder="https://example.com/your-image.png"
              aria-invalid={form.formState.errors.imageUrl ? "true" : "false"}
            />
             {form.formState.errors.imageUrl && (
              <p className="mt-1 text-sm text-destructive">{form.formState.errors.imageUrl.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="tags" className="text-lg">Tags (Comma-separated)</Label>
            <Input
              id="tags"
              {...form.register('tags')}
              className="mt-1 text-base"
              placeholder="e.g., AI, Machine Learning, Cloud Architecture"
              aria-invalid={form.formState.errors.tags ? "true" : "false"}
            />
            {form.formState.errors.tags && (
              <p className="mt-1 text-sm text-destructive">{form.formState.errors.tags.message}</p>
            )}
          </div>
          
          <SubmitButton />
        </form>

        <div className="lg:col-span-1 space-y-6 sticky top-24">
          <AiTitleSuggester onSelectTitle={handleSelectTitle} currentTopic={currentTitleForAISuggestion} />
        </div>
      </div>
    </div>
  );
}
