"use strict";

const express = require('express');
const server = express();

server.set("views", "./views");
server.set("view engine", "ejs");
const home = require("./routes/home");

server.use("/", home);

var port = 443;

const mysql = require('mysql');

const db = mysql.createConnection( {
    host: 'localhost',
    user: 'ksh',
    password: '1234',
    database: 'test'
});

db.connect();

module.exports = server;

server.get('/login', async(req, res) => {
    res.render("home/login")
});

server.get('/', async(req, res) => {
    res.render("home/index")
});



server.get('/db', async(req, res) => {
    db.query('SELECT * FROM test_table', (error, rows, fields) => {
        if(error) throw error;
        res.send(rows);
    });
    
});