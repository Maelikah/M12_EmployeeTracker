// Declare variables to hold dependencies
const inquirer = require("inquirer");
const dbConnection = require("./dbConnection");
// const getDepartments = require("./getDepartments");
// const getRoles = require("./getRoles");
// const getManagers = require("./getManagers");
const viewEmployees = require("./viewEmployees");
const viewRoles = require("./viewRoles");
const addEmployee = require("./addEmployee");
const addRole =require("./addRole");
const updateEmployee = require("./updateEmployee");
const updateRole = require("./updateRole");
const deleteEmployee = require("./deleteEmployee");
const deleteRole = require('./deleteRole');
const back = require("./back");
const quit = require("./quit");



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
                            "Back to previous menu",
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

                    case "Back to previous menu":
                        // Handle back logic
                        back(promptUser);
                        break;    

                    case "Quit":
                        // Handle quit logic
                        quit();
                        break;
                }
                break;
            case "Roles":
                const rolesAnswers = await inquirer.prompt([
                    {
                        type: "list",
                        name: "rolesSelect",
                        message: "What would you like to do?",
                        choices: [
                            "View All Roles",
                            "Add Role",
                            "Update Role",
                            "Delete Role",
                            "Back to previous menu",
                            "Quit",
                        ],
                    },
                ]);

                const selectedRolesOption = rolesAnswers.rolesSelect;
                console.log("\n-------------------------")
                console.log(`You selected: ${selectedRolesOption} \n-------------------------`);

                // Switch Case to handle Role Choice Selection
                switch (selectedRolesOption) {
                    case "View All Roles":
                        // Handle view all roles query
                        viewRoles(promptUser);
                        break;
                        
                    case "Add Role":
                        // Handle adding roles to the database and tables
                        addRole(promptUser);
                        break;

                    case "Update Role":
                        // Handle update role logic
                        updateRole(promptUser);
                        break;

                    case "Delete Role":
                        // Handle delete role logic
                        deleteRole(promptUser);
                        break;

                    case "Back to previous menu":
                        // Handle back logic
                        back(promptUser);
                        break;    

                    case "Quit":
                        // Handle quit logic
                        quit();
                        break;
                }
                break;
            case "Departments":
            case "Quit":
                // Handle quit logic
                quit();
                break;
        }
    } catch (error) {
        console.log(error);
    }
}

//promptUser();


module.exports = promptUser;