const dbConnection = require("./dbConnection");

function quit () {
    console.log("\n-------------------------");
    console.log("Goodbye! Have a great day!");
    console.log("-------------------------");
    dbConnection.end(); // End the database connection
} 

module.exports = quit;