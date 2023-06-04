const inquirer = require("inquirer");
const dbConnection = require("./dbConnection");
const getRolesList = require("./getRolesList");



async function updateRole(promptUser) {
    // Function to get the current roles list from the DB
    const fetchedRolesList = await getRolesList();

    // Handle update role logic
    const updateRoleAnswers = await inquirer.prompt([
        {
            type: "list",
            name: "updateRole",
            message: "Which role role would you like to update?",
            choices: fetchedRolesList.map((role) => role.title),
        },
        {
            type: "input",
            name: "updateroleSalary",
            message: "What is the new salary for the selected role?",
            validate: function (answer) {
                const isValid = !Number.isNaN(Number(answer));
                return isValid || "Please enter a valid number";
            },
        },
    ]); 
    
    const chosenRole = fetchedRolesList.find((role) => role.title === updateRoleAnswers.updateRole);
    const chosenRoleId = chosenRole ? chosenRole.role_id : null;
    const newSalary = updateRoleAnswers.updateroleSalary;

    dbConnection.query("UPDATE role SET salary = ? WHERE id = ?", [newSalary, chosenRoleId], function (error, results) {
        if (error) {
            console.log(error);
        } else {
            console.log("\n-------------------------")
            console.log(`Salary value updated successfully! \n-------------------------`);
        }
        promptUser();
    });
}

module.exports = updateRole;