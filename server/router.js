var handler = require("./handler.js");
const router = (req, res) => {
  var url = req.url;
  if (url === "/") {
    handler.index(res);
  } else {
    handler.errorz(url, res);
  }
};

module.exports = router;
