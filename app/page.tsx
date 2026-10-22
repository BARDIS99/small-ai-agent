'use client';

import { useChat } from 'ai/react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: 20 }}>
      <h1 style={{ fontSize: 24, marginBottom: 20 }}>Small AI Agent</h1>
      <div style={{ height: 400, overflowY: 'auto', border: '1px solid #333', borderRadius: 8, padding: 16, marginBottom: 16 }}>
        {messages.length === 0 && (
          <p style={{ color: '#888' }}>Ask anything...</p>
        )}
        {messages.map((m) => (
          <div key={m.id} style={{ marginBottom: 12 }}>
            <strong style={{ color: m.role === 'user' ? '#60a5fa' : '#4ade80' }}>
              {m.role === 'user' ? 'You' : 'Agent'}:
            </strong>
            <p style={{ margin: '4px 0 0', whiteSpace: 'pre-wrap' }}>{m.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
          disabled={isLoading}
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: 8,
            border: '1px solid #333',
            background: '#111',
            color: '#fff',
            fontSize: 16,
          }}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          style={{
            padding: '12px 20px',
            borderRadius: 8,
            border: 'none',
            background: '#2563eb',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          {isLoading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
}