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

## Clone the Repository

git clone https://github.com/niraj2193/Form-Submission-App.git


## Installing Dependencies for WebAPI

Navigate to the Backend directory and restore the necessary NuGet packages by running:
cd Backend
dotnet restore

After restoring the dependencies, build the Web API project:
dotnet build

Run WebAPI Project:
dotnet run
This will start the Web API on the port 5075.

## Install dependencies for WebApp
- `npm install`

## Running WebApp Application

In the project directory, you can run:
- `npm start`

## Validation
Frontend Validation (React):
 **Client-Side Validation**: Common input fields such as email, password, and phone numbers are validated on the client-side to ensure they meet the required format. This is done using custom validation logic or validation libraries.
1) Email Validation: Ensure that the email format is valid using regular expressions.
2) Password Validation: Check password strength, such as requiring at least one uppercase letter, one number, and a minimum length.
3) Phone Number Validation: Validate phone numbers using a regex pattern to ensure they conform to the correct format.
4) Error Handling: Any validation errors are displayed next to the form fields, providing users with clear instructions on what needs to be fixed.

**Backend Validation (.NET Web API)**
1) API Input Validation: Use data annotations and model validation in ASP.NET Core to validate incoming API requests. Make sure that fields like Email, Password, and Age have the appropriate validations using attributes like [Required], [EmailAddress], or custom validation.
2) Error Handling: Handle validation errors by returning a 400 Bad Request response with a clear error message when invalid input is received.


## Docker 
Usage
To build and run the containers:
docker-compose up --build

To stop the services:
docker-compose down


