from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from gemini_service import generate_website

app = FastAPI(title="GenSite AI Backend")

# ✅ CORS (frontend access)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # later you can restrict this
    allow_methods=["*"],
    allow_headers=["*"],
)

class Prompt(BaseModel):
    text: str

# ✅ ROOT HEALTH CHECK (IMPORTANT FOR RENDER)
@app.get("/")
def root():
    return {
        "status": "OK",
        "message": "GenSite AI backend is running 🚀",
        "endpoint": "/generate"
    }

# ✅ MAIN API ENDPOINT
@app.post("/generate")
def generate(prompt: Prompt):
    html = generate_website(prompt.text)
    return {"fullCode": html}
