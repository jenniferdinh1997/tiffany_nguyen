const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'jennifer',
    password: 'root',
    database: 'tiffany_nguyen'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database');
        return;
    }
    console.log('Connected to database');
});

module.exports = connection;