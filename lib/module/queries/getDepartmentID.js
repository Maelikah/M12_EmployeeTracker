// Create function to gather the current list of departments and ids from the DB to use for several prompts

const dbConnection = require("../../dbConnection")

function getDepartmentID() {

    return new Promise((resolve, reject) => {
        const getDepartmentIDQuery = "SELECT id, name FROM department";
        
        dbConnection.query(getDepartmentIDQuery, (error, results) => {
                if (error) {
                    reject(error);
                } 
                else {
                    const departmentID = results.map((department) => ({
                        value: department.id,
                        name: department.name,
                    }));
                    resolve(departmentID);
                }
        });
    });
}

module.exports = getDepartmentID;
