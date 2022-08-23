// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation instructions of your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information of your project?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors of your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you want to use??',
        choices: 
        ['MIT', 'Apache 2.0', 'IBM-IPL 1.0', 'None']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests?',
    },
]);

// TODO: Create a function to write README file
function writeToFile(data) {
    const readme = generateMarkdown(data);
fs.writeFile('Generated_Readme.md', readme, (err) => {
    err ? console.error(err): console.log('Success!')
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        writeToFile(data)
    })
}

// Function call to initialize app
init();
