# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a full-stack web application with a FastAPI backend and React frontend, designed as a recruiting platform. The application runs in Docker containers and follows a microservices approach:

- **Backend**: FastAPI application serving REST API endpoints at port 8000
- **Frontend**: React TypeScript application with Create React App at port 3000
- **Communication**: Frontend communicates with backend via HTTP requests to `/api` endpoints

## Development Commands

### Backend Development
```bash
# Navigate to backend directory
cd backend

# Activate virtual environment (assumed to be in parent directory)
source ../.venv/bin/activate

# Run development server with hot reload
uvicorn main:app --reload

# Run tests
pytest
```

### Frontend Development
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

### Docker Development
```bash
# Run entire application stack
docker-compose up

# Rebuild and run
docker-compose up --build
```

## Project Structure

### Backend (`/backend`)
- `main.py`: FastAPI application entry point with CORS middleware
- `requirements.txt`: Python dependencies (FastAPI, Uvicorn, Pytest)
- `tests/`: Test files using pytest and FastAPI TestClient

### Frontend (`/frontend`)
- React TypeScript application using Create React App
- `src/App.tsx`: Main application component with recruiting platform UI
- `src/components/`: Reusable components (ClientLogos with animated slider)
- `src/assets/`: Static assets including client logos
- Uses inline styles throughout the application

## Key Technical Details

### Backend API
- Single endpoint: `GET /api` returns `{"message": "hello gemini and the world"}`
- CORS enabled for localhost:3000 and render.com frontend deployment
- Uses FastAPI with standard middleware setup

### Frontend Architecture
- Single-page application with multiple sections (header, hero, features, pricing, blog, footer)
- ClientLogos component uses `require.context()` to dynamically load logo images
- Inline styling approach with centralized color palette
- TypeScript configuration with React 19

### Development Workflow
- Backend runs on localhost:8000
- Frontend runs on localhost:3000 and proxies API calls to backend
- Docker setup allows for containerized development
- Tests use pytest for backend and React Testing Library for frontend