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
const generateToC = (sectionText, sectionTitle) => {
  if (!sectionText) {
    return '';
  }
  return `
  -[${sectionTitle}](#${sectionTitle.replace(' ','-')})
  `;
}

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

const generateQuestions = (email, github) => {

  return `
  ## **Questions**
  email: ${email}
  GitHub: [${github}](https://github.com/${github})
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, contribution, testing, licenses, email, github} = data
  return readmeText=`
  ${renderLicenseBadge(licenses)}${renderLicenseLink(licenses)}
  # **${title}**

  ## **Table of Contents**
  ${generateToC(description,'Description')}
  ${generateToC(installation,'Installation')}
  ${generateToC(usage,'Usage')}
  ${generateToC(contribution,'Contribution Guidelines')}
  ${generateToC(testing,'Testing Guidelines')}
  ${generateToC(licenses,'License')}
  ${generateToC(true,'Questions')}

  ## **Description**
  ${description}

  ${generateInstallation(installation)}

  ${generateUsage(usage)}

  ${generateContribution(contribution)}
  
  ${generateTesting(testing)}

  ${generateLicense(licenses)}

  ${generateQuestions(email, github)}
  `;
}

module.exports = generateMarkdown;
