import { useState } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatPanel({ messages, onGenerate, loading }) {
  const [input, setInput] = useState("");

  return (
    <aside className="chat-panel">
      <header className="chat-header">
        ✨ <span>GenSite AI</span>
      </header>

      <div className="chat-body">
        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} text={m.text} />
        ))}
      </div>

      <footer className="chat-input">
        <textarea
          placeholder="Describe your website…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={loading || !input.trim()}
          onClick={() => {
            onGenerate(input);
            setInput("");
          }}
        >
          {loading ? "Building…" : "Generate"}
        </button>
      </footer>
    </aside>
  );
}
