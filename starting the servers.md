1. Backend Setup (Python)

# Navigate to your main project folder
cd /Users/robynmai/Live-Builds/restaurant-project/restaurant

# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate

# Install Python dependencies from the backend folder
pip install -r backend/requirements.txt

2. Frontend Setup (Node.js)

# Navigate to frontend directory
cd /Users/robynmai/Live-Builds/restaurant-project/restaurant/frontend

# Install Node.js dependencies
npm init -y
npm install sass --save-dev

# Add the build script to your package.json
# (This command edits the file for you)
npm pkg set scripts.build:css="sass styles/main.scss styles/main.css --watch"


Daily Development Workflow


You need three terminal windows running simultaneously.


🖥️ Terminal 1: 
SCSS Compiler (For Styles)

This watches for changes in your .scss files and automatically compiles them into CSS.


# Navigate to the frontend folder
cd /Users/robynmai/Live-Builds/restaurant-project/restaurant/frontend


# Start the compiler
npm run build:css

(Keep this running. It will say "Sass is watching for changes...")


🧠 Terminal 2: 
Backend Server (The AI)

This runs your FastAPI backend on port 8000.
# Navigate to your main project folder
cd /Users/robynmai/Live-Builds/restaurant-project/restaurant

# Activate the virtual environment
source venv/bin/activate

# Start the server with the NEW path
uvicorn backend.main:app --reload

(Keep this running. Test it by visiting http://localhost:8000/health)


🌐 Terminal 3: 

Frontend Server (The Website)

# Navigate to the frontend folder
cd /Users/robynmai/Live-Builds/restaurant-project/restaurant/frontend

# Start the server
python -m http.server 8080


Quick Reference
Server	Command	URL / Purpose
SCSS Compiler	npm run build:css	Auto-compiles CSS
Backend	uvicorn backend.main:app --reload	http://localhost:8000 (AI)
Frontend	python -m http.server 8080	http://localhost:8080 (Web)




