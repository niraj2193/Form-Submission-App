## 🐳 Docker Compose Setup

This project uses Docker Compose to run the React frontend and .NET Web API backend in separate containers with an isolated network for inter-service communication.

### Docker Compose Version

```yaml
version: "3.8"

### Services
Frontend (React)
Build Context: ./WebApp

Dockerfile: WebApp/Dockerfile

Ports: Maps container port 80 to host port 3000

Network: app-network

Backend (.NET Web API)
Build Context: ./Backend

Dockerfile: Backend/Dockerfile

Environment Variables:

ASPNETCORE_ENVIRONMENT=Development

ConnectionStrings__DefaultConnection=InMemory

Ports: Maps container port 80 to host port 5075

Network: app-network

## Network
A custom bridge network named app-network is used to allow communication between the frontend and backend services.
networks:
  app-network:
    driver: bridge

## Usage
To build and run the containers:
docker-compose up --build

To stop the services:
docker-compose down


# Form-Submission-App

This is the .NET 9 Web API backend and React Frontend for the User Form Application. It provides endpoints for submitting and retrieving user data and stores it in an in-memory database or PostgreSQL database depending on your configuration.

## Tech Stack

- .NET 9 (ASP.NET Core) for backend development
- Entity Framework Core for ORM (Object-Relational Mapping)
- Swagger for API documentation and Testing
- CORS configured to allow requests from a React frontend
- React (v18+)
- Material UI (MUI v5)
- Environment-based `fetch()` for API requests
