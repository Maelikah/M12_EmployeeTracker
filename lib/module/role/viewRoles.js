// Create function to query all roles

const dbConnection = require("../../dbConnection");

function viewRoles(promptUser) {
    dbConnection.query(`
    SELECT role.id AS "Role ID",
        role.title AS "Job Title",
        department.name AS "Department",
        role.salary AS "Salary"
FROM role
JOIN department ON role.department_id = department.id;
    `, function (error, results) {
        if (error) {
        console.log(error);
        } else {
        console.table(results);
        }
        console.log("\n-------------------------");
        promptUser();
    });
}

module.exports = viewRoles;