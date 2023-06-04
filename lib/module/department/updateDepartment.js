const inquirer = require("inquirer");
const dbConnection = require("../../dbConnection");
const getDepartmentID = require ("../queries/getDepartmentID");



async function updateDepartment(promptUser) {
    // Function to get the current roles list from the DB
    const fetchedDeparmentsList = await getDepartmentID();

    // Handle update departmnet logic
    const updateDepartmentAnswers = await inquirer.prompt([
        {
            type: "list",
            name: "updateDepartment",
            message: "Which department would you like to update?",
            choices: fetchedDeparmentsList.map((department) => department.name),
        },
        {
            type: "input",
            name: "newDepartmentName",
            message: "What is the new department's name?",
        },
    ]); 
    
    const chosenDepartment = fetchedDeparmentsList.find((department) => department.name === updateDepartmentAnswers.updateDepartment);
    const chosenDepartmentId = chosenDepartment ? chosenDepartment.value : null;
    const newDepartmentName = updateDepartmentAnswers.newDepartmentName

    dbConnection.query("UPDATE department SET name = ? WHERE id = ?", [newDepartmentName, chosenDepartmentId], function (error, results) {
        if (error) {
            console.log(error);
        } else {
            console.log("\n-------------------------")
            console.log(`Salary value updated successfully! \n-------------------------`);
            console.log("\n-------------------------")
        }
        promptUser();
    });
}

module.exports = updateDepartment;