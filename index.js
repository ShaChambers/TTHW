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
//intern
//checkpoint

// Function to generate HTML template literal
// Function to write HTML file
// Function to get manager data
// Function to prompt next employee card
// Function to get engineer data
// Function to get intern data
// Function call to initialize app
