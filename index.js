// TODO: Include packages needed for this application
const { listenerCount } = require('events');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?"
  },
  {
    type: "input",
    name: "Description",
    message: "description of your project(explaining the what, why, and how. )"
  },
  {
    type: "input",
    name: "Installation",
    message: "installation instructions"
  },
  {
    type: "input",
    name: "Usage",
    message: "Usage of your application"
  },
  {
    type: "input",
    name: "Contributing",
    message: "provide your add guidelines for how to do collab on this project"
  },
  {
    ype: "input",
    name: "Tests",
    message: "tests for your application and how to run them"
  },
  {
    type: "input",
    name: "gitName",
    message: "provide your git username"
  },
  {
    type: "input",
    name: "email",
    message: "provide your email for any question"
  },
  {   
    type: "list",
    name: "license",
    choices: ["mit", "gnu"],
  	message: "choose a license"      
  },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then(userResponse => {
    writeToFile("TEST.md", userResponse);
  })
  .catch(err => {
  console.error(err);
  });
}

// Function call to initialize app
init();
          