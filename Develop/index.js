// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs")
const generateMarkdown = require("./utils/generateMarkdown");
const { resolve } = require("path");
// TODO: Create an array of questions for user input
const questions = [
   
    {
        type: "input",
        name: "title",
        message: "Hi what is your Project title?"
    },
    {
        type: "input",
        name: "description",
        message: "What id the Discription of your titile"
    },
    {
        type: "confirm",
        name: "tableOfContents",
        message: "Would you like to make a Table of Contents it would make it easy for users to find what they need (Optional)",
        default: true
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps needed to install your project? Provide a step-by-step description of how to get the development running"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. include screenshots as needed."
    },
    {
        type: "input",
        name: "credits",
        message: "Please list your collaborators, if any, with links to their GitHub profiles amd any third-party assets that you used"
    },

  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    return new Promise((resolve, reject) => {
        fs.writeToFile("./develop/README.md", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "README created!"
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then(questions, data => {
    console.log("making readme")
    fs.writeFile("ReadMe.md", inquirerResponse, data);
})
 }

// Function call to initialize app
init()
.then(writeToFile)
.then()
