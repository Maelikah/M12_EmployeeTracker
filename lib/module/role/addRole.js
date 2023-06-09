const inquirer = require("inquirer");
const dbConnection = require("../../dbConnection");
const getDepartmentID = require("../queries/getDepartmentID");


async function addRole(promptUser) {
    // Function to get the current departments list from the DB
    const fetchedDepartments = await getDepartmentID();

    // Handle add role logic
    const addRoleAnswers = await inquirer.prompt([
        {
            type: "input",
            name: "addroleTitle",
            message: "What is the role's title?",
        },
        {
            type: "input",
            name: "addroleSalary",
            message: "What is the expected salary for the role?",
            validate: function (answer) {
                const isValid = !Number.isNaN(Number(answer));
                return isValid || "Please enter a valid number";
            },
        },
        {
            type: "list",
            name: "addroleDepartment",
            message: "Which department will this role belong to?",
            choices: fetchedDepartments.map((department) =>department.name),
        },
    ]); 

    const chosenDepartment = fetchedDepartments.find((department) => department.name === addRoleAnswers.addroleDepartment);
    const chosenDepartmentId = chosenDepartment ? chosenDepartment.value : null;


    // Translate selected roles and selected deparment title/name to IDs
    const { addroleTitle, addroleSalary, addroleDepartment } = addRoleAnswers;
    
    // Update Database Tables with information provided by user
    
    dbConnection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [addroleTitle, addroleSalary, chosenDepartmentId], function (error, results) {
        if (error) {
            console.log(error);
        } else {
            console.log("\n-------------------------")
            console.log(`New Role added successfully! \n-------------------------`);
            console.log("\n-------------------------")
        }
        promptUser();
    });
}

module.exports = addRole;