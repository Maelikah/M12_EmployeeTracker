// Create function to query all departments

const dbConnection = require("../../dbConnection");

function viewDepartments(promptUser) {
    dbConnection.query(`
    SELECT department.id AS "Department ID",
        department.name AS "Department"
FROM department
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

module.exports = viewDepartments;