Restro Project — Setup + Daily Workflow

One-time setup

Backend (Python)

    Go to the project root:
    cd /Users/robynmai/Live-Builds/restaurant-project/restaurant
    Create and activate a virtual environment:
    python -m venv venv
    source venv/bin/activate
    Install backend dependencies:
    pip install -r backend/requirements.txt

Frontend (Node.js)

    Go to the frontend folder:
    cd /Users/robynmai/Live-Builds/restaurant-project/restaurant/frontend
    Initialize npm and install Sass:
    npm init -y
    npm install sass --save-dev
    Add the build script to your package.json:
    npm pkg set "scripts.build:css"="sass styles/main.scss styles/main.css --watch"

Daily development workflow

You’ll keep three terminals open.

🖥️ Terminal 1 — SCSS Watcher (styles)

    From the frontend folder:
    cd /Users/robynmai/Live-Builds/restaurant-project/restaurant/frontend
    npm run build:css
    Keep this running. You should see: “Sass is watching for changes...”

🧠 Terminal 2 — Backend (AI API)

    From the project root:
    cd /Users/robynmai/Live-Builds/restaurant-project/restaurant
    source venv/bin/activate
    uvicorn backend.main:app --reload
    Keep this running. Test at: http://localhost:8000/health

🌐 Terminal 3 — Frontend (static site)

    From the frontend folder:
    cd /Users/robynmai/Live-Builds/restaurant-project/restaurant/frontend
    python -m http.server 8080
    Visit: http://localhost:8080

Quick reference
Service	Command	URL	Purpose
SCSS Compiler	npm run build:css	—	Auto-compiles CSS
Backend (FastAPI)	uvicorn backend.main:app --reload	http://localhost:8000	AI API
Health Check	—	http://localhost:8000/health	Backend status
Frontend (static)	python -m http.server 8080	http://localhost:8080	Website

Design and technical requirements

    Page load time: Optimize for speed (minify, compress, lazy-load images)
    Mobile responsiveness: Works across all devices (use media queries)
    Image optimization: Compress without noticeable quality loss
    Headline length: 10 words or fewer
    CTA button size: Large enough for easy tapping on mobile
    Forms: As few fields as possible
    Page length: Depends on offer complexity
    White space: Generous padding around key elements
    Color contrast: High enough for readability
    Font size: Comfortable on all devices

Build phases and to-dos

Push your code to GitHub after each phase.

✅ Phase 1: Core Website & AI (Done)

    Build all HTML pages with consistent navigation
    Add the custom “Restro” logo to every page
    Style the homepage with a full-screen hero image
    Make the menu, gallery, team, and contact pages look professional
    Connect the AI chat widget to your backend server
    Ensure the AI knows your menu, hours, and reservation process

🚀 Phase 2: Final Polish & Launch Features (Next)

    Make forms functional
        Update main.js to send form data to the backend
        Add a FastAPI endpoint to receive the data
        Configure the server to email you on message/booking
    Refine AI responses
        Improve instructions in restaurant_context.txt (tone, accuracy)
        Test and iterate
    Implement responsive design
        Add media queries in styles/main.scss
        Verify on tablets and phones
    Add analytics
        Create a Google Analytics property
        Add the tracking script to the <head> of every HTML page
    Final deployment & GitHub update
        Final pass on content, links, images, and performance
        Commit and push to GitHub

Notes and tips

    You only need to create the virtual environment and install dependencies once. After that, just run source venv/bin/activate when you start work.
    Stop any running server/watchers with Ctrl + C.
    If port 8080 is taken, try python -m http.server 8081 and visit http://localhost:8081.
