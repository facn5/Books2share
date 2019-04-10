const dbConnection = require("../db_connection.js");

const getData = cb => {
  dbConnection.query("SELECT * FROM books", (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};

module.exports = getData;
