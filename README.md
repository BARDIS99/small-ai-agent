# Small AI Agent

Simple free AI chatbot. Runs on Vercel. Uses free Groq API.

## Setup

1. Get free Groq key: https://console.groq.com/keys
2. Clone repo
3. `npm install`
4. Create `.env.local`:
   ```
   GROQ_API_KEY=your_key_here
   ```
5. `npm run dev`

## Deploy to Vercel

1. Import this repo on Vercel
2. Add env var `GROQ_API_KEY`
3. Deploy

Optional Supabase (chat history later): add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.