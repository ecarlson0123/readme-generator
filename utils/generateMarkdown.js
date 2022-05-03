// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==='The Do What the Fuck You Want to Public License'){
    return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]'
  }
  else if(license === 'IBM Public License Version 1.0'){
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]'
  }
  else if(license === 'MIT License'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'The Do What the Fuck You Want to Public License'){
    return '(http://www.wtfpl.net/about/)'
  }
  else if(license === 'IBM Public License Version 1.0'){
    return '(https://opensource.org/licenses/IPL-1.0)'
  }
  else if(license === 'MIT License'){
    return '(https://opensource.org/licenses/MIT)'
  }
  return
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// GENERATE SECTIONS
const generateLicense = license => {
  if (license === 'No License') {
    return '';
  }
  return `
  ## **License**
  ${license}
  `;
}

const generateInstallation = installationText => {
  if (!installationText) {
    return '';
  }

  return `
  ## **Installation**
  ${installationText}
  `;
}

const generateUsage = usageText => {
  if (!usageText) {
    return '';
  }

  return `
  ## **Usage**
  ${usageText}
  `;
}

const generateContribution = contributionText => {
  if (!contributionText) {
    return '';
  }

  return `
  ## **Contribution Guidelines**
  ${contributionText}
  `;
}

const generateTesting = testingText => {
  if (!testingText) {
    return '';
  }

  return `
  ## **Testing Guidelines**
  ${testingText}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, contribution, testing, licenses, fileName} = data
  return readmeText=`
  ${renderLicenseBadge(licenses)}${renderLicenseLink(licenses)}
  # ${title}
  ## **Description**
  ${description}

  ${generateInstallation(installation)}

  ${generateUsage(usage)}

  ${generateContribution(contribution)}
  
  ${generateTesting(testing)}

  ${generateLicense(licenses)}
  `;
}

module.exports = generateMarkdown;
