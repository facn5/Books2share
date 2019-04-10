var handler = require("./handlers.js");
const router = (req, res) => {
  var url = req.url;
  if (url === "/") {
    handler.index(res);
  } else if (
    url.includes("public") ||
    url.includes("search.js") ||
    url.includes("style.css")
  ) {
    handler.assets(url, res);
  } else if (url.includes("search?")) {
    handler.search(url, res);
  } else if (url === "/postdata") {
    if (req.method === "POST") {
      handler.post(req, res);
    }
  } else if (url.includes("remove?")) {
    handler.remove(url, res);
  } else {
    handler.error(url, res);
  }
};

module.exports = router;
