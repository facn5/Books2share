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
      console.log("mr7sh mmmmmmmmmmmmmmm");
      handler.post(req, res);
    }
  } else {
    handler.error(url, res);
  }
};

module.exports = router;
