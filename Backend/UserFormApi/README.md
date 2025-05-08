# Getting Started with Create React App

This is the .NET 9 Web API backend for the User Form Application. It provides endpoints for submitting and retrieving user data and stores it in an in-memory database or PostgreSQL database depending on your configuration.

## Tech Stack

- .NET 9 (ASP.NET Core) for backend development
- Entity Framework Core for ORM (Object-Relational Mapping)
- Swagger for API documentation and Testing
- CORS configured to allow requests from a React frontend

## Folder Structure

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

## Swagger

To test the API endpoints interactively, you can use Swagger.

- Open http://localhost:5075/swagger/index.html in your browser.
- You’ll find a list of available endpoints that you can test with sample data.

## Clone the Repository

git clone https://github.com/yourusername/UserFormApi.git
cd UserFormApi


## Contributing

Please follow these steps:
Step 1) Fork this repository.
Step 2) Create a new branch (git checkout -b feature-branch).
Step 3) Commit your changes (git commit -am 'Add new feature').
Step 4) Push to the branch (git push origin feature-branch).
Step 5) Open a pull request.


## License

Project License details.