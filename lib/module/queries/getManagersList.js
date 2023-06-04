// Create function to gather the current list of roles from the DB to use for the Update Employee prompt exclusively.

const dbConnection = require("../../dbConnection");

function getManagersList(chosenRole) {
    return new Promise((resolve, reject) => {
        const getManagersListQuery = `
            SELECT CONCAT(employee.first_name, ' ', employee.last_name) AS manager_name, employee.id AS manager_id
            FROM employee
            JOIN role ON employee.role_id = role.id
            JOIN department ON role.department_id = department.id
            WHERE role.title LIKE '%manager%' AND department.id = (
                SELECT department_id
                FROM role
                WHERE title = ?
            );
            `;

        dbConnection.query(getManagersListQuery, chosenRole, (error, results) => {
        if (error) {
            reject(error);
        } else {
            const managers = results.map((result) => ({
            name: result.manager_name,
            value: result.manager_id,
            }));
            // Add the "None" option
            managers.unshift({ name: "None", value: null });

            resolve(managers);
        }
        });
    });
}

module.exports = getManagersList;