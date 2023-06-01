// Create function to gather the current list of roles from the DB to use for the Add Employee prompt

const dbConnection = require("./dbConnection")

function getManagers() {

    return new Promise((resolve, reject) => {
        const getManagersQuery = `
        SELECT DISTINCT CONCAT(manager.first_name, ' ', manager.last_name) AS "MANAGERS"  
        FROM employee
        JOIN employee AS manager ON employee.manager_id = manager.id;
        `
        dbConnection.query(getManagersQuery, (error, results) => {
                if (error) {
                    reject(error);
                } 
                else {
                    const managers = results.map((manager) => ({
                        value: manager.id,
                        name: manager.title,
                    }));
                    resolve(managers);
                }
        });
    });
}

module.exports = getManagers;
