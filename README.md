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

## Folder Structure

frontend/
├── public/ # Public files (index.html, favicon, etc.)
├── src/  
│ ├── components/ # Reusable UI components
│ ├── services/ # API calls and functions
│ ├── App.js # Main app component
│ └── index.js # Entry point of the React app
├── .env # Environment variables
└── package.json # Project dependencies and scripts

UserFormApi/
├── Controllers/      # Contains all controller classes (e.g., UserInfoController.cs)
├── Models/           # Contains model classes (e.g., UserInfo.cs)
├── Common_Data/      # Contains database context (ApplicationDbContext.cs)
├── Program.cs		  # Startup configuration (program setup) 	
└── appsettings.json  # Application settings (database connections, etc.)

## Prerequisites
Before you begin, ensure you have the following installed:

- .NET SDK (version 9.0)
-  Node.js (for React frontend)
-  PostgreSQL (if using PostgreSQL, or .NET in-memory DB can be used for testing)
-  npm (comes with Node.js)
-  React (already bundled in this project)

## Swagger

To test the API endpoints interactively, you can use Swagger.

- Open http://localhost:5075/swagger/index.html in your browser.
- You’ll find a list of available endpoints that you can test with sample data.




### Docker
## Usage
To build and run the containers:
docker-compose up --build

To stop the services:
docker-compose down


