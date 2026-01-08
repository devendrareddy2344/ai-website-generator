import { useState } from "react";
import ChatPanel from "./components/ChatPanel";
import PreviewPanel from "./components/PreviewPanel";
import "./styles/main.css";

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "👋 Hi! Describe the website you want and I’ll build it instantly.",
    },
  ]);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const generateWebsite = async (prompt) => {
    setMessages((m) => [...m, { role: "user", text: prompt }]);
    setLoading(true);
    setCode("");

    const res = await fetch("http://localhost:8000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: prompt }),
    });

    const data = await res.json();
    setCode(data.fullCode);
    setMessages((m) => [
      ...m,
      { role: "ai", text: "✨ Your website is ready! Preview it on the right." },
    ]);
    setLoading(false);
  };

  return (
    <div className="layout">
      <ChatPanel
        messages={messages}
        onGenerate={generateWebsite}
        loading={loading}
      />
      <PreviewPanel code={code} loading={loading} />
    </div>
  );
}
