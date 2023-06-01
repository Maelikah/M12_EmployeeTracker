-- Make sure to get positioned inside the resources_db database
USE resources_db;

-- All employees query 

SELECT  employee.id AS "ID", 
        employee.first_name AS "FIRST NAME", 
        employee.last_name AS "LAST NAME", 
        role.title AS "ROLE", 
        department.name AS "DEPARTMENT", 
        role.salary AS "SALARY", 
        CONCAT(manager.first_name, ' ', manager.last_name) AS "MANAGER"
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id
LEFT JOIN employee AS manager ON employee.manager_id = manager.id;
