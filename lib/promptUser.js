// Declare variables to hold dependencies
const inquirer = require("inquirer");
const dbConnection = require("./dbConnection");
// const getDepartments = require("./getDepartments");
// const getRoles = require("./getRoles");
// const getManagers = require("./getManagers");
const viewEmployees = require("./viewEmployees");
const addEmployee = require("./addEmployee");
const updateEmployee = require("./updateEmployee");
const deleteEmployee = require("./deleteEmployee");


// Create an async function to handle user responses

async function promptUser() {



    try {
        const moduleAnswers = await inquirer.prompt ([
            {
                type: "list",
                name: "moduleSelect",
                message: "Please select a module:",
                choices: [
                    "Employees", 
                    "Roles",
                    "Departments",
                    "Quit"
                ],    
            }
        ]);

        const selectedModule = moduleAnswers.moduleSelect;
        console.log("\n-------------------------")
        console.log(`You selected: ${selectedModule} \n-------------------------`);

        // Switch Case to handle Module Selection
        switch (selectedModule) {
            case "Employees":
                const employeeAnswers = await inquirer.prompt([
                    {
                        type: "list",
                        name: "employeeSelect",
                        message: "What would you like to do?",
                        choices: [
                            "View All Employees",
                            "Add Employee",
                            "Update Employee",
                            "Delete Employee",
                            "Quit",
                        ],
                    },
                ]);

                const selectedEmployeeOption = employeeAnswers.employeeSelect;
                console.log("\n-------------------------")
                console.log(`You selected: ${selectedEmployeeOption} \n-------------------------`);

                // Switch Case to handle Employee Choice Selection
                switch (selectedEmployeeOption) {
                    case "View All Employees":
                        // Handle view all employees query
                        viewEmployees(promptUser);
                        break;
                        
                    case "Add Employee":
                        // Handle adding employees to the database and tables
                        addEmployee(promptUser);
                        break;

                    case "Update Employee":
                        // Handle update employee logic
                        updateEmployee(promptUser);
                        break;

                    case "Delete Employee":
                        // Handle delete employee logic
                        deleteEmployee(promptUser);
                        break;
                        
                    case "Quit":
                        // Handle quit logic
                        break;
                    default:
                        console.log("Invalid option");
                        break;
                }
                break;
            case "Roles":
            case "Departments":
            case "Quit":
                // Handle other module selections
                break;
        }
    } catch (error) {
        console.log(error);
    }
}

//promptUser();


module.exports = promptUser;