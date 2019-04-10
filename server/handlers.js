const fs = require("fs");
const path = require("path");
const env2 = require("env2");
const pg = require("pg");
const getqueries = require("../database/queries.js");

var exType = {
  html: {
    "Content-Type": "text/html"
  },
  css: {
    "Content-Type": "text/css"
  },
  js: {
    "Content-Type": "application/javascript"
  },
  json: {
    "Content-Type": "application/json"
  },
  ico: {
    "Content-Type": "image/vnd.microsoft.icon"
  }
};

const indexHandler = res => {
  var filePath = path.join(__dirname, "..", "public", "index.html");
  console.log(filePath);
  fs.readFile(filePath, function(error, file) {
    if (error) {
      res.writeHead(500, exType.html);
      res.end("<h1>sorry, something went wrong</h1>");
    } else {
      res.writeHead(200, exType.html);
      res.write(file);
    }
    res.end();
  });
};

const assetsHandler = (url, res) => {
  var filePath = path.join(__dirname, "..", "public", url);
  var extension = url.split(".")[1];
  console.log("assetshandgetqueriesler", filePath);
  fs.readFile(filePath, function(error, file) {
    if (error) {
      res.writeHead(500, exType.html);
      res.end("<h1>sorry, something went wrong</h1>");
    } else {
      res.writeHead(200, exType[extension]);
      res.end(file);
    }
  });
};

const errorHandler = (url, res) => {
  let filePath = path.join(__dirname, "..", "public", "404.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500);
      res.end("500 error");
    } else {
      res.writeHead(200, exType.html);
      res.end(file);
    }
  });
};

const searchHandler = (url, res) => {
  let search = url.split("?")[1];
  console.log("Search query is", search);
  getqueries.selectBook(search, (err, result) => {
    if (err) {
      console.log("there is an error");
    }
    res.writeHead(200, exType.html);
    res.end(JSON.stringify(result));
  });
};

const removeHandler = (url, res) => {
  let reserve = url.split("?")[1];
  console.log("remove query is", reserve);
  getqueries.resBook(reserve, (err, result) => {
    if (err) {
      console.log("there is an error");
    }
    res.writeHead(200, exType.html);
    res.end(JSON.stringify(result));
  });
};

module.exports = {
  index: indexHandler,
  assets: assetsHandler,
  error: errorHandler,
  search: searchHandler
};
