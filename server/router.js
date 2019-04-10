var handler = require("./handlers.js");
const router = (req, res) => {
  var url = req.url;
  if (url === "/") {
    handler.index(res);
    //    handler.Datahan(res);
  } else if (url.includes("public") || url.includes("search.js")) {
    handler.assets(url, res);
  } else if (url.includes("search?")) {
    handler.search(url, res);
  } else {
    handler.error(url, res);
  }
};

module.exports = router;
