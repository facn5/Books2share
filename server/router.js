var handler = require("./handler.js");
const router = (req, res) => {
  var url = req.url;
  console.log(url);
  if (url === "/") {
    console.log("hi");
  } else {
    console.log("fail");
  }
};

module.exports = router;
