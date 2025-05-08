# Getting Started with Create React App

This project allows users to submit their name, phone, and email. Built using **React** and **Material UI**, and communicates with a backend .NET Core API via environment-configured URLs.

## Tech Stack

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

## Prerequisites

Before running the React frontend, ensure you have the following installed:

- Node.js (recommended version: LTS)
- npm (comes with Node.js)
- React (already bundled in this project)

## Install dependencies

- `npm install`

## Running Application

In the project directory, you can run:

- `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Environment Variables

Create a .env file in the root of the project (if it doesn't already exist) and configure the following variables:

- REACT_APP_API_URL=http://localhost:5000/api/UserInfo

## Testing

- npm test

## Contributing

Step 1 - Fork the repository.
Step 2 - Create a new branch (git checkout -b feature-branch).
Step 3 - Make your changes.
Step 4 - Commit your changes (git commit -am 'Add new feature').
Step 5 - Push to your forked repository (git push origin feature-branch).
Step 6 - Open a pull request.

## License

Please add your license details.
