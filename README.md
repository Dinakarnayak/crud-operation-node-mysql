
# CRUD Operation with Node.js and MySQL

This project demonstrates a simple CRUD (Create, Read, Update, Delete) application using Node.js and MySQL. It provides an API for performing these operations on a MySQL database. The application can be used as a template for building full-stack web applications that require backend CRUD functionality.

## Features

- **Create**: Allows you to add new records to the MySQL database.
- **Read**: Fetches data from the MySQL database.
- **Update**: Allows modification of existing records.
- **Delete**: Deletes records from the MySQL database.
  
## Technologies Used

- **Node.js**: A JavaScript runtime environment to run server-side code.
- **Express.js**: A minimal web framework for building APIs.
- **MySQL**: A relational database management system for storing data.
- **body-parser**: A middleware to parse incoming request bodies.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.x or later)
- MySQL database
- npm (Node Package Manager)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Dinakarnayak/crud-operation-node-mysql.git
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd crud-operation-node-mysql
npm install
```

### 3. Set Up MySQL Database

Create a MySQL database and table for your data.

```sql
CREATE DATABASE crud_app;
USE crud_app;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);
```

Update your database connection details in `config/database.js` with your MySQL credentials.

### 4. Run the Application

After setting up your database, you can start the server:

```bash
npm start
```

The server will start running on `http://localhost:3000`.

### 5. API Endpoints

- **Create**: `POST /api/users` – Adds a new user.
- **Read**: `GET /api/users` – Fetches all users.
- **Update**: `PUT /api/users/:id` – Updates user details by ID.
- **Delete**: `DELETE /api/users/:id` – Deletes a user by ID.

### 6. Testing the API

You can use tools like **Postman** or **cURL** to test the API endpoints. Here are examples using `curl`:

- **Create**:  
  ```bash
  curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name":"John Doe", "email":"john@example.com"}'
  ```

- **Read**:  
  ```bash
  curl http://localhost:3000/api/users
  ```

- **Update**:  
  ```bash
  curl -X PUT http://localhost:3000/api/users/1 -H "Content-Type: application/json" -d '{"name":"Jane Doe", "email":"jane@example.com"}'
  ```

- **Delete**:  
  ```bash
  curl -X DELETE http://localhost:3000/api/users/1
  ```

## Video Demo

Here’s a screen recording demonstrating the CRUD operations in action:

[![Screen Recording](https://github.com/Dinakarnayak/crud-operation-node-mysql/blob/main/Screen%20Recording%202025-01-29%20115003.mp4)

Click the link above to watch the full demonstration of how the CRUD operations work in this application.

## Contributing

Feel free to fork this repository, make changes, and create a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Node.js](https://nodejs.org/) - The server-side JavaScript runtime.
- [Express.js](https://expressjs.com/) - A fast, unopinionated, minimalist web framework for Node.js.
- [MySQL](https://www.mysql.com/) - The relational database management system.
