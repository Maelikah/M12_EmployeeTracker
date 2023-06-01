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
        
        

        // // Switch Case to handle Module Selection

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
                            console.table(results);
                        }
                    });
                    break;
                    
        //             case "Add Employee":
        //             // Handle add employee logic
        //             break;
                    
        //             case "Update Employee":
        //             // Handle update employee logic
        //             break;
                    
        //             case "Delete Employee":
        //             // Handle delete employee logic
        //             break;
                    
                    case "Quit":
                    // Handle quit logic
                    console.log('Goodbye!');
                             return;

                    break;
                    
                    default:
                    console.log("Invalid option");
                    break;
                }
                break;
                

        //     case "Roles":
        //     case "Departments":
             case "Quit":  
             console.log('Goodbye!');
                 return;  
         }




    
        // if (selectedModule === 'Employees') {
        //     const employeeAnswers = await inquirer.prompt([
        //     {
        //         type: 'list',
        //         name: 'employeeSelect',
        //         message: 'What would you like to do?',
        //         choices: [
        //             'View All Employees',
        //             'Add Employee',
        //             'Update Employee',
        //             'Delete Employee',
        //             'Quit'
        //         ],
        //     }
        //     ]);
    
        //     const selectedEmployeeAction = employeeAnswers.employeeSelect;
        //     console.log("\n")
        //     console.log(`You selected: ${selectedEmployeeAction}`);
        
        //     // Switch Case based on the selected employee action
        
        //     if (selectedEmployeeAction === 'Quit') {
        //         console.log('Goodbye!');
        //         return;
        //     }
        
        //     // Perform other actions based on the selected employee action
        //     }
        
        //     // Handle other selected modules
        
        } catch (error) {
            // Handle errors here
    }
};
    
    promptUser();