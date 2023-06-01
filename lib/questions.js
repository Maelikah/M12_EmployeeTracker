// Declare variables to hold dependencies
const inquirer = require("inquirer");
const dbConnection = require("./dbConnection");
const q_AllEmployees = require("./q_AllEmployees");

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
        console.log("\n")
        console.log(`You selected: ${selectedModule}`);

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
                console.log("\n");
                console.log(`You selected: ${selectedEmployeeOption}`);

                // Switch Case to handle Employee Choice Selection
                switch (selectedEmployeeOption) {

                    case "View All Employees":
                    // Handle view all employees query

                    dbConnection.query(q_AllEmployees, function (error, results) {
                        if (error) {
                            console.log(error);
                        } 
                        else {
                            console.log(results);
                        }
                    });
                    break;
                    
                    case "Add Employee":
                    // Handle add employee logic
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
        }




    
        if (selectedModule === 'Employees') {
            const employeeAnswers = await inquirer.prompt([
            {
                type: 'list',
                name: 'employeeSelect',
                message: 'What would you like to do?',
                choices: [
                    'View All Employees',
                    'Add Employee',
                    'Update Employee',
                    'Delete Employee',
                    'Quit'
                ],
            }
            ]);
    
            const selectedEmployeeAction = employeeAnswers.employeeSelect;
            console.log("\n")
            console.log(`You selected: ${selectedEmployeeAction}`);
        
            // Switch Case based on the selected employee action
        
            if (selectedEmployeeAction === 'Quit') {
                console.log('Goodbye!');
                return;
            }
        
            // Perform other actions based on the selected employee action
            }
        
            // Handle other selected modules
        
        } catch (error) {
            // Handle errors here
    }
}
    
    promptUser();
    
    



const questions = [

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
    },

    {
        type: "list",
        name: "employeeSelect",
        message: "What would you like to do?",
        choices: [
            "View All Employees", 
            "Add Employee",
            "Update Employee",
            "Delete Employee",
            "Quit"
        ],  
    },

    {
        type: "list",
        name: "rolesSelect",
        message: "What would you like to do?",
        choices: [
            "View All Roles",
            "Add Role",
            "Update Role",
            "Delete Role",
            "Quit"
        ],  
    },

    {
        type: "list",
        name: "departmentSelect",
        message: "What would you like to do?",
        choices: [
            "View All Departments",
            "Add Department",
            "Update Department",
            "Delete Department",
            "Quit"
        ],  
    },
    

];

module.exports = questions;