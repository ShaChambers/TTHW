// Packages needed for application
const inquirer = require("inquirer");
const fs = require("fs");
const employeeList = [];
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// Array of questions for user input
const managerQuestions = [
  {
    type: "input",
    message: "Enter manager's name:",
    name: "managerName",
  },
  {
    type: "input",
    message: "Enter manager's employee ID:",
    name: "managerId",
  },
  {
    type: "input",
    message: "Enter manager's email address:",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Enter manager's office number:",
    name: "officeNumber",
  },
];
//engineer
const engineerQuestions = [
  {
    type: "input",
    message: "Enter Engineer's name:",
    name: "engineerName",
  },
  {
    type: "input",
    message: "Enter Engineer's employee ID:",
    name: "engineerId",
  },
  {
    type: "input",
    message: "Enter Engineer's email address:",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "Enter Engineer's github username:",
    name: "github",
  },
];
//intern
const internQuestions = [
  {
    type: "input",
    message: "Enter Intern's name:",
    name: "internName",
  },
  {
    type: "input",
    message: "Enter Intern's employee ID:",
    name: "internId",
  },
  {
    type: "input",
    message: "Enter Intern's email address",
    name: "internEmail",
  },
  {
    type: "input",
    message: "Enter Intern's school",
    name: "school",
  },
];
//checkpoint

// Function to generate HTML template literal
// Function to write HTML file
// Function to get manager data
// Function to prompt next employee card
// Function to get engineer data
// Function to get intern data
// Function call to initialize app
