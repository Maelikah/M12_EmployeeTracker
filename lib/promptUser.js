// Declare variables to hold global dependencies
const inquirer = require("inquirer");
// Declare variables to hold module dependencies
const modulePrompt = require("./module/modulePrompt");
const employeePrompt = require("./module/employee/employeePrompt");
const rolePrompt = require("./module/role/rolePrompt");
const departmentPrompt = require("./module/department/departmentPrompt");
// Declare variables to hold View dependencies
const viewEmployees = require("./module/employee/viewEmployees");
const viewRoles = require("./module/role/viewRoles");
const viewDepartments = require("./module/department/viewDepartments");
// Declare variables to hold Add dependencies
const addEmployee = require("./module/employee/addEmployee");
const addRole = require("./module/role/addRole");
const addDepartment = require("./module/department/addDepartment"); 
// Declare variables to hold update dependencies
const updateEmployee = require("./module/employee/updateEmployee");
const updateRole = require("./module/role/updateRole");
// Declare variables to hold delete dependencies
const deleteEmployee = require("./module/employee/deleteEmployee");
const deleteRole = require('./module/role/deleteRole');
// Declare variables to hold shared dependencies
const back = require("./module/shared/back");
const quit = require("./module/shared/quit");

// Create an async function to handle user responses
async function promptUser() {

    try {
        const moduleAnswers = await inquirer.prompt (modulePrompt);
        const selectedModule = moduleAnswers.moduleSelect;
        console.log("\n-------------------------")
        console.log(`You selected: ${selectedModule} \n-------------------------`);

        // Switch Case to handle Module Selection
        switch (selectedModule) {
            case "Employees":
                const employeeAnswers = await inquirer.prompt(employeePrompt);
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
                const rolesAnswers = await inquirer.prompt(rolePrompt);

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
                const departmentAnswers = await inquirer.prompt(departmentPrompt);

                const selectedDepartmentOption = departmentAnswers.departmentSelect;
                console.log("\n-------------------------")
                console.log(`You selected: ${selectedDepartmentOption} \n-------------------------`);

                // Switch Case to handle Department Choice Selection
                switch (selectedDepartmentOption) {
                    case "View All Departments":
                        // Handle view all roles query
                        viewDepartments(promptUser);
                        break;
                        
                    case "Add Deoartnebt":
                        // Handle adding deparments to the database and tables
                        addDepartment(promptUser);
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