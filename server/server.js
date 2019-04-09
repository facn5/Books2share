const http = require("http");

const server = http.createServer(router);
const PORT = 5009 || process.env.PORT;

server.listen(PORT, () => console.log("Server is listening on port %s", PORT));
