const fs = require("fs");
const path = require("path");

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
  console.log("assetshandler", filePath);
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
  var url1 = domain + url.split("?");
  console.log(url.split("?")[1]);
};

module.exports = {
  index: indexHandler,
  assets: assetsHandler,
  errorz: errorHandler,
  search: searchHandler
};
