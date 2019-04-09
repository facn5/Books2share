const fs = require('fs');

const selectBook = (title, cb) => {
  const connection = require('./db_connection');
  const sql = `SELECT * FROM BOOKS WHERE book_title=${title}`;
  connection.query(sql, (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result.rows)
      console.log(`All books with title :${title} selected`);
      connection.end(() => {
        console.log('connection closed')
      })
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
  selectBook,
};
