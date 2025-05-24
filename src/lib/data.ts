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

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'the-future-of-ai-in-architecture',
    title: 'The Future of AI in Solution Architecture',
    excerpt: 'Exploring how artificial intelligence is reshaping the landscape of solution architecture, from design to deployment.',
    content: `
## Introduction

Artificial Intelligence (AI) is no longer a futuristic concept but a transformative force impacting various industries, and solution architecture is no exception. This post delves into the evolving role of AI in shaping how we design, build, and manage complex software systems.

## AI-Assisted Design

AI tools are emerging that can help architects in the initial design phases. These tools can:
- Analyze requirements and suggest optimal architectural patterns.
- Simulate system performance under various loads.
- Identify potential bottlenecks or security vulnerabilities early on.

\`\`\`python
# Example: AI suggesting a microservices pattern
def suggest_pattern(requirements):
  if requirements.get('scalability') == 'high' and \
     requirements.get('team_autonomy') == 'true':
    return "Microservices"
  return "Monolith"
\`\`\`

## Automated Code Generation & Review

Generative AI models can assist in writing boilerplate code or even entire modules based on specifications. Furthermore, AI-powered static analysis tools can provide more insightful code reviews, detecting subtle bugs or anti-patterns.

## Predictive Operations

AI can analyze system logs and metrics to predict potential failures or performance degradation, enabling proactive maintenance and self-healing systems. This leads to increased reliability and reduced operational overhead.
![AI Operations Dashboard](https://placehold.co/600x300.png)
*Caption: An example dashboard showing AI-driven operational insights.*

## Ethical Considerations

As AI becomes more integrated, architects must consider the ethical implications:
- Bias in AI models.
- Data privacy and security.
- Transparency and explainability of AI decisions.

## Conclusion

AI is set to revolutionize solution architecture, empowering architects with intelligent tools and insights. Embracing these changes will be key to building the next generation of robust, scalable, and intelligent systems.
    `,
    author: 'Joinal Ahmed',
    date: '2024-07-28T10:00:00Z',
    categories: ['AI', 'Architecture', 'Future Tech'],
    imageUrl: 'https://placehold.co/800x450.png',
    dataAiHint: 'futuristic architecture',
  },
  {
    id: '2',
    slug: 'mastering-llms-for-enterprise',
    title: 'Mastering Large Language Models for Enterprise Applications',
    excerpt: 'A guide to effectively integrating and managing LLMs within enterprise environments, focusing on security and scalability.',
    content: `
Large Language Models (LLMs) offer immense potential for enterprise applications, but their integration requires careful planning. This post covers key considerations for leveraging LLMs successfully.

### Key Challenges
- **Data Security:** Protecting sensitive enterprise data when using LLMs.
- **Scalability:** Ensuring LLM-powered applications can handle enterprise-level loads.
- **Cost Management:** Optimizing LLM usage to control operational expenses.
- **Customization:** Fine-tuning LLMs for specific business domains and tasks.

### Best Practices
1.  **Hybrid Approach:** Combine public LLMs with privately hosted, fine-tuned models for sensitive data.
2.  **Prompt Engineering:** Develop robust prompt engineering strategies to get consistent and accurate results.
3.  **Monitoring and Evaluation:** Continuously monitor LLM performance and user feedback.

\`\`\`javascript
// Example: API call to a private LLM endpoint
async function queryPrivateLLM(prompt, apiKey) {
  const response = await fetch('https://api.private-llm.example.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${apiKey}\`
    },
    body: JSON.stringify({ prompt: prompt, max_tokens: 150 })
  });
  return response.json();
}
\`\`\`

Stay tuned for more insights on building robust AI solutions!
    `,
    author: 'Joinal Ahmed',
    date: '2024-07-15T14:30:00Z',
    categories: ['LLM', 'Enterprise AI', 'NLP'],
    imageUrl: 'https://placehold.co/800x450.png',
    dataAiHint: 'network brain',
  },
];

// Helper function to get a blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return mockBlogPosts.find(post => post.slug === slug);
};

// Helper function to get a project by ID
export const getProjectById = (id: string): Project | undefined => {
  return mockProjects.find(project => project.id === id);
};
