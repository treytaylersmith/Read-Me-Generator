const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { writeFile } = require('fs').promises;

// List of questions
const questions = [
    {
        type: "input",
        name: "title",
        message:"What is the title of your project?",
        
    },
    {
        type: "input",
        name: "description",
        message: "Enter a short description for your project"
    },
    {
        type: "input",
        name: "Installation",
        message:"Enter the installation instructions for your project (leave blank if there are none)",
        
    },
    {
        type: "list",
        name: "License",
        message:"What license would you like to use?",
        choices: ["MIT","Apache","Mozilla","BSD 3-Clause", "n/a"]
        
    },
    {
        type: "input",
        name: "Usage",
        message:"Enter the usage information for your project (leave blank if there is not any)",
        
    },
    {
        type: "input",
        name: "Contribution",
        message:"Enter the contribution guidelines for your project (leave blank if there are none)",
        
    },
    {
        type: "input",
        name: "Test",
        message:"Enter the testing instructions for your project (leave blank if there are none)",        
    },
    {
        type: "input",
        name: "Questions",
        message:"What is your email?",
        
    },
    {
        type: "input",
        name: "username",
        message:"What is your GitHub username?",
        
    }
];

// Function to handle creating or writing to README
function writeToFile(fileName, data) {
    writeFile(fileName, generateMarkdown(data))
    .then(() => console.log('Successfully wrote to README.md'))
   .catch((err) => console.error(err));
}

function init() {
    inquirer.prompt(questions)
    .then((data) =>{
        writeToFile("./output/generated-README.md", data);
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();

