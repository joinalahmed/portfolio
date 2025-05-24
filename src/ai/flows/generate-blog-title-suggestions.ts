'use server';
/**
 * @fileOverview A blog title suggestion AI agent.
 *
 * - generateBlogTitleSuggestions - A function that generates blog title suggestions.
 * - GenerateBlogTitleSuggestionsInput - The input type for the generateBlogTitleSuggestions function.
 * - GenerateBlogTitleSuggestionsOutput - The return type for the generateBlogTitleSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogTitleSuggestionsInputSchema = z.object({
  blogTopic: z.string().describe('The topic of the blog post.'),
});
export type GenerateBlogTitleSuggestionsInput = z.infer<
  typeof GenerateBlogTitleSuggestionsInputSchema
>;

const GenerateBlogTitleSuggestionsOutputSchema = z.object({
  suggestedTitles: z
    .array(z.string())
    .describe('An array of suggested blog titles.'),
});
export type GenerateBlogTitleSuggestionsOutput = z.infer<
  typeof GenerateBlogTitleSuggestionsOutputSchema
>;

export async function generateBlogTitleSuggestions(
  input: GenerateBlogTitleSuggestionsInput
): Promise<GenerateBlogTitleSuggestionsOutput> {
  return generateBlogTitleSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogTitleSuggestionsPrompt',
  input: {schema: GenerateBlogTitleSuggestionsInputSchema},
  output: {schema: GenerateBlogTitleSuggestionsOutputSchema},
  prompt: `You are a blog title expert, skilled at crafting engaging titles that drive readership.

  Given the topic of the blog post, suggest 5 alternative blog titles.

  Topic: {{{blogTopic}}} `,
});

const generateBlogTitleSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateBlogTitleSuggestionsFlow',
    inputSchema: GenerateBlogTitleSuggestionsInputSchema,
    outputSchema: GenerateBlogTitleSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
