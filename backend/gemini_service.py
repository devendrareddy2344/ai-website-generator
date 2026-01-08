from google import genai
from google.genai.errors import ServerError
from dotenv import load_dotenv
import os
import json
import re
import html
import time

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

SYSTEM_INSTRUCTION = """
You are an expert full-stack web developer and UI/UX designer.

Generate a COMPLETE, MODERN, COLORFUL, and INTERACTIVE single-file website.

MANDATORY RULES:
1. Output MUST be a full valid HTML document.
2. DO NOT include Tailwind CDN or any external scripts yourself.
3. Use Tailwind CSS utility classes heavily in the HTML.
4. Add gradients, shadows, hover animations.
5. Use Unsplash images.
6. Include sections: Navbar, Hero, Features, Gallery, Testimonials, Contact, Footer.
7. RETURN ONLY VALID JSON — NO markdown, NO explanation.

JSON FORMAT:
{
  "fullCode": "<!DOCTYPE html>...</html>"
}
"""

def extract_json(text: str) -> dict:
    """Extract JSON safely even if wrapped in ```json blocks"""
    text = re.sub(r"```json|```", "", text).strip()
    return json.loads(text)

def strip_tailwind(html_code: str) -> str:
    """Remove any Tailwind CDN script Gemini might generate"""
    return re.sub(
        r"<script[^>]*cdn\.tailwindcss\.com[^>]*></script>",
        "",
        html_code,
        flags=re.IGNORECASE,
    )

def inject_tailwind(html_code: str) -> str:
    """Inject clean Tailwind CDN safely"""
    tailwind_script = "<script src=https://cdn.tailwindcss.com></script>"
    if "</head>" in html_code:
        return html_code.replace("</head>", f"{tailwind_script}\n</head>")
    return tailwind_script + "\n" + html_code

def generate_website(prompt: str) -> str:
    MAX_RETRIES = 3

    for attempt in range(MAX_RETRIES):
        try:
            response = client.models.generate_content(
                model="gemini-2.5-flash",  
                contents=f"{SYSTEM_INSTRUCTION}\n\nUser Request:\n{prompt}"
            )

            data = extract_json(response.text)
            html_code = data["fullCode"]

            # Decode escaped HTML
            html_code = html.unescape(html_code)
            html_code = html_code.encode("utf-8").decode("unicode_escape")

            # Clean & inject Tailwind
            html_code = strip_tailwind(html_code)
            html_code = inject_tailwind(html_code)

            return html_code

        except ServerError:
            # Gemini overloaded → retry
            if attempt < MAX_RETRIES - 1:
                time.sleep(2)
                continue
            return """<!DOCTYPE html>
<html>
<head><title>AI Busy</title></head>
<body style="font-family:Arial;padding:40px">
<h2>⚠️ AI is currently busy</h2>
<p>Please wait a few seconds and try again.</p>
</body>
</html>"""

        except Exception as e:
            return f"""<!DOCTYPE html>
<html>
<head><title>Error</title></head>
<body style="font-family:Arial;padding:40px">
<h2>Unexpected Error</h2>
<pre>{str(e)}</pre>
</body>
</html>"""
