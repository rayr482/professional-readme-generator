const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({projectTitle, description, installation, usage, credits, license, badge, contributing, tests, username, email}) =>
`
# ${projectTitle}

${badge}

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
        type: 'rawlist',
        name: 'license',
        message: 'Please select one License:',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: 'rawlist',
        name: 'badge',
        message: 'Select the corresponding badge for your license. (Same number):',
        choices: ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)', '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)', '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)', '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)', '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)', '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)', '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)']
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
]).then((answers) => {
    const fileContent = generateREADME(answers);

    fs.writeFile('README2.md', fileContent, (err) => 
        err ? console.log(err) : console.log('Successfully created your Professional README file!')
    );
});