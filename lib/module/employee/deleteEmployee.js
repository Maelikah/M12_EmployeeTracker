const inquirer = require("inquirer");
const dbConnection = require("../../dbConnection");
const getEmployees = require("../queries/getEmployees");
const getRolesList = require("../queries/getRolesList");
const getManagersList = require("../queries/getManagersList");


async function deleteEmployee(promptUser) {
    // Function to get the current roles list from the DB
    const fetchedEmployees = await getEmployees();


    // Handle add employee logic
    const deleteEmployeeAnswers = await inquirer.prompt([
        {
            type: "list",
            name: "deleteEmployee",
            message: "Which employee record would you like to delete?",
            choices: fetchedEmployees.map((employee) => employee.employeeName),
        },
        {
            type: "confirm",
            name: "confirmDelete",
            message: "Are you sure you want to delete the selected employee's record?",
        },
    ]); 
    
    if (deleteEmployeeAnswers.confirmDelete) {
        const chosenEmployee = deleteEmployeeAnswers.deleteEmployee;
        
        //Delete connection query
        dbConnection.query("DELETE FROM employee WHERE CONCAT(first_name, ' ', last_name) = ?", [chosenEmployee],  function (error, results) {
            if (error) {
                console.log(error);
            } else {
                console.log("\n-------------------------")
                console.log(`Employee record deleted successfully! \n-------------------------`);
            }
            promptUser();
        }
        ); 
    } else {
        console.log("\n-------------------------")
                console.log(`Deletion canceled. Employee record was not deleted \n-------------------------`);
                promptUser();
    }
}

module.exports = deleteEmployee;