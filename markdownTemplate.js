// function to generate markdown for README
function generateMarkdown(userData) {
    return `

# Project title ${userData.title}

## Developer Profile
[This Link] (https://github.com/${userData.username})

### Table of Contents
*[Contact](#Contact)
*[Description](#Description)
*[Installation](#Installation)
*[Usage](#Usage)
*[License](#License)
*[Contributor](#Contributor)
*[Test](#Test)

## Contact 
${userData.email}

## Description 
${userData.description}

## Installation 
${userData.installation}

## License 
${userData.license} 
![GitHub license](https://img.shields.io/badge/license-${userData.License}-blue.svg)

## Contributor 
${userData.contribution}

## Test
 ${userData.test}
  `;
  }
  
  module.exports = generateMarkdown;