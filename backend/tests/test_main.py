from fastapi.testclient import TestClient
from ..main import app  # Adjust the import based on your project structure

client = TestClient(app)

def test_read_main():
    response = client.get("/api")
    assert response.status_code == 200
    assert response.json() == {"message": "hello gemini and the world"}
