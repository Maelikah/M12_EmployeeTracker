const inquirer = require("inquirer");
const dbConnection = require("./dbConnection");
const getRolesList = require("./getRolesList");



async function deleteRole(promptUser) {
    // Function to get the current roles list from the DB
    const fetchedRolesList = await getRolesList();


    // Handle add employee logic
    const deleteRolesAnswers = await inquirer.prompt([
        {
            type: "list",
            name: "deleteRole",
            message: "Which role would you like to delete?",
            choices: fetchedRolesList.map((role) => role.title),
        },
        {
            type: "confirm",
            name: "confirmDelete",
            message: "Are you sure you want to delete the selected role?",
        },
    ]); 
    
    if (deleteRolesAnswers.confirmDelete) {
        const chosenRole = deleteRolesAnswers.deleteRole;
        
        //Delete connection query
        dbConnection.query("DELETE FROM role WHERE title = ?", [chosenRole],  function (error, results) {
            if (error) {
                console.log(error);
            } else {
                console.log("\n-------------------------")
                console.log(`Role deleted successfully! \n-------------------------`);
            }
            promptUser();
        }
        ); 
    } else {
        console.log("\n-------------------------")
                console.log(`Deletion canceled. Employee record was not deleted \n-------------------------`);
                promptUser();
    }
}

module.exports = deleteRole;