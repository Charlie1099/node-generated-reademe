// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "title",
        message: "Hi what is your Project title? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter the name of your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "What is the Discription of your project"
    },
    {
        type: "list",
        name: "tableOfContents",
        message: "Would you like to make a Table of Contents it would make it easy for users to find what they need (Optional)",
        choices:  ["Installation", "Usage", "Contributing", "Test"]
        
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
    {
        type: "list",
        name: "license",
        message: "What license would you like to add? (Required)",
        choices: ["None", "MIT", "GNU GPLv3", "MPL 2.0"],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log ("Please add a license!")
                return false;
            }
        } 
    },
    {
        type: "input",
        name: "badges",
        message: "Are there any badges that you would like to add? (Optional)",
    },
    {
        type: "input",
        name: "features",
        message: "Does you projet have features that you would like to show?"
    },
    {
        type: "input",
        name: "contributing",
        message: "do you want others to help with your project you can leave instructions on how"
    },
    {
        type: "input",
        name: "test",
        message: "is there any test that you want to write for your project"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("success! your readme is done")
    })
};

// TODO: Create a function to initialize app
function init() {
     inquirer.prompt(questions)
        .then((data) => {
            console.log(data)
            const myReadme = generateMarkdown(data)
            writeToFile("ReadMe.md", myReadme);
           
        })
}

// Function call to initialize app
init()
    