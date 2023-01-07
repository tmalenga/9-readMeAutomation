// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { response } = require('express');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// inquirer
// .prompt(

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
        type: "input",
        message: "License:  ",
        name: "license",
    },
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data)
// }

function writeToFile(userInput) {
    fs.writeFile('./generatedreadMe.md', userInput, function(err){
        if (err) throw err
        console.log("success");
    })
}

// TODO: Create a function to initialize app
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
