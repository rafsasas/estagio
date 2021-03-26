const express = require("express");
const server = express();

server.use(express.json())

server.use("/", require("./routes/user"));
server.listen(3001);

