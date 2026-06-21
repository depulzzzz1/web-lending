'use server';
/**
 * @fileOverview An AI agent that optimizes multi-step workflows.
 *
 * - aiWorkflowPathOptimization - A function that handles the workflow path optimization process.
 * - AiWorkflowPathOptimizationInput - The input type for the aiWorkflowPathOptimization function.
 * - AiWorkflowPathOptimizationOutput - The return type for the aiWorkflowPathOptimization function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WorkflowStepSchema = z.object({
  id: z.string().describe('Unique identifier for the workflow step.'),
  name: z.string().describe('Human-readable name of the step.'),
  type: z.string().describe('Type of the step (e.g., "trigger", "action", "condition", "sub-workflow").'),
  description: z.string().describe('Detailed description of what the step does.'),
  dependencies: z.array(z.string()).optional().describe('IDs of other steps this step depends on.'),
  outputs: z.array(z.string()).optional().describe('Key data points or results produced by this step.'),
});

const AiWorkflowPathOptimizationInputSchema = z.object({
  workflowDefinition: z.string().describe('A high-level textual description of the overall workflow goal.'),
  steps: z.array(WorkflowStepSchema).describe('An array of detailed definitions for each step in the workflow.'),
});
export type AiWorkflowPathOptimizationInput = z.infer<typeof AiWorkflowPathOptimizationInputSchema>;

const OptimizedWorkflowStepSchema = z.object({
  id: z.string().describe('The ID of the original workflow step.'),
  name: z.string().describe('The name of the original workflow step.'),
  order: z.number().describe('The suggested sequential order for this step in the optimized path. Steps with the same order can be run in parallel.'),
});

const AiWorkflowPathOptimizationOutputSchema = z.object({
  optimizedPath: z.array(OptimizedWorkflowStepSchema).describe('An ordered list of workflow steps representing the most efficient execution path.'),
  rationale: z.string().describe('A detailed explanation for the suggested optimization, highlighting efficiency improvements.'),
  efficiencyMetrics: z.record(z.any()).optional().describe('Optional metrics related to the efficiency improvement (e.g., estimated time saved, reduced steps).'),
});
export type AiWorkflowPathOptimizationOutput = z.infer<typeof AiWorkflowPathOptimizationOutputSchema>;

export async function aiWorkflowPathOptimization(input: AiWorkflowPathOptimizationInput): Promise<AiWorkflowPathOptimizationOutput> {
  return aiWorkflowPathOptimizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeWorkflowPathPrompt',
  input: { schema: AiWorkflowPathOptimizationInputSchema },
  output: { schema: AiWorkflowPathOptimizationOutputSchema },
  prompt: `You are an intelligent automation engine for DEPMQ, specializing in optimizing complex multi-step workflows. Your goal is to analyze a given workflow definition and its individual steps, then suggest the most efficient execution path.

Efficiency is defined by:
- Minimizing redundant or unnecessary steps.
- Parallelizing independent steps where possible to reduce overall execution time.
- Ensuring all step dependencies are logically met before execution.
- Simplifying complex conditional logic for clearer, faster processing.
- Reducing resource consumption or potential failure points.

Analyze the following workflow:

Overall Workflow Goal: {{{workflowDefinition}}}

Workflow Steps:
{{#each steps}}
Step ID: {{{id}}}
Name: {{{name}}}
Type: {{{type}}}
Description: {{{description}}}
{{#if dependencies}}Dependencies: {{#each dependencies}}[{{{this}}}] {{/each}}{{else}}Dependencies: None{{/if}}
{{#if outputs}}Outputs: {{#each outputs}}[{{{this}}}] {{/each}}{{else}}Outputs: None{{/if}}
---
{{/each}}

Based on the overall goal and the detailed descriptions of each step, provide an optimized execution path. The optimized path should be an ordered list of step IDs from the provided steps, and each step should include its original name and a suggested execution order. Steps with the same 'order' value should be considered eligible for parallel execution.

Also, provide a detailed rationale for your optimization, explaining why this path is more efficient, referencing specific steps and dependencies where relevant. Do not invent new steps or modify the core functionality of existing ones; only reorder or suggest omitting redundant steps if clearly implied by the goal and other steps.`,
});

const aiWorkflowPathOptimizationFlow = ai.defineFlow(
  {
    name: 'aiWorkflowPathOptimizationFlow',
    inputSchema: AiWorkflowPathOptimizationInputSchema,
    outputSchema: AiWorkflowPathOptimizationOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  },
);
