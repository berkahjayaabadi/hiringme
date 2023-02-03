const db = require("../../helper(db)/connection");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const authModel = {
  login: ({ email, password }) => {
    console.log(email, password);
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE email=$1`, [email], (err, result) => {
        if (err) return reject(err.message);
        if (result.rows.length == 0) return reject("email/password salah.");

        bcrypt.compare(
          password,
          result.rows[0].password,
          function (err, hashingResult) {
            if (err) return reject(err.message);
            if (!hashingResult) return reject("username/password salah.");
            return resolve(result.rows[0]);
          }
        );
      });
    });
  },

  register: ({
    name,
    email,
    phone,
    password,
    company = "",
    company_role = "",
  }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO users (id, name, email, phone, password, company, company_role) VALUES($1, $2, $3, $4, $5, $6, $7)`,
        [uuidv4(), name, email, phone, password, company, company_role],
        (err, result) => {
          if (err) {
            return reject(err.message);
          } else {
            return resolve("ADD_SUCCESS");
          }
        }
      );
    });
  },
};

module.exports = authModel;
