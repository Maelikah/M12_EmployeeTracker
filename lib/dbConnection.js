// Connect to database
const mysql = require("mysql2");

const dbConnection = mysql.createConnection(
    {
        host: 'localhost',
         // MySQL Username
        user: 'root',
          // TODO: Add MySQL Password
        password: 'Pajarito4225377#123',
        database: 'resources_db'
    },
    console.log(`Connected to the resources_db database.`)
);

module.exports = dbConnection;