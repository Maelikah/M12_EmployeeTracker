# Employee Tracker

</br>

![Github License](https://img.shields.io/badge/license-MIT-blue.svg)

</br>

---

##   📝 Description


---

</br>

The purpose of this repository is to apply the concepts reviewed during the week and generate an app that allows a user to update the employee database's tables using the command line using Node.js, Inquirer, and MySQL.

</br>

---


##   ⌨️ Programming Languages & Technologies
---

</br>

<div style="display: inline_block">

<img src="./assets/javascript.svg" alt="JavaScript">
&nbsp;&nbsp;
<img src="./assets/nodejs.svg" alt="NodeJS">
&nbsp;&nbsp;
<img src="./assets/mysql.svg" alt="MySQL">
&nbsp;&nbsp;
<img src="./assets/screen-castify-red.svg" alt="screencastify">

</div>

</br>


---

## 📑 Table of Contents

---

</br>

- [Installation](#💿-installation)
- [Usage](#💻-usage)
- [License](#🔏-license)
- [Credits](#🖋️-credits)
- [Tests](#🧪-tests)
- [User Story](#✍️-user-story)
- [Acceptance Criteria](#👏-acceptance-criteria)


</br>


---

##  💿 [Installation](#📑-table-of-contents)

---

</br>

1. Fork and clone repository to local machine 
2. Run `npm i` to install dependencies in local project directory


</br>


---

##   💻 [Usage](#📑-table-of-contents)

---

</br>

1. Open integrated terminal
2. Run node index.js
3. Answer the prompts that follow
4. Validate changes made by selecting any of the ```view``` options from the list .

</br>

The github URL containing the code for this project is located at:

https://github.com/Maelikah/M12_EmployeeTracker

</br>

Code Functionality:

![Code Generation Walkthrough Preview](./assets/Code-Walkthrough.gif)

</br>

User Input Functionality:

![User Input Walkthrough Preview](./assets/Input-Walkthrough.gif)

</br>

Tests Functionality:

![Tests Walkthrough Preview](./assets/Tests-Walkthrough.gif)

</br>


---

##  🔏 [License](#📑-table-of-contents)

---

</br>


 This project is licensed under the terms of the `MIT` license. 


</br>


---

## 🖋️ [Credits](#📑-table-of-contents)

---

</br>


- https://shields.io/category/license
- https://github.com/devicons/devicon/tree/master/icons
- https://www.npmjs.com/package/inquirer
- https://www.npmjs.com/package/inquirer#answers
- https://nodejs.org/en/docs
- https://nodejs.org/api/fs.html
- https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide

</br>


---

##   🧪 [Tests](#📑-table-of-contents)

---

</br>



Type `npm run test` on command line


</br>


---

## ✍️ [User Story](#📑-table-of-contents)

---

</br>

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```


</br>

---

## 👏 [Acceptance Criteria](#📑-table-of-contents)

---

</br>


```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

</br>


---

[Back to Top](#svg-logo-maker)