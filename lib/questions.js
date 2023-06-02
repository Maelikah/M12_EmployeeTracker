// Declare variables to hold dependencies
const inquirer = require("inquirer");
const dbConnection = require("./dbConnection");
const q_AllEmployees = require("./q_AllEmployees");
const getDepartments = require("./getDepartments");
const getRoles = require("./getRoles");
const getManagers = require("./getManagers");


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

                        dbConnection.query(q_AllEmployees, function (error, results) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.table(results);
                            }
                            console.log("\n-------------------------")
                            promptUser();
                        });
                        break;
                    case "Add Employee":
                        // Function to get the current roles list from the DB
                        const fetchedDepartments = await getDepartments();

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
                                name: "addemployeeDepartment",
                                message: "Which department will the employee work for?",
                                choices: fetchedDepartments,
                            },
                        ]); 
                        const chosenDepartment = addEmployeeAnswers.addemployeeDepartment;

                        // Handle add roles based on selected department logic
                        const fetchedRoles = await getRoles(chosenDepartment);
                        const addEmployeeRoleAnswers = await inquirer.prompt([    
                            {
                                type: "list",
                                name: "addemployeeRole",
                                message: "What is the employee's role within that department?",
                                choices: fetchedRoles.map((role) => role.title),
                            },
                        ]);

                        // Handle add manager based on selected department and role's department logic
                        const fetchedManagers = await getManagers(chosenDepartment);
                        console.log("fetchedmanagers" , fetchedManagers);
                        //fetchedManagers.unshift({ name: "None", value: null }); // Add None option at the beginning of the array
                        const addEmployeeManagerAnswers = await inquirer.prompt([    
                            {
                                type: "list",
                                name: "addemployeeManager",
                                message: "Who is the employee's manager?",
                                choices: fetchedManagers.map((manager) => manager.name),
                            },
                        ]);

                        // Translate selected roles and selected managers title/name to IDs
                        const { addemployeeName, addemployeelastName, addemployeeDepartment, addemployeeManager, } = addEmployeeAnswers;
                        
                        const selectedRole = fetchedRoles.find(
                            (role) => role.title === addEmployeeRoleAnswers.addemployeeRole
                            );
                        const selectedRoleId = selectedRole ? selectedRole.id : null;
                        
                        const selectedManager = fetchedManagers.find((manager) => manager.name === addEmployeeManagerAnswers.addemployeeManager);
                        const selectedManagerId = selectedManager ? selectedManager.value : null;

                        console.log(fetchedManagers);

                        console.log(selectedRole);
                        console.log(selectedRoleId);
                        console.log(selectedManager);
                        console.log(selectedManagerId);

                        // Update Database Tables with information provided by user
                        
                        dbConnection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [addemployeeName, addemployeelastName, selectedRoleId, selectedManagerId], function (error, results) {
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

//promptUser();


module.exports = promptUser;