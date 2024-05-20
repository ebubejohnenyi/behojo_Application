const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Godslove1231',
    database: 'seller_database',
    
})

module.exports = pool;
