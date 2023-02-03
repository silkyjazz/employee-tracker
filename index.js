const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What's your name?"
  },
  {
    type: "list",
    name: "color",
    message: "What's your favorite color?",
    choices: ["Red", "Green", "Blue"]
  },
  {
    type: "confirm",
    name: "moreQuestions",
    message: "Do you want to answer more questions?",
    default: false
  }
];

const ask = async () => {
  let answer = await inquirer.prompt(questions[0]);
  console.log(answer);

  answer = await inquirer.prompt(questions[1]);
  console.log(answer);

  answer = await inquirer.prompt(questions[2]);
  console.log(answer);

  if (answer.moreQuestions) {
    ask();
  }
};

ask();
