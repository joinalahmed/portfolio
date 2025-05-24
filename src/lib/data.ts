import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Project, BlogPost } from './types';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Predictive Maintenance',
    description: 'Developed a system to predict machinery failures using sensor data and machine learning.',
    longDescription: 'This project involved collecting and processing large volumes of time-series data from industrial sensors. We designed and implemented a machine learning pipeline using LSTMs and anomaly detection algorithms to predict potential equipment failures, reducing downtime by 20%. The solution was deployed on a cloud platform ensuring scalability and real-time monitoring.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'industrial machinery',
    technologies: ['Python', 'TensorFlow', 'AWS', 'Kafka', 'Docker'],
    projectUrl: '#',
  },
  {
    id: '2',
    title: 'Natural Language Q&A System',
    description: 'Built an NLP-based system for answering questions from a large knowledge base.',
    longDescription: 'The goal was to create an intelligent Q&A system capable of understanding natural language queries and retrieving precise answers from a vast corpus of documents. We utilized transformer models (BERT) for semantic understanding and integrated a vector database for efficient similarity search. The system achieved an F1 score of 0.85 on a domain-specific dataset.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'nlp chatbot',
    technologies: ['Python', 'PyTorch', 'Hugging Face Transformers', 'Elasticsearch', 'FastAPI'],
    repoUrl: '#',
  },
  {
    id: '3',
    title: 'Automated Content Generation Platform',
    description: 'Architected a platform using generative AI to create marketing copy and articles.',
    longDescription: 'This platform leverages state-of-the-art generative models (like GPT-3) to produce high-quality, contextually relevant content for various marketing needs. It includes features for style customization, plagiarism checking, and integration with CMS platforms. The architecture focused on modularity and scalability, allowing for easy updates to new AI models.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'ai writing',
    technologies: ['Node.js', 'OpenAI API', 'React', 'GraphQL', 'Kubernetes'],
    projectUrl: '#',
  },
];

// Helper function to get a project by ID
export const getProjectById = (id: string): Project | undefined => {
  return mockProjects.find(project => project.id === id);
};

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getAllBlogPosts(): BlogPost[] {
  let fileNames: string[];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (error) {
    // If the directory doesn't exist or is inaccessible, log a warning and return an empty array
    console.warn(`Warning: Could not read 'src/content/blog' directory. Error: ${(error as Error).message}. No blog posts will be loaded.`);
    return [];
  }

  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Validate required frontmatter fields
        if (!data.title || !data.date || !data.author || !data.excerpt) {
          console.warn(`Markdown file '${fileName}' is missing one or more required frontmatter fields (title, date, author, excerpt). Skipping this post.`);
          return null;
        }
        
        // Validate date specifically before trying to convert
        const dateObject = new Date(data.date);
        if (isNaN(dateObject.getTime())) {
            console.warn(`Markdown file '${fileName}' has an invalid date string: '${data.date}'. Skipping this post.`);
            return null;
        }

        return {
          id: slug,
          slug,
          title: data.title,
          content,
          excerpt: data.excerpt,
          author: data.author,
          date: dateObject.toISOString(), // Ensure consistent date format
          categories: data.categories || [],
          imageUrl: data.imageUrl,
          dataAiHint: data.dataAiHint,
        } as BlogPost;
      } catch (error) {
        console.warn(`Error reading or parsing markdown file '${fileName}': ${(error as Error).message}. Skipping this post.`);
        return null;
      }
    });

  const validPosts = allPostsData.filter(post => post !== null) as BlogPost[];

  // Sort posts by date in descending order
  return validPosts.sort((a, b) => {
    // Dates are already ISO strings, so new Date() is correct here
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else if (new Date(a.date) > new Date(b.date)) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Validate required frontmatter fields
    if (!data.title || !data.date || !data.author || !data.excerpt) {
        console.warn(`Markdown file '${slug}.md' for getBlogPostBySlug is missing one or more required frontmatter fields (title, date, author, excerpt).`);
        return undefined;
    }

    const dateObject = new Date(data.date);
    if (isNaN(dateObject.getTime())) {
        console.warn(`Markdown file '${slug}.md' for getBlogPostBySlug has an invalid date string: '${data.date}'.`);
        return undefined;
    }

    return {
      id: slug,
      slug,
      title: data.title,
      content,
      excerpt: data.excerpt,
      author: data.author,
      date: dateObject.toISOString(),
      categories: data.categories || [],
      imageUrl: data.imageUrl,
      dataAiHint: data.dataAiHint,
    } as BlogPost;
  } catch (error) {
    // If file not found or other error
    console.warn(`Error reading or parsing markdown file '${slug}.md' for getBlogPostBySlug: ${(error as Error).message}.`);
    return undefined;
  }
}
