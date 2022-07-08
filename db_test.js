const mysql = require('mysql');

const db = mysql.createConnection( {
    host: 'localhost',
    user: 'ksh',
    password: '1234',
    database: 'test'
});

db.connect();

db.query('SELECT * FROM test_table', (error, rows, fields) => {
    if(error) throw error;
    console.log(rows);
});


db.end();

