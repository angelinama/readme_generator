// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return "";
  if (license === "MIT License") return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  if (license === "Apache License 2.0") return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  if (license === "GNU General Public License v3.0") return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  //TODO: Add more license type
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return "";
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return "";
  return `this project is s licensed under the [${license}] (${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}  
  ## Description
  ${data.Description}  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)  
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}  
  ## License
  ${renderLicenseSection(data.license)}  
  ## Contributing
  ${data.Contributing}  
  ## Tests
  ${data.Tests}
  ## Questions
  connect with me on [my Github](https://github.com/${data.gitName}) and if you have additional questions, please email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
