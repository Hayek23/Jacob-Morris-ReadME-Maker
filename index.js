// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter the name for you application:',
        name: 'title',
    },
    {
        type: 'input',
        message:'Please describe your application:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please explain how to install your application:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please describe how your application is to be used:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please set some guidelines on how you would like other developers to contribute to your application:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please give some instructions on how to test your application:',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Please select which license you would like to use:',
        choices: ['MIT', 'Apache', 'BSD 3-Clause', 'GNU General Public License'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err){
            return console.log(err)
        }
        console.log('File created!')
    })
}

// TODO: Create a function to initialize app
async function init() {
    try{
        const data = await inquirer.prompt(questions);

        const createMarkdown = generateMarkdown(data);

        writeToFile('README.md', createMarkdown);
    } catch(err){
        console.log(err)
    }

};

// Function call to initialize app
init();
