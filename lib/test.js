// Declare variables to hold dependencies
const asciiArt = require("./ascii");
const dbConnection = require("./dbConnection");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const q_AllEmployees = require("./q_AllEmployees");

console.log(asciiArt);
dbConnection;

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
                        console.log("\n-------------------------")
                        console.log(`Getting your query...\n-------------------------`);
                        dbConnection.query(q_AllEmployees, function (error, results) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.table(results);
                            }
                            promptUser();
                        });
                        console.log("\n-------------------------")
                        console.log(`Request completed\n-------------------------`);
                        break;
                    case "Add Employee":
                        // Function to get the current roles list from the DB
                        const fetchedRoles = await getRoles();
                        const fetchedManagers = await getManagers();

                        // Handle add employee logic
                        const addEmployeeAnswers = await inquirer.prompt([
                            {
                                type: "input",
                                name: "addemployeeName",
                                message: "What is the employee's first name?",
                            },
                            {
                                type: "input",
                                name: "addemployeelastName",
                                message: "What is the employee's last name?",
                            },
                            {
                                type: "list",
                                name: "addemployeeRole",
                                message: "What is the employee's role?",
                                choices: fetchedRoles,
                            },
                            {
                                type: "list",
                                name: "addemployeeManager",
                                message: "Who is the employee's manager?",
                                choices: fetchedManagers,
                            },
                        ]);

                        // Update Database Tables with information provided by user
                        const { addemployeeName, addemployeelastName, addemployeeRole, addemployeeManager } = addEmployeeAnswers;
                        dbConnection.query(addEmployees, function (error, results) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log("\n-------------------------")
                                console.log(`New Employee added successfully! \n-------------------------`);
                            }
                            promptUser();
                        });
                        break;
                    case "Update Employee":
                        // Handle update employee logic
                        break;
                    case "Delete Employee":
                        // Handle delete employee logic
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

promptUser();
