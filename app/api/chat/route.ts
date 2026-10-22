import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('llama-3.3-70b-versatile', {
      baseURL: 'https://api.groq.com/openai/v1',
      apiKey: process.env.GROQ_API_KEY,
    }),
    messages,
    system: 'You are a helpful, concise AI agent.',
  });

  return result.toDataStreamResponse();
}