const fs = require("fs");

const selectBook = (title, cb) => {
  const connection = require("./db_connection");
  const sql = `SELECT * FROM books WHERE book_title LIKE '%${title}%';`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      console.log("why not working", title);
      console.log(
        `All books with title :${JSON.stringify(result.rows)} selected`
      );

      cb(null, result.rows);
      // connection.end(() => {
      //   console.log("connection closed");
      // });
    }
  });
};

// const addBook = (title) => {
//   const connection = require('./db_connection');
//   const sql = `SELECT * FROM BOOKS WHERE book_title=${title}`;
//   connection.query(sql, (err, result) => {
//     if (err) {
//       console.log(err, "error");
//     } else {
//       console.log(`All books with title :${title} selected`);
//       connection.end(() => {
//         console.log('connection closed')
//       })
//     }
//   });
// };
//
// const reserveBook = (title) => {
//   const connection = require('./db_connection');
//   const sql = `SELECT * FROM BOOKS WHERE book_title=${title}`;
//   connection.query(sql, (err, result) => {
//     if (err) {
//       console.log(err, "error");
//     } else {
//       console.log(`All books with title :${title} selected`);
//       connection.end(() => {
//         console.log('connection closed')
//       })
//     }
//   });
// };

module.exports = {
  selectBook
};
