from fastapi import APIRouter
from pydantic import BaseModel
from backend.services.ai_client import get_ai_client

router = APIRouter()

# --- SETUP ---
class ChatRequest(BaseModel):
    message: str

ai_client = get_ai_client()

# Load the restaurant context from the separate text file
with open("backend/chat/restaurant_context.txt", "r") as f:
    restaurant_context = f.read()


@router.post("/chat")
async def handle_chat(request: ChatRequest):
    """Handles incoming chat messages and returns an AI-generated response."""
    messages = [
        {'role': 'system', 'content': restaurant_context},
        {'role': 'user', 'content': request.message}
    ]
    
    try:
        ai_response = ai_client.chat_completion(messages=messages)
        return {"reply": ai_response}
    except Exception as e:
        print(f"Error communicating with AI client: {e}")
        return {"error": "An internal error occurred while processing the request."}, 500