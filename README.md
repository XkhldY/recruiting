
# Gemini FastAPI React App

This project is a simple web application with a FastAPI backend and a React frontend.

## Running the application

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Activate the virtual environment:
   ```bash
   source ../.venv/bin/activate
   ```
3. Run the FastAPI application:
   ```bash
   uvicorn main:app --reload
   ```

The backend will be running at `http://localhost:8000`.

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Start the React development server:
   ```bash
   npm start
   ```

The frontend will be running at `http://localhost:3000`.

Once both the backend and frontend are running, you can open your browser to `http://localhost:3000` to see the message from the backend.
