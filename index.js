// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { response } = require('express');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input

const questions = 
[
    {
        type: "input",
        message: "What is the title of the project:  ",
        name: "title",
    },
    
    {
        type: "input",
        message: "Project description:  ",
        name: "description",
    },

    {
        type: "input",
        message: "Table of Contents (Optional):  ",
        name: "toc",
    },

    {
        type: "input",
        message: "Installation:  ",
        name: "installation",
    },

    {
        type: "input",
        message: "Usage:  ",
        name: "usage",
    },

    {
        type: "input",
        message: "Credits:  ",
        name: "credits",
    },

    {
        type: "list",
        message: "License:  ",
        choices: ["APACHE 2.0", "MIT", "None"],
        name: "license",
    },
];


function writeToFile(userInput) {
    fs.writeFile('./newREADME.md', userInput, function(err){
        if (err) throw err
        console.log("success");
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data);
    var userInput = generateMarkdown(data);
    console.log(userInput)
    writeToFile(userInput)
    });
}

// Function call to initialize app
init();

module.exports = questions;
