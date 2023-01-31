const { Client } = require("pg");

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "aaa",
  password: "123",
  port: 5432,
});

db.connect((err) => {
  if (!err) {
    console.log("Database CONNECTED");
  } else {
    console.log("Database error connection", err);
  }
});

module.exports = db;
