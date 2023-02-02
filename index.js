// console.log('hello')
const inquirer = require('inquirer');
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");
inquirer
  .prompt([
    {
      type: 'list',
      name: 'answer',
      message: 'What would you like to do?',
      choices: ['view all departments','view all roles','view all employees','add a department','add a role','add an employee', 'update an employee']
    },
  ])
  
  .then((response) => {
    console.log(response)
    // const filename = `${response.name.toLowerCase()}.json`;

    // fs.writeFile(filename, JSON.stringify(response, null, '/t'), (err) =>
    // err ? console.log(err) : console.log("Success")
    // );
  });
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}