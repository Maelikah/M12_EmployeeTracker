// Create function to gather the current list of roles from the DB to use for the Add Employee prompt

const dbConnection = require("../../dbConnection")

function getRoles(chosenDepartment) {

    return new Promise((resolve, reject) => {
        const getRolesQuery = `SELECT role.id, role.title FROM role JOIN department on role.department_id = department.id WHERE department.name = ?;`;
        dbConnection.query(getRolesQuery, chosenDepartment, (error, results) => {
                if (error) {
                    reject(error);
                } 
                else {
                    const roles = results.map((result) => {
                        return { id: result.id, title: result.title };
                    });
                    resolve(roles);
                    }
        });
    });
}

module.exports = getRoles;
