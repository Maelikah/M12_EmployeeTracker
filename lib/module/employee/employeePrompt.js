// Code to keep the Employee parent Object choices

const employeePrompt = [
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
]

module.exports = employeePrompt;