const http = require("http");
const router = require("./router");
const server = http.createServer(router);
const PORT = 5060 || process.env.PORT;

server.listen(PORT, () => console.log("Server is listening on port %s", PORT));
