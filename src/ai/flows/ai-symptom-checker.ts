'use server';

/**
 * @fileOverview An AI-powered symptom checker flow.
 *
 * - aiSymptomChecker - A function that takes a list of symptoms and returns a list of potential conditions and relevant specialists.
 * - AISymptomCheckerInput - The input type for the aiSymptomChecker function.
 * - AISymptomCheckerOutput - The return type for the aiSymptomChecker function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AISymptomCheckerInputSchema = z.object({
  symptoms: z.string().describe('A comma-separated list of symptoms.'),
});
export type AISymptomCheckerInput = z.infer<typeof AISymptomCheckerInputSchema>;

const AISymptomCheckerOutputSchema = z.object({
  conditions: z
    .array(z.string())
    .describe('A list of potential medical conditions based on the symptoms.'),
  relevantSpecialists: z
    .array(z.string())
    .describe('A list of medical specialists relevant to the potential conditions.'),
});
export type AISymptomCheckerOutput = z.infer<typeof AISymptomCheckerOutputSchema>;

export async function aiSymptomChecker(input: AISymptomCheckerInput): Promise<AISymptomCheckerOutput> {
  return aiSymptomCheckerFlow(input);
}

const aiSymptomCheckerPrompt = ai.definePrompt({
  name: 'aiSymptomCheckerPrompt',
  input: {schema: AISymptomCheckerInputSchema},
  output: {schema: AISymptomCheckerOutputSchema},
  prompt: `You are a medical expert specializing in identifying potential conditions and relevant specialists based on a list of symptoms.

  Based on the following symptoms: {{{symptoms}}}

  Provide a list of potential medical conditions and a list of relevant medical specialists.  Make a determination as to whether or not each specialist is relevant to the listed conditions.
  `,
});

const aiSymptomCheckerFlow = ai.defineFlow(
  {
    name: 'aiSymptomCheckerFlow',
    inputSchema: AISymptomCheckerInputSchema,
    outputSchema: AISymptomCheckerOutputSchema,
  },
  async input => {
    const {output} = await aiSymptomCheckerPrompt(input);
    return output!;
  }
);
