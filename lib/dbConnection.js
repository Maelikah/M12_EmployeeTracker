// Connection to MYSQL database
const mysql = require("mysql2");

const dbConnection = mysql.createConnection(
    {
        host: 'localhost',
         // MySQL Username
        user: 'root',
          // MYSQL Password: Add MySQL Password
        password: 'yourpassword',
        database: 'resources_db'
    },
    console.log(`Connected to the resources_db database.`)
);

module.exports = dbConnection;