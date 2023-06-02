// Create function to gather the current list of roles from the DB to use for the Add Employee prompt

const dbConnection = require("./dbConnection")

function getDepartments() {

    return new Promise((resolve, reject) => {
        const getDepartmentsQuery = "SELECT name FROM department";
        
        dbConnection.query(getManagersQuery, (error, results) => {
                if (error) {
                    reject(error);
                } 
                else {
                    const departments = results.map((department) => ({
                        value: department.name,
                        name: department.name,
                    }));
                    resolve(departments);
                }
        });
    });
}

module.exports = getDepartments;
