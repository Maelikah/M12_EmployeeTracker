// Create the contents for the .prompt part of inquirer
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
        when: (answers) => answers.moduleSelect === "Employees",  
    },

    {
        type: "list",
        name: "rolesSelect",
        message: "What would you like to do?",
        choices: [
            "View All Employees", 
            "Add Employee",
            "Update Employee",
            "De",
            "View All Roles",
            "Add Role",
            "Update Employee Role",
            "View All Departments",
            "Add Department",
            "Update Role",
            "Quit"
        ],  
        when: (answers) => {
            if (answers.moduleSelect === "Employees") {
                return true;
            }
                return false;
        }  
    },

    {
        type: "list",
        name: "departmentSelect",
        message: "What would you like to do?",
        choices: [
            "View All Employees", 
            "Add Employee",
            "Update Employee",
            "De",
            "View All Roles",
            "Add Role",
            "Update Employee Role",
            "View All Departments",
            "Add Department",
            "Update Role",
            "Quit"
        ],  
        when: (answers) => {
            if (answers.moduleSelect === "Employees") {
                return true;
            }
                return false;
        }  
    },
    

];

module.exports = questions;