const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({projectTitle, description, installation, usage, credits, license, contributing, tests, username, email}) =>
`
# ${projectTitle}

![badge](https://img.shields.io/badge/License-${license}-brightorange)

## Description

${description}

## Table of Contents

[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${license}

## Contributing

${contributing}

## Tests

${tests}

## Questions

Github: [${username}](https://github.com/${username})

Email: [${email}](mailto:${email})
`;

inquirer.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title for your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please explain how to install your application.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain how to use your application.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any other developers that worked on this project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select one License:',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'contibuting',
        message: 'Please describe how you would like other developers to contribute.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe how to test the application to ensure it is working properly.'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your preferred email to contact?'
    }
])
.then((answers) => {
    const fileContent = generateREADME(answers);

    fs.writeFile('README2.md', fileContent, (err) => 
        err ? console.log(err) : console.log('Successfully created your Professional README file!')
    );
});