## Krazy Kanban Board

## Description
Kanban Board is a full-stack application built to help individuals manage their tasks using swimlane colums for different tasks e.g. 'To Do', 'In Progress', and 'Done'. Users can log in, create and view tasks and also edit or delete them.

## Installation 
1. Clone the repository
    * git clone <github.repo.url.git>
    * cd krazy-kanban-board
2. Install dependencies for server-side and client-side
    * cd server
        > npm install
        > npm run dev
    * cd client
        > npm install
        > npm run dev
3. Set up the Database, for this app I used PostgreSQL
    * Create a PostgreSQL database named kanban_db
    * Run the schema.sql and seeds.sql files
    * Add an .env file in server directory include the following: 
        DB_NAME=kanban_db
        DB_USER=your_db_user
        DB_PASSWORD=your_db_password
        DB_HOST=localhost
        DB_PORT=5432
        JWT_SECRET_KEY=your_jwt_secret_key ** I generate one online at "https://randomkeygen.com/"

## Features
* User Authentication using JWT
* Create, Edit and Delete Tickets
* Styled UI - See Sample Screenshots
* Error Handling and Login Prompts
* Protected Routes - Users must be logged in to view tasks board

## Technologies Used
* Frontend
    > React with Vite
    > TypeScript
    > React Router
    > Axios
    > Custom CSS
* Backend
    > Node.js
    > Express.js
    > PostgreSQL
    > JSON Web Tokens (JWT)

## License
This project is licensed under the MIT license.

## Screenshots
![Home Page](/Users/elizabethmurillo/Kanban-Board/Develop/server/assets/Screenshot 2025-04-10 at 10.53.01 PM (2).png)

![Login Page](/Users/elizabethmurillo/Kanban-Board/Develop/server/assets/Screenshot 2025-04-10 at 10.53.09 PM (2).png)

![Kanban Board](/Users/elizabethmurillo/Kanban-Board/Develop/server/assets/Screenshot 2025-04-10 at 10.53.23 PM (2).png)

![Create New Ticket](/Users/elizabethmurillo/Kanban-Board/Develop/server/assets/Screenshot 2025-04-10 at 10.54.21 PM (2).png)

![New Ticket Added to Kanban Board](/Users/elizabethmurillo/Kanban-Board/Develop/server/assets/Screenshot 2025-04-10 at 10.54.26 PM (2).png)

## Sources for this Project
* ChatGPT for debugging
![ChatGPT](https://chatgpt.com/)
* StackOverflow for help with functions
![StackOverflow](https://stackoverflow.com/)
* U of U Bootcamp course activities and class recordings!

## Links
Github Repo: https://github.com/beth-em/Kanban-Board.git
Deployment Link:
