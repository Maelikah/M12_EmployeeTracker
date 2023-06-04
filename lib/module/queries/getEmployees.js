// Create function to gather the current list of employees from the DB to use for several prompts

const dbConnection = require("../../dbConnection")

function getEmployees() {

    return new Promise((resolve, reject) => {
        const getEmployeesQuery = "SELECT id AS employee_id, CONCAT(first_name, ' ', last_name) AS employee_name FROM employee"
        dbConnection.query(getEmployeesQuery, (error, results) => {
                if (error) {
                    reject(error);
                } 
                else {
                    const employees = results.map((result) => {
                        return {
                            employeeId: result.employee_id,
                            employeeName: result.employee_name, 
                        };
                    });
                    resolve(employees);
                    }
        });
    });
}

module.exports = getEmployees;
