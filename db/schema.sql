-- Make sure the resources database is removed and created new everytime the schema is sourced
DROP DATABASE IF EXISTS resources_db;
CREATE DATABASE resources_db;

-- Make sure to get positioned inside the resources_db database
USE resources_db;

-- Create department table
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) 
);

-- Create role table
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) ,
    salary DECIMAL ,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
    
);

-- Create employee table
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30) ,
    last_name VARCHAR(30) ,
    role_id INT ,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);