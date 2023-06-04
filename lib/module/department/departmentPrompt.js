// Code to keep the department  parent Object

const departmentPrompt = [
    {
        type: "list",
        name: "departmentSelect",
        message: "What would you like to do?",
        choices: [
            "View All Departments",
            "Add Department",
            "Update Department",
            "Delete Department",
            "Back to previous menu",
            "Quit",
        ],
    },
]

module.exports = departmentPrompt;