const inquirer = require("inquirer");
const dbConnection = require("./dbConnection");
const getEmployees = require("./getEmployees");
const getRolesList = require("./getRolesList");
const getManagersList = require("./getManagersList");

const getDepartments = require("./getDepartments");
const getRoles = require("./getRoles");
const getManagers = require("./getManagers");

async function updateEmployee(promptUser) {
    // Function to get the current roles list from the DB
    const fetchedEmployees = await getEmployees();
    const fetchedRolesList = await getRolesList();

    // Handle add employee logic
    const updateEmployeeAnswers = await inquirer.prompt([
        {
            type: "list",
            name: "updateEmployee",
            message: "Which employee role would you like to update?",
            choices: fetchedEmployees.map((employee) => employee.employeeName),
        },
        {
            type: "list",
            name: "updateemployeeRole",
            message: "What is the new role for the selected employee?",
            choices: fetchedRolesList.map((role) => role.title)
        },
    ]); 
    
    const chosenEmployee = updateEmployeeAnswers.updateEmployee;
    const chosenRole = updateEmployeeAnswers.updateemployeeRole;
    
    

    // Handle add manager based on selected department and role's department logic
    const fetchedManagersList = await getManagersList(chosenRole);
    
    //fetchedManagers.unshift({ name: "None", value: null }); // Add None option at the beginning of the array
    const updateEmployeeManagerAnswers = await inquirer.prompt([    
        {
            type: "list",
            name: "updateemployeeManager",
            message: "Who is the employee's new manager?",
            choices: fetchedManagersList.map((manager) => manager.name),
        },
    ]);

    const chosenManager = updateEmployeeManagerAnswers.updateemployeeManager;
    let managerId;
        if (chosenManager === "None") {
            managerId = null;
        } else {
        const manager = fetchedManagersList.find((manager) => manager.name === chosenManager);
        managerId = manager.value;
    }

    dbConnection.query("UPDATE employee SET role_id = ?, manager_id = ? WHERE CONCAT(first_name, ' ', last_name) = ?",
    [
        fetchedRolesList.find((role) => role.title === chosenRole).role_id,
        managerId,
        chosenEmployee,
    ],  function (error, results) {
        if (error) {
            console.log(error);
        } else {
            console.log("\n-------------------------")
            console.log(`Employee record updated successfully! \n-------------------------`);
        }
        promptUser();
    });
}

module.exports = updateEmployee;