const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const userPrompts = [
    {
    type: "input",
    message: "Please enter your GitHub username",
    name: "username"
    },
    {
    type: "checkbox",
    message: "Please choose a license for this file",
    name: "license",
    choices: [
        "Apache License",
        "GPL License",
        "Unlicensed (Public Domain)",
        "MIT License"
    ]},
    {
    type: "input",
    message: "Please enter a title for your project",
    name: "title"
    },
    {
    type: "input",
    message: "Please enter your email address",
    name: "email"
    },
    {
    type: "input",
    message: "Please enter a description of this project",
    name: "description"
    },
    {
    type: "input",
    message: "Please enter instructions for installing any relevant files, packages, etc.",
    name: "instruction"
    },
    {
    type: "input",
    message: "Please enter the any contributors to this project",
    name: "contribution"   
    },
    {
    type: "input",
    message: "Please enter any tests you would like to perform, as it pertains to this project",
    name: "test"
    }
];

inquirer
    .prompt(userPrompts).then(userData => {

        fs.appendFileSync("README.md", ("# " + userData.title) + '\n', function(err) {
        });

        fs.appendFileSync("README.md", ('\n' + "## " + userData.description) + '\n', function(err) {
        });

        fs.appendFileSync("README.md", ('\n' + "## - Follow these instructions to run application: " + userData.instruction) + '\n', function(err) {
        });

        fs.appendFileSync("README.md", ('\n' + "## - Wish to test this application? " + userData.test) + '\n', function(err) {
        });

        fs.appendFileSync("README.md", ('\n' + "## - Current License status of application: " + userData.choices) + '\n', function(err) {
        });

        fs.appendFileSync("README.md", ('\n' + "## - Developers who contributed to this application: " + userData.contribution) + '\n', function(err) {
        });

        fs.appendFileSync("README.md", ('\n' + "#### *For insights, concerns, or general contact, please email:* " + userData.email) + '\n', function(err) {
        });   

        fs.appendFileSync("README.md", ('\n' + "![Trilogy Education Services](https://jquinnie.github.io/TrilogyEducation/Assets/logos/logo_trilogy_blk.png)"), function(err) {
        })
    });