# 🚀 GenSite AI – AI-Powered Website Generator

## 📌 Project Overview
GenSite AI is a full-stack web application that converts natural language prompts into
modern, responsive, and visually stunning websites instantly using AI.

It uses the Google Gemini API to generate complete single-file HTML websites styled
with Tailwind CSS.

## 🌟 Key Features
- 🧠 Natural Language to Website Generation
- 🎨 AI-Driven UI/UX using Tailwind CSS
- 👀 Real-Time Live Preview (Iframe Sandbox)
- 💬 Interactive Chat-Based Interface
- 📱 Fully Responsive Websites
- ☁️ Cloud-Native Deployment

---

## 🏗 System Architecture

```mermaid
graph TD
    User([User Browser]) -->|Input Prompt| Frontend[React Frontend - Vercel]
    Frontend -->|POST /generate| Backend[FastAPI Backend - Render]
    Backend -->|System Prompt| Gemini[Google Gemini AI]
    Gemini -->|Generated HTML| Backend
    Backend -->|JSON Response| Frontend
    Frontend -->|Render Output| Preview[Live Preview Iframe]
---
website_generator/
├── backend/
│   ├── main.py              # FastAPI Application Entry
│   ├── gemini_service.py    # Gemini Prompt Engineering
│   └── requirements.txt     # Backend Dependencies
│
├── frontend/
│   └── gensite-react/
│       ├── src/
│       │   ├── components/  # Reusable UI Components
│       │   └── App.jsx      # Core Application Logic
│       ├── .env             # Frontend Environment Variables
│       └── package.json
│
└── README.md
1. Connect GitHub Repository
2. Select Web Service
3. Set Start Command:
   uvicorn main:app --host 0.0.0.0 --port 10000
4. Add Environment Variable:
   GEMINI_API_KEY
1. Connect GitHub Repository
2. Root Directory:
   frontend/gensite-react
3. Build Command:
   npm run build
4. Output Directory:
   dist
5. Environment Variable:
   VITE_API_URL=<Render Backend URL>
- .env files are ignored using .gitignore
- API keys are never exposed on the client side
- Secure CORS configuration enabled
- Optional HTML sanitization for iframe preview

Name: Devendra Reddy
Role: AI 
GitHub: https://github.com/
Portfolio: https://
- Multi-page website generation
- Theme and color customization
- Export to GitHub Pages
- Editable generated code
- User authentication and history


---

If you want, I can now:
- ✅ Convert this into **resume-ready project points**
- ✅ Write a **submission message for internship**
- ✅ Optimize it for **GitHub recruiters**

Just tell me 💡


