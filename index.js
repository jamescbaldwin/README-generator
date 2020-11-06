const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./markdownTemplate");

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
    message: "Please enter the nameall contributors to this project",
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
            if (err) {
                return console.log (err);
            } 
            console.log ("Success!");
        });

        fs.appendFileSync("README.md", ('\n' + userData.license) + '\n', function(err) {
            if (err) {
                return console.log (err);
            } 
            console.log ("Success!");
        });
        fs.appendFileSync("README.md", ("# " + userData.email) + '\n', function(err) {
            if (err) {
                return console.log (err);
            } 
            console.log ("Success!");
        });

        fs.appendFileSync("README.md", ("# " + userData.test) + '\n', function(err) {
            if (err) {
                return console.log (err);
            } 
            console.log ("Success!");
        });

        fs.appendFileSync("README.md", ("# " + userData.contribution) + '\n', function(err) {
            if (err) {
                return console.log (err);
            } 
            console.log ("Success!");
        });

        fs.appendFileSync("README.md", ("# " + userData.description) + '\n', function(err) {
            if (err) {
                return console.log (err);
            } 
            console.log ("Success!");
        });

        fs.appendFileSync("README.md", ("# " + userData.instruction) + '\n', function(err) {
            if (err) {
                return console.log (err);
            } 
            console.log ("Success!");
        });
    })



// function writeToFile(README.md, response) {
//     fs.writeFile(README.md, response, err => {
//         if (err) {
//             return console.log(err);
//         } else {
//             return console.log("You have successfully generated a README file!")
//         }
//     });
// }

// const writeFileAsync = util.promisify(fs.writeFile);

// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFileAsync("./output/" + fileName, data , function(err){
//         if(err){
//             return console.log(err);
//         }
//         console.log("successfully created " + fileName);
//     })
// }

// function to initialize program
// function initializeUX() {
//     inquirer.prompt(userPrompts)
//     .then(function(userData){
//         console.log(userData)
//         writeToFile("README.md", generateMarkdown(userData));
//     })
// }

// // function call to initialize program
// initializeUX();