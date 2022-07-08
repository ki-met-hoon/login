"use strict";

const port = 443;
const server = require("../server");

server.listen(port, () => {
    console.log("server start");
});