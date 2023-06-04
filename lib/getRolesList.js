// Create function to gather the current list of roles from the DB to use for the Update Employee prompt

const dbConnection = require("./dbConnection")

function getRolesList() {

    return new Promise((resolve, reject) => {
        const getRolesListQuery = `SELECT role.id, role.title, role.department_id, role.salary FROM role`;
        dbConnection.query(getRolesListQuery, (error, results) => {
                if (error) {
                    reject(error);
                } 
                else {
                    const roles = results.map((result) => {
                        return { role_id: result.id, title: result.title, department: result.department, salary:result.salary };
                    });
                    resolve(roles);
                    }
        });
    });
}

module.exports = getRolesList;