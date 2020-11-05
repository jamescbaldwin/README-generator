const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const userInfo = [
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
];

inquirer
    .prompt(userInfo).then(response => {

        fs.appendFileSync("README.md", ("# " + response.title) + '\n', function(err) {
            if (err) {
                return console.log (err);
            } 
            console.log ("Success!");
        });

        fs.appendFileSync("README.md", ("# " + response.title) + '\n', function(err) {
            if (err) {
                return console.log (err);
            } 
            console.log ("Success!");
        });

        fs.appendFileSync("README.md", ("# " + response.title) + '\n', function(err) {
            if (err) {
                return console.log (err);
            } 
            console.log ("Success!");
        });

        fs.appendFileSync("README.md", ("# " + response.title) + '\n', function(err) {
            if (err) {
                return console.log (err);
            } 
            console.log ("Success!");
        });

        fs.appendFileSync("README.md", ("# " + response.title) + '\n', function(err) {
            if (err) {
                return console.log (err);
            } 
            console.log ("Success!");
        });

        fs.appendFileSync("README.md", ("# " + response.title) + '\n', function(err) {
            if (err) {
                return console.log (err);
            } 
            console.log ("Success!");
        });

        fs.appendFileSync("README.md", ("# " + response.title) + '\n', function(err) {
            if (err) {
                return console.log (err);
            } 
            console.log ("Success!");
        });

        fs.appendFileSync("README.md", ("# " + response.title) + '\n', function(err) {
            if (err) {
                return console.log (err);
            } 
            console.log ("Success!");
        });

        fs.appendFileSync("README.md", ("# " + response.title) + '\n', function(err) {
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

