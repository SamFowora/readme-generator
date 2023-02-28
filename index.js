const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { error, Console } = require("console");

// array of questions for user
// project title, description, contents (just insert to generatemkd), installation, usage, licensing, contributing, tests, questions
const questions = () => {
    return inquirer.prompt([

    // project title
    {
        type: 'input',
        name: 'title',
        message: 'Insert project title: ',
        validate: (value) => {
            if (value){return true}
            else {return "Enter a title pretty please"}
        }
    },
    
    // project description
    {
        type: 'input',
        name: 'description',
        message: 'Insert project description: ',
        validate: (value)  => {
            if (value){return true}
            else {return "Come onnnn, enter a description"}
        }
    },
    
    // installing the project
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are required to install your project: ',
        validate: (value) => {
            if (value){return true}
            else {return "Pls...installation steps"}
        }
    },
    
    // how to use the app
    {
        type: 'input',
        name: 'usage',
        message: 'Insert instructions for project use: ',
        validate: (value) => {
            if (value){return true}
            else {return "Usage instructions, I'm BEGGING!"}
        }
    },
    
    // license choice, could use dropdown through inquirer
    {
        type: 'input',
        name: 'licensing',
        message: 'Choose project license: ',
        choices: ["MIT", "Apache 2.0", "GPLv3", "BSD 3-Clause", "Unlicense", "Other (Please manually add into README), N/A"],
        validate: (value) => {
            if (value){return true}
            else {return "No license? [insert megamind meme]"}
        }
    },
    
    // project credits
    {
        type: 'input',
        name: 'credits',
        message: 'Insert collaborators/credits: ',
        validate: (value) => {
            if (value){return true}
            else {return "Lone wolf?"}
        }
    },
    
    // tests?
    {
        type: 'input',
        name: 'tests',
        message: 'Insert tests: ',
        validate: (value) => {
            if (value){return true}
            else {return "Tests please :)"}
        }
    },
    
    // questions 
    {
        type: 'input',
        name: 'github',
        message: 'Insert GitHub profile link: ',
        validate: (value)  => {
            if (value){return true}
            else {return "No commits? [insert megamind meme]"}
        }
    },

    // email 
    {
        type: 'input',
        name: 'email',
        message: 'Insert email: ',
        validate: (value)  => {
            if (value){return true}
            else {return "They need an email to reach out to you :( "}
        }
    }
]);
};

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    return err
    ? console.error(err)
    : console.log("All done, check out your new README!")
});

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        writeToFile(`${data.filename}.md`, generateMarkdown(data))
    });
};

// function call to initialize program
init();
};