
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

function mainMenu() {

    console.log("\n");

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'answer',
                message: 'What would you like to do?',
                choices: [
                    'view all departments',
                    'view all roles',
                    'view all employees',
                    'add a department',
                    'add a role',
                    'add an employee', 
                    'update an employee']
            }
        ])
        .then((answer) => {
            console.log(answer);

            if (answer.answer === "view all departments") {
                return viewDeparments();
            } else if (answer.answer === "view all roles") {
                return viewRoles();
            } else if (answer.answer === "view all employees") {
                return viewEmployees();
            }else if(answer.answer === 'add a department'){
                return addDeparment();
            }
        }) 

}


function viewDeparments() {

    db.query('SELECT * FROM department', function (err, results) {
        if(err){
            throw err
        }else{
            console.log("\n");
            console.table(results);

            return mainMenu();
        }
        
        });
}


function viewRoles(){


    db.query("SELECT role.id as ID, role.title as 'Job Title', department.name as Department, role.salary as Salary  FROM role LEFT JOIN department ON role.department_id = department.id", function (err, results) {
        if(err){
            throw err
        }else{
            console.log("\n");

            console.table(results);
            return mainMenu();
        }
        
        });

        
}

function viewEmployees(){



        db.query("SELECT employee.id as 'Employee ID', employee.first_name AS 'First Name', employee.last_name AS 'Last Name', department.name AS Department, role.salary AS Salary, CONCAT(manager.first_name,' ',manager.last_name )  AS Manager, role.title AS Role FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id ORDER BY employee.id", function (err, results) {
            if(err){
              throw err
            }else{
                console.log("\n");
              console.table(results);

              return mainMenu();
            }
            
          });

          
}

function addDeparment(){

    const departmentsArr = [];

    db.query('SELECT * FROM department', function (err, departments) {

        for (let i=0; i<departments.length; i++){
            departmentsArr.push(departments[i].name);
        }
        console.log("before updates: ", departmentsArr);

        inquirer
        .prompt([
          {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department?'
    
          }
        ])
        .then (function (result){
            const param = result.departmentName;
            db.query(`INSERT INTO department (name) VALUES (?)`, param);
            
            console.log("after updates: ", departmentsArr);

            return viewDeparments();
    
        })

    })

    
  }

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
//         choice: [deparmentArr] 
//       },

//     ])
//     .then (function (result){
//         db.query("INSERT INTO role (title,salary,department_id) VALUES(?,?,?)", function (err, result){
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


mainMenu();
//viewDeparments();
// viewRoles();
// viewEmployees();
// addDeparment();



app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
 

});
