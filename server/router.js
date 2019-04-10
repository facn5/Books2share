var handler = require("./handlers.js");
const router = (req, res) => {
  var url = req.url;
  if (url === "/") {
    handler.index(res);
<<<<<<< HEAD
  } else if (
    url.includes("public") ||
    url.includes("search.js") ||
    url.includes("style.css")
  ) {
=======
    //    handler.Datahan(res);
  } else if (url.includes("public") || url.includes("search.js")) {
>>>>>>> acacb8cb49daa420cd6567471c6a3c35937c6df3
    handler.assets(url, res);
  } else if (url.includes("search?")) {
    handler.search(url, res);
  } else {
    handler.error(url, res);
  }
};

module.exports = router;
