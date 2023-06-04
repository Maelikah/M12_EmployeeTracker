const inquirer = require("inquirer");
const dbConnection = require("../../dbConnection");
const getDepartments = require("../queries/getDepartments");
const getRoles = require("../queries/getRoles");
const getManagers = require("../queries/getManagers");

async function addEmployee(promptUser) {
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
}

module.exports = addEmployee;