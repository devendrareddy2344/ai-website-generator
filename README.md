<<<<<<< HEAD
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

mermaid
graph TD
    User([User Browser]) -->|Input Prompt| Frontend[React Frontend - Vercel]
    Frontend -->|POST /generate| Backend[FastAPI Backend - Render]
    Backend -->|System Prompt| Gemini[Google Gemini AI]
    Gemini -->|Generated HTML| Backend
    Backend -->|JSON Response| Frontend
    Frontend -->|Render Output| Preview[Live Preview Iframe]

website_generator/
├── backend/
│   ├── main.py              # FastAPI Application Entry
│   ├── gemini_service.py    # Gemini Prompt Engineering
│   └── requirements.txt     # Backend Dependencies
=======
# 🚀 GenSite AI – AI‑Powered Website Generator

GenSite AI is a full‑stack AI-powered web application that generates **modern, responsive, and visually attractive websites** from simple natural-language prompts.  
You describe your website idea in plain English and the app returns a **complete single-file HTML website** (layout, styling, and content) powered by Google Gemini.

---

## 🌟 Features

- 🧠 **AI Website Generation**
  - Turns natural-language prompts into full HTML websites
  - Uses Tailwind CSS utility classes in the generated markup
- 🎨 **Modern & Colorful UI**
  - Gradients, shadows, hover animations
  - Clean, professional chat-style interface
- 👀 **Live Preview**
  - Renders the generated HTML instantly in a preview panel
- 💬 **Chat-Based Interaction**
  - Conversational flow between user and AI
- 📱 **Responsive by Default**
  - Mobile-first layouts target all screen sizes

---

## 🧱 Tech Stack

### Frontend
- **React 18** (Vite)
- **Custom CSS** for the app shell
- **Tailwind CSS (CDN)** injected into generated websites
- **Fetch API** for backend communication

### Backend
- **FastAPI** (Python)
- **Google Gemini API** via `google-genai` (`gemini-2.5-flash` model)
- **python-dotenv** for environment configuration

---

## 🗂 Project Structure

```text
website_genatator/
├── backend/
│   ├── main.py              # FastAPI app (endpoints)
│   ├── gemini_service.py    # Gemini website generation logic
│   └── requirements.txt
>>>>>>> 513aeda (update readme file)
│
├── frontend/
│   └── gensite-react/
│       ├── src/
<<<<<<< HEAD
│       │   ├── components/  # Reusable UI Components
│       │   └── App.jsx      # Core Application Logic
│       ├── .env             # Frontend Environment Variables
=======
│       │   ├── components/
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── index.html
│       ├── index.css
│       ├── vite.config.js
>>>>>>> 513aeda (update readme file)
│       └── package.json
│
└── README.md
<<<<<<< HEAD
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
GitHub: [https://github.com/](https://github.com/devendrareddy2344)

- Multi-page website generation
- Theme and color customization
- Export to GitHub Pages
- Editable generated code
- User authentication and history
=======
```
>>>>>>> 513aeda (update readme file)

---

<<<<<<< HEAD
---

If you want, I can now:
- ✅ Convert this into **resume-ready project points**
- ✅ Write a **submission message for internship**
- ✅ Optimize it for **GitHub recruiters**

Just tell me 💡
=======
## ⚙️ Environment Variables

### Backend (`backend/.env`)
>>>>>>> 513aeda (update readme file)

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### Frontend (`frontend/gensite-react/.env` or `.env.local`)

```env
VITE_API_URL=http://localhost:8000
```

Set `VITE_API_URL` to the public URL of your backend when deploying (e.g. your Render / other hosting URL).

---

## 🏃‍♂️ Running the Project Locally

### 1. Clone & enter the project

```bash
git clone <repo-url>
cd website_genatator
```

### 2. Backend setup (FastAPI)

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS / Linux
pip install -r requirements.txt
```

Create `backend/.env`:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

Run the backend:

```bash
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`.

### 3. Frontend setup (React + Vite)

```bash
cd ../frontend/gensite-react
npm install
```

Create `.env` in `frontend/gensite-react`:

```bash
VITE_API_URL=http://localhost:8000
```

Start the dev server:

```bash
npm run dev
```

Vite will print a local URL for the UI (typically `http://localhost:5173`).

---

## 🔌 API Reference

### Health Check – `GET /`

**Response**

```json
{
  "status": "OK",
  "message": "GenSite AI backend is running 🚀",
  "endpoint": "/generate"
}
```

### Generate Website – `POST /generate`

**Request body**

```json
{
  "text": "Create a modern portfolio website with a dark theme"
}
```

**Response body**

```json
{
  "fullCode": "<!DOCTYPE html> ... </html>"
}
```

The `fullCode` field contains a complete single-file HTML document with Tailwind CSS classes already applied. The frontend injects the Tailwind CDN script for you before rendering.

---

## ☁️ Deployment Notes

- **Frontend**: Can be deployed on providers like Vercel (build with `npm run build`, serve `dist/`).  
- **Backend**: Can be deployed on providers like Render or any service that can run a FastAPI app with `uvicorn`.

Just make sure:

- The backend has access to `GEMINI_API_KEY` as an environment variable.
- The frontend `VITE_API_URL` points at your deployed backend URL.
