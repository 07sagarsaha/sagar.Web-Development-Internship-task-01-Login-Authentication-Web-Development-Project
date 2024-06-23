# Login Authentication Web Development Project

This project is a full-stack authentication system developed as part of a Web Development Internship at Devtern. It features secure user registration, login functionality, and session management.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js
- Database: MongoDB

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm
- You have Git installed (for cloning the repository)
- You have MongoDB installed and running

## MongoDB Setup

1. Install MongoDB Community Edition on your local machine. Follow the official MongoDB installation guide for your operating system: [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/)

2. Start the MongoDB service:
   - On Windows, the MongoDB service should start automatically after installation
   - On macOS or Linux, you can start it with: `sudo service mongod start`

3. Create a new database for this project:
   - Open a MongoDB shell by running `mongo` in your terminal
   - Create a new database: `use authenticationDB`
   - You can exit the MongoDB shell by typing `exit`

## Setting Up and Running the Project

Follow these steps to get your development environment set up:

1. Clone the repository
   git clone https://github.com/07sagarsaha/sagar.Web-Development-Internship-task-01-Login-Authentication-Web-Development-Project.git
cd sagar.Web-Development-Internship-task-01-Login-Authentication-Web-Development-Project

2. Install dependencies
   npm install
   
3. Set up your environment variables
Create a `.env` file in the root directory and add your MongoDB connection string:
MONGODB_URI=mongodb://localhost:27017/authenticationDB

4. Start the server
   nodemon src/index.js
5. Open your browser and navigate to `http://localhost:3000` (or whatever port you've configured)

## Features

- User Registration
- User Login
- Password Hashing
- Session Management

## Contact

If you have any questions or feedback, please reach out to me through my GitHub profile.
