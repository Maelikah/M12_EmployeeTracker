const inquirer = require("inquirer");
const dbConnection = require("../../dbConnection");
const getDepartmentID = require ("../queries/getDepartmentID");



async function deleteDepartment(promptUser) {
    // Function to get the current departments list from the DB
    const fetchedDepartmentsList = await getDepartmentID();


    // Handle delete department logic
    const deleteDepartmentAnswers = await inquirer.prompt([
        {
            type: "list",
            name: "deleteDepartment",
            message: "Which department would you like to delete?",
            choices: fetchedDepartmentsList.map((department) => department.name),
        },
        {
            type: "confirm",
            name: "confirmDelete",
            message: "Are you sure you want to delete the selected department?",
        },
    ]); 
    
    if (deleteDepartmentAnswers.confirmDelete) {
        const chosenDepartment = deleteDepartmentAnswers.deleteDepartment;
        
        //Delete connection query
        dbConnection.query("DELETE FROM department WHERE name = ?", [chosenDepartment],  function (error, results) {
            if (error) {
                console.log(error);
            } else {
                console.log("\n-------------------------")
                console.log(`Department deleted successfully! \n-------------------------`);
                console.log("\n-------------------------")
            }
            promptUser();
        }
        ); 
    } else {
        console.log("\n-------------------------")
        console.log(`Deletion canceled. Department record was not deleted \n-------------------------`);
        console.log("\n-------------------------")
        promptUser();
    }
}

module.exports = deleteDepartment;