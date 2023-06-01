
// Declare variables to hold dependencies
const asciiArt = require("./lib/ascii");
const dbConnection = require("./lib/dbConnection");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const promptUser = require("./lib/questions");

console.log(asciiArt);
// dbConnection.connect((err) => {
//     if (err) {
//         console.error("Error connecting to database:", err);
//         return;
//     }
//     console.log("Connected to the resources_db database.");
    
// });

promptUser();