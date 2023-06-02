// Create function to gather the current list of roles from the DB to use for the Add Employee prompt

const dbConnection = require("./dbConnection")

function getManagers(chosenDepartment) {
    return new Promise((resolve, reject) => {
      const getManagersQuery = `
        SELECT CONCAT(first_name, ' ', last_name) AS manager_name, id AS manager_id
        FROM employee
        WHERE manager_id IS NULL
          AND role_id IN (
            SELECT id
            FROM role
            WHERE department_id = (
              SELECT id
              FROM department
              WHERE name = ?
            )
          )
      `;
  
      dbConnection.query(getManagersQuery, chosenDepartment, (error, results) => {
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

module.exports = getManagers;
