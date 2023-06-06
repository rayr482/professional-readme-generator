// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = '';
    if (license === 'Apache License 2.0') {
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GNU General Public License v3.0') {
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'MIT License') {
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'BSD 2-Clause "Simplified" License') {
        badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
        badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    } else if (license === 'Boost Software License 1.0') {
        badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    } else if (license === 'Creative Commons Zero v1.0 Universal') {
        badge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
    } else if (license === 'Eclipse Public License 2.0') {
        badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    } else if (license === 'GNU Affero General Public License v3.0') {
        badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    } else if (license === 'GNU General Public License v2.0') {
        badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    } else if (license === 'GNU Lesser General Public License v2.1') {
        badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
    } else if (license === 'Mozilla Public License 2.0') {
        badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    } else if (license === 'The Unlicense') {
        badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    } else {
        return badge;
    }
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenselink = '';
    if (license === 'Apache License 2.0') {
        licenselink = 'https://choosealicense.com/licenses/apache-2.0/';
    } else if (license === 'GNU General Public License v3.0') {
        licenselink = 'https://choosealicense.com/licenses/gpl-3.0/';
    } else if (license === 'MIT License') {
        licenselink = 'https://choosealicense.com/licenses/mit/';
    } else if (license === 'BSD 2-Clause "Simplified" License') {
        licenselink = 'https://choosealicense.com/licenses/bsd-2-clause/';
    } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
        licenselink = 'https://choosealicense.com/licenses/bsd-3-clause/';
    } else if (license === 'Boost Software License 1.0') {
        licenselink = 'https://choosealicense.com/licenses/bsl-1.0/';
    } else if (license === 'Creative Commons Zero v1.0 Universal') {
        licenselink = 'https://choosealicense.com/licenses/cc0-1.0/';
    } else if (license === 'Eclipse Public License 2.0') {
        licenselink = 'https://choosealicense.com/licenses/epl-2.0/';
    } else if (license === 'GNU Affero General Public License v3.0') {
        licenselink = 'https://choosealicense.com/licenses/agpl-3.0/';
    } else if (license === 'GNU General Public License v2.0') {
        licenselink = 'https://choosealicense.com/licenses/gpl-2.0/';
    } else if (license === 'GNU Lesser General Public License v2.1') {
        licenselink = 'https://choosealicense.com/licenses/lgpl-3.0/';
    } else if (license === 'Mozilla Public License 2.0') {
        licenselink = 'https://choosealicense.com/licenses/mpl-2.0/';
    } else if (license === 'The Unlicense') {
        licenselink = 'https://choosealicense.com/licenses/unlicense/';
    } else {
        return licenselink;
    }
    return licenselink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    licenseSection = '';
    if (license) {
        licenseSection = `
## License

License used: ${license}

Link to License: ${licenselink}

`;
    } else {
        licenseSection = ``;
    }
    return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    badge = renderLicenseBadge(data.license);
    licenselink = renderLicenseLink(data.license);

    let template = `
# ${data.projectTitle}
  
${badge}
  
## Description
  
${data.description}

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

[License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

GitHub: [${data.username}](https://github.com/${data.username})

Email: [${data.email}](mailto:${data.email})
`;

    return template += renderLicenseSection(data.license);
}

module.exports = generateMarkdown;