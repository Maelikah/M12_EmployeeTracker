
// Declare variables to hold dependencies
const asciiArt = require("./lib/ascii");
const dbConnection = require("./lib/dbConnection");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const promptUser = require("./lib/promptUser");

console.log(asciiArt);


promptUser();