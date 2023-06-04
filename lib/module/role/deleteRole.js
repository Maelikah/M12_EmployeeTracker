const inquirer = require("inquirer");
const dbConnection = require("../../dbConnection");
const getRolesList = require("../queries/getRolesList");



async function deleteRole(promptUser) {
    // Function to get the current roles list from the DB
    const fetchedRolesList = await getRolesList();


    // Handle delete roles logic
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
        const chosenRole = fetchedRolesList.find((role) => role.title === deleteRolesAnswers.deleteRole);
        const chosenRoleId = chosenRole ? chosenRole.role_id : null;
        
        // Update the employee records with the selected role ID to NULL
        dbConnection.query("UPDATE employee SET role_id = NULL WHERE role_id = ?", [chosenRoleId], function (error, results) {
            if (error) {
            console.log(error);
            } else {
            console.log("\n-------------------------");
            console.log("Foreign key dependencies updated successfully.");
            console.log("-------------------------");
            
            // Delete connection query
            dbConnection.query("DELETE FROM role WHERE title = ?", [chosenRole.title], function (error, results) {
                if (error) {
                console.log(error);
                } else {
                console.log("\n-------------------------");
                console.log(`Role deleted successfully! \n-------------------------`);
                console.log("\n-------------------------");
                }
                promptUser();
            });
            }
        });
        } else {
        console.log("\n-------------------------");
        console.log(`Deletion canceled. Role record was not deleted \n-------------------------`);
        console.log("\n-------------------------");
        promptUser();
        }
    }
    
module.exports = deleteRole;