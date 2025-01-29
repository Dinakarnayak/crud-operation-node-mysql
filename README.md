
# MySQL CRUD API with Optional MySQL or XMYSQL

This is a simple Node.js CRUD API connected to a MySQL database. You can use either the **MySQL** library or **XMYSQL** library to interact with the MySQL database. It supports Create, Read, Update, and Delete (CRUD) operations on user data. This API is built with **Express.js** and can work with both MySQL and XMYSQL.

## Features

- **Create** a new contact.
- **Read** contact data (all contacts or specific contact by ID).
- **Update** contact data.
- **Delete** a contact.

## Contact Information

Sample contact record in the database:

### Contact Information

- **Contact ID**: 21
- **First Name**: Aarav
- **Last Name**: Sharma
- **Street**: 12 MG Road
- **City**: Mumbai
- **ZIP Code**: 400001
- **Date Added**: 2025-01-26

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14.x or higher)
- **MySQL** (or any MySQL-compatible database)
- **Postman** or any API testing tool

## Setup

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/yourusername/mysql-crud-api.git
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd mysql-crud-api
npm install
```

### 3. Choose Your Database Interaction Library

You have two options to interact with the MySQL database: **MySQL** or **XMYSQL**.

#### Option 1: Using MySQL

1. Install the **mysql2** package:

   ```bash
   npm install mysql2
   ```

2. In the `server.js` file, use the standard **mysql2** library to configure your connection:

   ```javascript
   const mysql = require('mysql2');

   const db = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'your_password',
     database: 'your_database_name',
   });
   ```

#### Option 2: Using XMYSQL

1. Install the **XMYSQL** package:

   ```bash
   npm install xmysql
   ```

2. In the `server.js` file, use **XMYSQL** to configure your connection:

   ```javascript
   const XMYSQL = require('xmysql');

   const db = XMYSQL.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'your_password',
     database: 'your_database_name',
   });
   ```

### 4. Set Up MySQL Database

1. Log in to MySQL:

   ```bash
   mysql -u root -p
   ```

2. Create a new database:

   ```sql
   CREATE DATABASE your_database_name;
   ```

3. Create a `contacts` table with the following schema:

   ```sql
   CREATE TABLE contacts (
       contact_id INT AUTO_INCREMENT PRIMARY KEY,
       first_name VARCHAR(100),
       last_name VARCHAR(100),
       street VARCHAR(255),
       city VARCHAR(100),
       zip VARCHAR(10),
       date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. Use the created database:

   ```sql
   USE your_database_name;
   ```

### 5. Start the Server

Once everything is configured, you can start the server by running the following command:

```bash
node server.js
```
## Demo Video

Watch the demo of the CRUD API in action:

[![Demo Video](Screen Recording 2025-01-29 120540.mp4)
The server will be running at `http://localhost:3000`.

## API Endpoints

### 1. Create a New Contact (POST)

- **Endpoint**: `POST /contacts`
- **Request Body** (JSON):

```json
{
  "first_name": "Aarav",
  "last_name": "Sharma",
  "street": "12 MG Road",
  "city": "Mumbai",
  "zip": "400001"
}
```

- **Response**:

```json
{
  "message": "Contact created successfully",
  "contact_id": 21
}
```

### 2. Get All Contacts (GET)

- **Endpoint**: `GET /contacts`
- **Response**:

```json
[
  {
    "contact_id": 21,
    "first_name": "Aarav",
    "last_name": "Sharma",
    "street": "12 MG Road",
    "city": "Mumbai",
    "zip": "400001",
    "date_added": "2025-01-26T00:00:00Z"
  }
]
```

### 3. Get a Contact by ID (GET)

- **Endpoint**: `GET /contacts/:id`
- **Example**: `GET /contacts/21`

- **Response**:

```json
{
  "contact_id": 21,
  "first_name": "Aarav",
  "last_name": "Sharma",
  "street": "12 MG Road",
  "city": "Mumbai",
  "zip": "400001",
  "date_added": "2025-01-26T00:00:00Z"
}
```

### 4. Update a Contact (PUT)

- **Endpoint**: `PUT /contacts/:id`
- **Request Body** (JSON):

```json
{
  "first_name": "Aarav",
  "last_name": "Sharma",
  "street": "14 MG Road",
  "city": "Mumbai",
  "zip": "400002"
}
```

- **Response**:

```json
{
  "message": "Contact updated successfully"
}
```

### 5. Delete a Contact (DELETE)

- **Endpoint**: `DELETE /contacts/:id`
- **Example**: `DELETE /contacts/21`

- **Response**:

```json
{
  "message": "Contact deleted successfully"
}
```

## Testing with Postman

Use **Postman** to test the following CRUD operations:

1. **POST** a new contact.
2. **GET** all contacts or a contact by ID.
3. **PUT** to update a contact.
4. **DELETE** to remove a contact.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Express.js for handling the API routing and server setup.
- MySQL for database management (if you're using `mysql2`).
- XMYSQL for simplified MySQL interactions (if you're using `XMYSQL`).

