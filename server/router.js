var handler = require("./handlers.js");
const router = (req, res) => {
  var url = req.url;
  console.log(url);
  if (url === "/") {
    console.log("i'm here");
    handler.index(res);
  } else if (url.includes("public") || url.includes("search.js")) {
    console.log("pub;ic");
    handler.assets(url, res);
  } else if (url.includes("search?")) {
    handler.search(url, res);
  } else {
    handler.errorz(url, res);
  }
};

module.exports = router;
