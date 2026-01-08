# 🚀 GenSite AI — AI Website Generator

GenSite AI is a full-stack AI-powered web application that generates modern, responsive websites from natural language prompts.  
Users describe the type of website they want, and the system automatically builds and previews a complete website in real time.

---

## ✨ Features

- 🧠 AI-powered website generation using Google Gemini
- 🖥️ Live website preview rendered inside a sandboxed iframe
- 🎨 Modern, attractive UI with chat-based interaction
- ⚡ FastAPI backend for high-performance API handling
- ⚛️ React + Vite frontend for smooth UX
- 🔄 Loading animations and graceful error handling
- 🔐 Secure API key management using environment variables
- 📱 Mobile-first, responsive websites generated automatically

---

## 🏗️ System Architecture

User (Browser)
│
▼
React Frontend (Vite)
│ POST /generate
▼
FastAPI Backend
│
▼
Google Gemini AI
│
▼
Generated HTML Website
│
▼
Live Preview (iframe)

yaml
Copy code

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- CSS
- Fetch API

### Backend
- Python
- FastAPI
- Uvicorn
- google-genai

### AI Model
- Google Gemini 2.5 Flash

---

## 📁 Project Structure

gensite-ai/
│
├── backend/
│ ├── main.py
│ ├── gemini_service.py
│ ├── requirements.txt
│ └── .env
│
├── frontend/
│ └── gensite-react/
│ ├── index.html
│ ├── package.json
│ ├── vite.config.js
│ └── src/
│ ├── main.jsx
│ ├── App.jsx
│ ├── index.css
│ └── components/
│ ├── ChatPanel.jsx
│ ├── PreviewPanel.jsx
│ └── Loader.jsx
│
├── .gitignore
└── README.md





