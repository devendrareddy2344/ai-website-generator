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

    try {
      const res = await fetch(
        "https://ai-website-generator-y71o.onrender.com/generate",
        {
          method: "POST", // ✅ CORRECT METHOD
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: prompt }),
        }
      );

      if (!res.ok) {
        throw new Error("API request failed");
      }

      const data = await res.json();
      setCode(data.fullCode);

      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: "✨ Your website is ready! Preview it on the right.",
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: "⚠️ Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
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
