const fs = require("fs");

const selectBook = (title, cb) => {
  const connection = require("./db_connection");
  const sql = `SELECT * FROM books WHERE book_title LIKE '%${title}%';`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      cb(null, result.rows);
    }
  });
};
const postData = (book_title, publish_year, amount, response, cb) => {
  const connection = require("./db_connection");
  connection.query(
    "INSERT INTO books (book_title, publish_year, amount) VALUES ($1, $2, $3)",
    [book_title, publish_year, amount],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res, response);
    }
  );
};

const removeBook = (title) => {
  const connection = require('./db_connection');
  const sql = `DELETE FROM books WHERE book_title='${title}';`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err, "error");
    } else {
      console.log(`All books with title :${title} remoed`);
      // connection.end(() => {
      //   console.log('connection closed')
      // })
    }
  });
};

module.exports = {
  selectBook,
  removeBook,
  postData
};
