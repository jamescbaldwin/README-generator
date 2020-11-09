const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const fs = require("fs");

const userPrompts = [
    {
    type: "input",
    message: "Please enter your GitHub username",
    name: "username"
    },
    {
    type: "list",
    message: "Please choose a license for this file",
    name: "license",
    choices: [
        "APACHE_2.0",
        "GPL_3.0",
        "ISC",
        "MIT",
        "BSD_3.0"
    ]},
    {
    type: "input",
    message: "Please enter a title for your project",
    name: "title"
    },
    {
    type: "input",
    message: "Please enter general uses of this application",
    name: "usage"
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
    name: "installation"
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

function writeToFile(sampleREADME, userData) {
    fs.writeFileSync(sampleREADME, userData , function(err){
        if(err){
            return console.log(err);
        }
        console.log("sampleREADME.md " + "has been successfully created!");
    })
}

function initialize() {
    inquirer.prompt(userPrompts)
    .then(function(userData){
        writeToFile("sampleREADME.md", generateMarkdown(userData));
    })

}

initialize();