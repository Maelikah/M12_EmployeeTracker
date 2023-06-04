// Code to keep the role  parent Object choices

const rolePrompt = [
    {
        type: "list",
        name: "rolesSelect",
        message: "What would you like to do?",
        choices: [
            "View All Roles",
            "Add Role",
            "Update Role",
            "Delete Role",
            "Back to previous menu",
            "Quit",
        ],
    },
]

module.exports = rolePrompt;