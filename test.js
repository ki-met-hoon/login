const express = require('express');
const server = express();

var port = 443;

server.listen(port, () => {
    console.log("server start");
});

server.get('/test', async(req, res) => {
    res.send("test 성공!");
});

server.get('/aaa', async(req, res) => {
    res.send("aaaa");
});