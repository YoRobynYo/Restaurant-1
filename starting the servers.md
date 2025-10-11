# when starting the app we need to do the following:: 

    create the enviroment ::
python -m venv venv
    
    then activate it ::
source venv/bin/activate 

    Install dependencies :: 
pip install -r requirements.txt

    start the backend :: 
backend runs from - cd Live-Builds/restaurant-project/restaurant-test/ 

    Test the backend API :-: 
new tab in browser / http://localhost:8000/health 

    If this is running and showing {"ok": true}

    then Start the backend server :: 
uvicorn app.main:app --reload

   # frontend runs from :: 
cd Live-Builds/restaurant-project/restaurant-test/frontend
in the terminal run :: 
http-server / this will give options 
   # http://127.0.0.1:8080
   # http://10.48.134.108:8080

   # compile the styles 
cd Live-Builds/restaurant-project/restaurant-test/frontend
npm run build:css


  # as ai instructs 

Project Startup Guide
This guide provides the necessary steps to set up and run the frontend and backend servers for this project.
1. One-Time Setup
Follow these steps only when you are setting up the project for the first time on a new machine.
1.1. Backend Setup (Python)
First, set up the Python virtual environment and install the required dependencies.
Bash

# Navigate to the project's root directory (e.g., /restaurant-test)
cd /path/to/your/project

# Create a Python virtual environment named 'venv'
python -m venv venv

# Activate the virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate

# Install the required Python packages
pip install -r requirements.txt

1.2. Frontend Setup (Node.js)
Next, navigate to the frontend directory and install the Node.js dependencies.
Bash

# Navigate to the frontend directory from the project root
cd frontend

# Install the required npm packages (like sass, http-server, etc. )
npm install

2. Daily Development Workflow
Follow these steps each time you want to start working on the project. You will need two separate terminal windows.
Terminal 1: Start the Backend Server
This terminal will run the Python FastAPI server.
Bash

# Navigate to the project's root directory
cd /path/to/your/project

# Activate the virtual environment
source venv/bin/activate

# Start the backend server on http://localhost:8000
uvicorn app.main:app --reload

Leave this terminal running. You can verify the backend is working by opening http://localhost:8000/health in your browser.
Terminal 2: Start the Frontend Server
This terminal will compile your CSS and serve your frontend files.
Bash

# Navigate to the frontend directory
cd /path/to/your/project/frontend

# Optional: If you are making style changes, start the Sass compiler
# The '--watch' flag keeps it running to auto-compile changes.
npm run build:css

# --- OR ---

# If you want to run both CSS and the server from one command,
# open a third terminal or run the CSS compiler in the background:
# npm run build:css &

# Start the frontend server on http://localhost:8080
http-server

Leave this terminal running. You can now access the website by opening http://localhost:8080 in your browser.
Quick Summary
Server
	
Terminal Command
	
URL
Backend
	
source venv/bin/activate  
uvicorn app.main:app --reload
	
http://localhost:8000
Frontend
	
http-server
	
http://localhost:8080 