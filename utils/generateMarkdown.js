const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');


// Function that returns a license badge based on which license is passed in && if there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
      badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = " "
  }
  return badge;
}

// Function that returns the license link && if there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses'
  } else {
    licenseLink = ""
  }
  return licenseLink;  
}

// Function that returns the license section of README && if there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description:
  ### ${data.description}

  ## Table of Contents:
  ### ${data.toc}

  ## Installation:
  ### You must install the following for this app to function:
  ### ${data.installation}

  ## Usage:
  ### ${data.usage}
  
  
  ## Contributing:
  ### ${data.contribution_guidelines}

  ## Test Instructions:
  ### ${data.test_instructions}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Questions:
  ## Please find me on github using my github username ${data.github_username}.
  ## For any questions or if you would like to get ahold of me, please reachout to me on ${data.email}.
`;
}

module.exports = generateMarkdown;
