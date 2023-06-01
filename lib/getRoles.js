// Create function to gather the current list of roles from the DB to use for the Add Employee prompt

const dbConnection = require("./dbConnection")

function getRoles() {

    return new Promise((resolve, reject) => {
        const getRolesQuery = "SELECT id, title FROM role"
        dbConnection.query(getRolesQuery, (error, results) => {
                if (error) {
                    reject(error);
                } 
                else {
                    const roles = results.map((role) => ({
                        value: role.id,
                        name: role.title,
                    }));
                    resolve(roles);
                }
        });
    });
}

module.exports = getRoles;
