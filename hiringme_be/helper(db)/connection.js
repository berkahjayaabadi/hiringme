const { Client } = require("pg");

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "hiring_me",
  password: "12345",
  port: 5432,
});

db.connect((err) => {
  if (!err) {
    console.log("Database Hireme Connected");
  } else {
    console.log("Database Connection Failed", err);
  }
});

module.exports = db;
