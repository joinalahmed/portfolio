'use server';

import { z } from 'zod';
import { generateBlogTitleSuggestions as genAITitles } from '@/ai/flows/generate-blog-title-suggestions';
import type { GenerateBlogTitleSuggestionsOutput } from '@/ai/flows/generate-blog-title-suggestions';

// Contact Form
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // In a real app, you would send an email or save to a database here.
  console.log("Contact Form Submission:", validatedFields.data);

  return {
    message: "Message sent successfully! Thank you for reaching out.",
    success: true,
  };
}


// Blog Post Creation
const BlogPostSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters."),
  content: z.string().min(50, "Content must be at least 50 characters."),
  imageUrl: z.string().url("Invalid image URL.").optional().or(z.literal('')),
  tags: z.string().optional(), // Comma-separated tags
});

export type BlogPostFormState = {
  message: string;
  errors?: {
    title?: string[];
    content?: string[];
    imageUrl?: string[];
    tags?: string[];
  };
  success: boolean;
  createdPostId?: string;
};

export async function createBlogPostAction(
  prevState: BlogPostFormState,
  formData: FormData
): Promise<BlogPostFormState> {
  const validatedFields = BlogPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
    imageUrl: formData.get('imageUrl'),
    tags: formData.get('tags'),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { title, content, imageUrl, tags } = validatedFields.data;
  const categories = tags ? tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
  
  // In a real app, save to a database. For now, log and simulate.
  const newPost = {
    id: Date.now().toString(), // Mock ID
    slug: title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''), // Mock slug
    title,
    content,
    excerpt: content.substring(0, 150) + '...', // Mock excerpt
    author: 'AI Architect', // Mock author
    date: new Date().toISOString(),
    categories,
    imageUrl: imageUrl || undefined,
  };

  console.log("New Blog Post Created:", newPost);
  // You might want to add this to your mockBlogPosts array if testing locally,
  // but server actions are stateless in this context unless you persist data.

  return {
    message: `Blog post "${title}" created successfully!`,
    success: true,
    createdPostId: newPost.id, // Or slug
  };
}

// AI Title Suggestion
export async function generateTitles(blogTopic: string): Promise<GenerateBlogTitleSuggestionsOutput> {
  if (!blogTopic.trim()) {
    return { suggestedTitles: [] };
  }
  try {
    const result = await genAITitles({ blogTopic });
    return result;
  } catch (error) {
    console.error("Error generating titles:", error);
    return { suggestedTitles: [] }; // Or throw a custom error
  }
}
