# CMES Assistant Chatbot – Setup Guide

This guide explains how to set up and run the CMES Assistant Chatbot project locally.

---

## 1. Prerequisites

Make sure the following are installed on your system:

- Node.js (v18 or later recommended)
- npm (comes with Node.js)
- Git

Check versions:
```bash
node -v
npm -v
git --version

## 2. Project Structure
bash
Copy code
CMES-assistant-chatbot/
├─ frontend/        # React (CRA) frontend
├─ Backend/         # Backend API (Node.js)
├─ README.md
└─ SETUP_GUIDE.md

##3. Frontend Setup (React)
bash
Copy code
cd frontend
npm install
npm start
Frontend runs at:

arduino
Copy code
http://localhost:3001

##4. Backend Setup (Node.js)
bash
Copy code
cd Backend
npm install
npm run dev
Backend runs at:

arduino
Copy code
http://localhost:8080

## 5. Environment Variables
Create a .env file inside frontend/:

env
Copy code
REACT_APP_API_URL=http://localhost:8080
CRA requires all environment variables to start with REACT_APP_.

## 6. Git Workflow (Team Collaboration)
main branch is always stable

All development is done on feature branches

Example workflow:

bash
Copy code
git checkout -b feature/chat-ui
git commit -m "Add chat UI layout"
git push origin feature/chat-ui
Open a Pull Request (PR)

Review and merge into main