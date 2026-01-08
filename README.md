# 🚀 GenSite AI – AI-Powered Website Generator

GenSite AI is a full-stack web application that transforms natural language prompts into **modern, responsive, and visually stunning websites** instantly. By leveraging the Google Gemini API, it generates complete single-file HTML solutions styled with Tailwind CSS.

---

## 🌟 Key Features

* **🧠 Natural Language to Web**: Converts simple descriptions into functional websites.
* **🎨 AI-Driven Design**: Uses Gemini to generate clean UI/UX with Tailwind CSS utility classes.
* **👀 Real-time Preview**: Features an integrated iframe sandbox for instant viewing.
* **💬 Interactive Chat**: A conversational interface for a seamless user experience.
* **📱 Fully Responsive**: Generated sites are mobile-friendly by default.
* **☁️ Cloud Native**: Fully deployed on Vercel (Frontend) and Render (Backend).

---

## 🏗 System Architecture

```mermaid
graph TD
    User([User Browser]) -->|Input Prompt| Frontend[React Frontend - Vercel]
    Frontend -->|POST /generate| Backend[FastAPI Backend - Render]
    Backend -->|System Prompt| Gemini[Google Gemini AI]
    Gemini -->|Generated HTML| Backend
    Backend -->|JSON Response| Frontend
    Frontend -->|Render| Preview[Live Preview Iframe]
🧱 Tech StackComponentTechnologyFrontendReact.js (Vite), Tailwind CSS, Fetch APIBackendFastAPI (Python 3.12)AI EngineGoogle Gemini 1.5 Flash / ProDeploymentVercel (Frontend), Render (Backend)🗂 Project StructurePlaintextwebsite_generator/
├── backend/
│   ├── main.py              # FastAPI Application
│   ├── gemini_service.py    # AI Prompt Engineering
│   └── requirements.txt     # Python Dependencies
├── frontend/
│   └── gensite-react/
│       ├── src/
│       │   ├── components/  # UI Components
│       │   └── App.jsx      # Main Logic
│       ├── .env             # API Configuration
│       └── package.json
└── README.md
🚀 Getting Started1. Backend SetupBashcd backend
python -m venv venv
# Windows
source venv/Scripts/activate 
# Mac/Linux
source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload
2. Frontend SetupBashcd frontend/gensite-react
npm install
npm run dev
⚙️ Environment VariablesCreate a .env file in the respective directories:Backend (/backend/.env):Code snippetGEMINI_API_KEY=your_google_gemini_api_key
Frontend (/frontend/gensite-react/.env):Code snippetVITE_API_URL=http://localhost:8000
🔌 API EndpointsPOST /generateGenerates website code based on user prompt.Request Body:JSON{
  "text": "Create a modern portfolio website for a photographer with a dark theme"
}
Response:JSON{
  "fullCode": "<!DOCTYPE html>..."
}
🌍 DeploymentBackend (Render)Connect your GitHub repo.Select Web Service.Start Command: uvicorn main:app --host 0.0.0.0 --port 10000Add GEMINI_API_KEY in Environment Variables.Frontend (Vercel)Connect GitHub repo.Set Root Directory to frontend/gensite-react.Add VITE_API_URL (your Render URL) to Environment Variables.Build Command: npm run build | Output Directory: dist.🛡 Security & Best Practices.env files are ignored via .gitignore to prevent API key leaks.CORS (Cross-Origin Resource Sharing) is configured for secure communication between Frontend and Backend.Use of HTML sanitization (if applicable) for the iframe preview.👨‍💻 AuthorDevendra Krishna AI / Full-Stack Developer GitHub | PortfolioThis project was developed for educational and internship assessment purposes.
---

### What would you like to do next?
* **Would you like me to write a high-impact "Project Experience" section for your resume based on this?**
* **Would you like a short "Submission Note" to send to your internship supervisor?*
