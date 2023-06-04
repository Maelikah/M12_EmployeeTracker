// Code to keek the moduleAnswers parent Object choices

const modulePrompt = [
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
];

module.exports = modulePrompt;