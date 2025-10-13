   # quick start 3 parts 

1. run the compiler 

cd /Users/robynmai/Live-Builds/restaurant-project/restaurant-test/frontend

npm run build:css :: now watching for changes 

2. start the backend server which runs the backend 

cd restaurant-test 
activate the project / source venv/bin/activate
reload the server / uvicorn app.main:app --reload

3. start the frontend server which runs the frontend 

cd restaurant-test/frontend 

start the frontend server / python -m http.server 8080




One-Time Setup (First Time Only)

1.1 Backend Setup (Python)

# Navigate to backend directory
cd /Users/robynmai/Live-Builds/restaurant-project/restaurant-test

# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt



1.2 Frontend Setup (Node.js)

# Navigate to frontend directory
cd /Users/robynmai/Live-Builds/restaurant-project/restaurant-test/frontend

# Install Node.js dependencies
npm init -y
npm install sass --save-dev

# Add build script to package.json
npm pkg set scripts.build:css="sass styles/main.scss styles/main.css --watch"


Daily Development Workflow

You need three terminal windows running simultaneously.
🖥️ Terminal 1: SCSS Compiler (Styles)

Watches for CSS changes and auto-compiles

cd /Users/robynmai/Live-Builds/restaurant-project/restaurant-test/frontend
npm run build:css


Keep this running - it will show: Sass is watching for changes. Press Ctrl-C to stop.

cd /Users/robynmai/Live-Builds/restaurant-project/restaurant-test
source venv/bin/activate
uvicorn app.main:app --reload

Terminal 2: Backend Server (AI API)

Serves your FastAPI backend on port 8000

cd /Users/robynmai/Live-Builds/restaurant-project/restaurant-test
source venv/bin/activate
uvicorn app.main:app --reload

Keep this running - verify it works by visiting:
🔗 http://localhost:8000/health → should show {"ok": true}


erminal 3: Frontend Server (Website)

Serves your static website on port 8080

cd /Users/robynmai/Live-Builds/restaurant-project/restaurant-test/frontend
python -m http.server 8080


Testing Your Setup

    Backend Test: http://localhost:8000/health → {"ok": true}
    Frontend Test: http://localhost:8080 → Restaurant website
    Chat Test: Type "What do you sell?" in the chat widget → Should get AI response


Quick Reference
Server	Terminal Command	URL
SCSS Compiler	npm run build:css	Auto-compiles CSS
Backend	uvicorn app.main:app --reload	http://localhost:8000
Frontend	python -m http.server 8080	http://localhost:8080


Pro Tips

    All three terminals must be running for full functionality
    The chat widget connects frontend (port 8080) to backend (port 8000)
    SCSS changes auto-compile thanks to the --watch flag
    Use Ctrl+C to stop any server when needed
