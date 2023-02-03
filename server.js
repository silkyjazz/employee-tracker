
const express = require("express");
const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3002;
const app = express();




app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Making a connection to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "password",
    database: "employee_db",
  },
  console.log('WELCOME TO THE EMPLOYEE TRACKER')
);

function viewDeparments() {
  inquirer
    .prompt([
    {
        type: 'list',
        name: 'answer',
        message: 'What would you like to do?',
        choices: ['view all departments','view all roles','view all employees','add a department','add a role','add an employee', 'update an employee']
    }
        
])

    .then(function (results){
        db.query('SELECT * FROM department', function (err, results) {
            if(err){
              throw err
            }else{
              console.table(results)
            }
            
          });
    });

}


function viewRoles(){
    inquirer
    .prompt([
    {
        type: 'list',
        name: 'answer',
        message: 'What would you like to do?',
        choices: ['view all departments','view all roles','view all employees','add a department','add a role','add an employee', 'update an employee']
    }
        
])

    .then(function (results){
        // console.log(answer)

        //join tables
        db.query("SELECT role.id as ID, role.title as 'Job Title', department.name as Department, role.salary as Salary  FROM role LEFT JOIN department ON role.department_id = department.id", function (err, results) {
            if(err){
              throw err
            }else{
              console.table(results)
            }
            
          });
    });
}

function viewEmployees(){
    inquirer
    .prompt([
    {
        type: 'list',
        name: 'answer',
        message: 'What would you like to do?',
        choices: ['view all departments','view all roles','view all employees','add a department','add a role','add an employee', 'update an employee']
    }
        
])

    .then(function (results){
        db.query("SELECT employee.id as 'Employee ID', employee.first_name AS 'First Name', employee.last_name AS 'Last Name', department.name AS Department, role.salary AS Salary, CONCAT(manager.first_name,' ',manager.last_name )  AS Manager, role.title AS Role FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id ORDER BY employee.id", function (err, results) {
            if(err){
              throw err
            }else{
              console.table(results)
            }
            
          });
    });
}

// function addDeparment(){
//     inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: 'departmentName',
//         message: 'What is the name of the department?'

//       },
//     ])
//     .then (function (result){
//         db.query(`INSERT ? INTO department`, function (err, result){
//             console.log('Department added to the database!')
//         })
//     })
//   }

// function addRole(){
//     inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is the name of the role?'
//       },
//       {
//         type: 'input',
//         name: 'salary',
//         message: 'What is the salary of the role?'
//       },
//       {
//         type: 'list',
//         name: 'departmentName',
//         message: 'What department does the role belong to?',
//         choice: [""] 
//       },

//     ])
//     .then (function (result){
//         db.query(`INSERT ? INTO roles`, function (err, result){
//             console.log('Role added to the database!')
//         })
//     })
// }

// function addEmployee(){
//     inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'firstName',
//             message: "What is the employee's first name?"
//         },
//         {
//             type: 'input',
//             name: 'lastName',
//             message: "What is your employee's last name?"
//         },
//         {
//             type: 'list',
//             name: 'role',
//             message: "What is the employee's role?",
//             choices: [] 
//         },
//         {
//             type: 'list',
//             name: 'role',
//             message: "Who is the employee's manager?",
//             choices: []
//         }
//     ])

//     .then(function (result){
//         db.query(`INSERT ? INTO employeee`, function (err, result){
//             console.log('Employee added to the database!')
//         })

//     })
// }




//How do i keep prompting questions?
//Add values into tables?
//how do i get all departments, roles, employees from the database including newly added ones?


// viewDeparments();
// viewRoles();
// viewEmployees();
// addDeparment();



app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
 

});
