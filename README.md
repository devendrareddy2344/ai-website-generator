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
- Google Gemini 1.5 Flash

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

yaml
Copy code

---

## ⚙️ Setup Instructions (Local)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/gensite-ai.git
cd gensite-ai
2️⃣ Backend Setup
bash
Copy code
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
Create a .env file:

env
Copy code
GEMINI_API_KEY=your_api_key_here
Run the backend:

bash
Copy code
uvicorn main:app --reload
Backend runs at:

arduino
Copy code
http://localhost:8000
3️⃣ Frontend Setup
bash
Copy code
cd frontend/gensite-react
npm install
npm run dev
Frontend runs at:

arduino
Copy code
http://localhost:5173
🔌 API Reference
POST /generate
Request Body

json
Copy code
{
  "text": "Create a modern portfolio website with a dark theme"
}
Response

json
Copy code
{
  "fullCode": "<!DOCTYPE html>...</html>"
}
🧪 Example Prompt
css
Copy code
Create a modern startup landing page with a gradient hero section, feature cards, testimonials, and a contact form.
🔐 Security
API keys are stored in .env files

.env is excluded from version control using .gitignore

Generated HTML is rendered securely inside a sandboxed iframe

🚀 Deployment
Backend deployed on Render

Frontend deployed on Vercel

The frontend communicates with the deployed backend API to generate and preview websites in real time.

🎯 Use Cases
Rapid website prototyping

Portfolio generation

Startup landing pages

Learning GenAI + Full-Stack development

Internship and academic projects

📌 Future Enhancements
Dark / Light mode toggle

Download generated website as ZIP

Prompt history and regeneration

Authentication and user accounts

Custom themes

👨‍💻 Author
Devendra Krishna
AI & Full-Stack Developer

⭐ Acknowledgements
Google Gemini AI

FastAPI

React & Vite

yaml
Copy code

---

If you want next:
- 📸 **Add screenshots section**
- 📄 **Create `.env.example`**
- 🧾 **Resume-ready project summary**
- 🌐 **Live demo link section**

Just say 👍






