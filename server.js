const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// MySQL Connection Pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",             // Your MySQL username
  password: "Root@123",     // Your MySQL password
  database: "contact_db",   // Your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Check MySQL Connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("Database Connection Failed:", err);
  } else {
    console.log("Connected to MySQL Database!");
    connection.release();
  }
});

// 🟢 **Create (POST) - Add a Contact**
app.post("/contacts", (req, res) => {
  const { contact_id, first_name, last_name, street, city, zip, date_added } = req.body;

  // Check if contact_id already exists
  const checkSql = "SELECT * FROM contacts WHERE contact_id = ?";
  db.query(checkSql, [contact_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.length > 0) {
      return res.status(400).json({ message: "Contact ID already exists." });
    }

    // Insert new contact
    const insertSql = `
      INSERT INTO contacts (contact_id, first_name, last_name, street, city, zip, date_added) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    
    db.query(insertSql, [contact_id, first_name, last_name, street, city, zip, date_added], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Contact added!", id: result.insertId });
    });
  });
});

// 🔵 **Read (GET) - Get All Contacts**
app.get("/contacts", (req, res) => {
  const sql = "SELECT * FROM contacts";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// 🟡 **Update (PUT) - Update a Contact**
app.put("/contacts/:contact_id", (req, res) => {
  const { contact_id } = req.params;
  const { first_name, last_name, street, city, zip, date_added } = req.body;

  const updateSql = `
    UPDATE contacts 
    SET first_name = ?, last_name = ?, street = ?, city = ?, zip = ?, date_added = ? 
    WHERE contact_id = ?
  `;
  
  db.query(updateSql, [first_name, last_name, street, city, zip, date_added, contact_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Contact updated!" });
  });
});

// 🔴 **Delete (DELETE) - Delete a Contact**
app.delete("/contacts/:contact_id", (req, res) => {
  const { contact_id } = req.params;

  const deleteSql = "DELETE FROM contacts WHERE contact_id = ?";
  db.query(deleteSql, [contact_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Contact deleted!" });
  });
});

// GET / route - Home Page or Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Contacts API!");
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
