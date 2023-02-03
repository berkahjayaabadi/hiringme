const db = require("../../helper(db)/connection");
const { v4: uuidv4 } = require("uuid");

const profileDashboardSkillModel = {
  get: function (queryParams) {
    console.log(queryParams);
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM skill
            INNER JOIN user ON skill.user_id=user.id ${this.query(
              queryParams,
              queryParams.sortBy,
              queryParams.limit
            )}`,

        (err, result) => {
          if (err) {
            return reject(err.message);
          } else {
            return resolve(result.rows);
          }
        }
      );
    });
  },

  getDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * from skill WHERE id='${id}'`, (err, result) => {
        if (err) {
          return reject(err.message);
        } else {
          return resolve(result.rows[0]);
        }
      });
    });
  },

  add: ({ user_id, skill_name }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO skill (id, user_id, skill_name) VALUES ('${uuidv4()}','${user_id}','${skill_name}')`,
        (err, result) => {
          if (err) {
            return reject(err.message);
          } else {
            return resolve({ user_id, skill_name });
          }
        }
      );
    });
  },

  update: ({ id, user_id, skill_name }) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM skill WHERE id='${id}'`, (err, result) => {
        if (err) {
          return reject(err.message);
        } else {
          db.query(
            `UPDATE skill SET user_id='${
              user_id || result.rows[0].user_id
            }', skill_name='${skill_name || result.rows[0].skill_name}'
             WHERE id='${id}'`,
            (err, result) => {
              if (err) {
                return reject(err.message);
              } else {
                return resolve({ id, user_id, skill_name });
              }
            }
          );
        }
      });
    });
  },

  remove: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE from skill WHERE id='${id}'`, (err, result) => {
        if (err) {
          return reject(err.message);
        } else {
          return resolve("success delete");
        }
      });
    });
  },
};

module.exports = profileDashboardSkillModel;
