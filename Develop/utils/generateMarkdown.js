// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license === "Apache 2.0") {
    return `## Licence
  [![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === "IBM-IPL 1.0") {
    return `## Licence
  [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }
  if (license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license === "None") {
    licenseSection = ""
  } else {
    `licenseSection = License: $(license)`
  }
  return licenseSection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
 
  ## Description
  ${data.description}
  
  ## Table of Contents
  -[ Title](#title)
  -[ Description](#description)
  -[ Username](#username)
  -[ Installation](#installation)
  -[ Usage](#usage)
  -[ License](#license)
  -[ Contributors](#contributors)
  -[ Tests](#tests)
  -[ Email](#email)

  ## Github Username
  ${data.username}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributors}
  ## Tests
  ${data.tests}
  ## Email
  ${data.email}
  
`;
}

module.exports = generateMarkdown;