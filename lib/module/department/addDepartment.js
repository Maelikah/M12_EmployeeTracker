const inquirer = require("inquirer");
const dbConnection = require("../../dbConnection");

async function addDepartment(promptUser) {

    // Handle add department logic
    const addDepartmentAnswers = await inquirer.prompt([
        {
            type: "input",
            name: "adddepartmentName",
            message: "What is the new department's name?",
        },
    ]);
    
    chosenDepartment = addDepartmentAnswers.adddepartmentName;

    
    // Update Database Tables with information provided by user
    
    dbConnection.query("INSERT INTO department (name) VALUES (?)", [chosenDepartment], function (error, results) {
        if (error) {
            console.log(error);
        } else {
            console.log("\n-------------------------")
            console.log(`New Department added successfully! \n-------------------------`);
        }
        promptUser();
    });
}

module.exports = addDepartment;