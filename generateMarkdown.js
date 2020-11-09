// function to generate markdown for README
function generateMarkdown(userData) {
    return `
# ${userData.title}

## DEVELOPMENT
[View Your GitHub Repositories](https://github.com/${userData.username}?tab=repositories)

## CONTENTS

* [DESCRIPTION](#DESCRIPTION)
* [INSTALLATION](#INSTALLATION)
* [LICENSE](#LICENSE)
* [USAGE](#USAGE)
* [CONTRIBUTION](#CONTRIBUTION)
* [TEST](#TEST)


## DESCRIPTION
    ${userData.description}


## INSTALLATION
    ${userData.installation}


## LICENSE
    Permissions, Conditions, and Limitations of this code are in accordance to the following license:  ${userData.license}
![LICENSE BADGE](https://img.shields.io/badge/license-${userData.license}-blue.svg)


## USAGE
    ${userData.usage}


## CONTRIBUTION
    Current and former contributions made by: ${userData.contribution}


## TEST
    ${userData.test}


### QUESTIONS
    For questions or general insight, please contact ${userData.email}
  
  `;
  }
  
  module.exports = generateMarkdown;
  