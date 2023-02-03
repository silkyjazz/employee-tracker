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
  console.log(`Welcome to the employee tracker`)
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
        console.log(results)

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
        console.log(results)

        db.query('SELECT * FROM department', function (err, results) {
            if(err){
              throw err
            }else{
              console.table(results)
            }
            
          });
    });
}

viewDeparments();



app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
