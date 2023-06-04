// Create shared function to terminate the connection to the db

const dbConnection = require("../../dbConnection");

function quit () {
    console.log("\n-------------------------");
    console.log("Goodbye! Have a great day!");
    console.log("-------------------------");
    dbConnection.end(); 
} 

module.exports = quit;