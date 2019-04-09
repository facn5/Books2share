var handler = require("./handlers.js");
const router = (req, res) => {
  var url = req.url;
  if (url === "/") {
    handler.index(res);
  } else if (url.includes("public")) {
    handler.assets(url, res);
  } else if (url.includes("search?")) {
    handler.search(url, res);
  } else {
    handler.errorz(url, res);
  }
};

module.exports = router;
