// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = ['What is your project title? (Required)','Please enter a description of your project. (Required)','Please enter installation instructions for your project.',
'Please enter usage instructions.', 'Please enter contribution guidelines.','Please enter testing guidelines.', 'Please select licenses to be applied to your README.'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: questions[0],
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your project title!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: questions[1],
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter your project description!');
              return false;
            }
          }
        },
        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Would you like to enter some information about installation for an "Installation" section?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
            validate: installationInput => {
              if (installationInput) {
                return true;
              } else {
                console.log('Please enter your installation guidelines!');
                return false;
              }
            },
            when: ({ confirmInstallation }) => {
                if (confirmInstallation) {
                  return true;
                } else {
                  return false;
                }
              }
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to enter some information about application usage for a "Usage" section?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
            validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your usage guidelines!');
                return false;
            }
            },
            when: ({ confirmUsage }) => {
                if (confirmUsage) {
                return true;
                } else {
                return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like to enter some information about application usage for a "Contribution Guidelines" section?',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[4],
            validate: contributionInput => {
              if (contributionInput) {
                return true;
              } else {
                console.log('Please enter your contribution guidelines!');
                return false;
              }
            },
            when: ({ confirmContribution }) => {
                if (confirmContribution) {
                  return true;
                } else {
                  return false;
                }
              }
        },
        {
            type: 'confirm',
            name: 'confirmTesting',
            message: 'Would you like to enter some information about application usage for a "Testing Guidelines" section?',
            default: true
        },
        {
            type: 'input',
            name: 'testing',
            message: questions[5],
            validate: testingInput => {
              if (testingInput) {
                return true;
              } else {
                console.log('Please enter your testing guidelines!');
                return false;
              }
            },
            when: ({ confirmTesting }) => {
                if (confirmTesting) {
                  return true;
                } else {
                  return false;
                }
              }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: questions[6],
            choices: ['Test', 'Test 1', 'Test 2']
        },
      ]);
}

// Function call to initialize app
init();
