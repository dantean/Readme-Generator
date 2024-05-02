// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license!=="No License"){
    return `![github license](https://img.shields.io/badge/license-${license}-yellow.svg)`
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This application is licensed under the ${license} license.`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}  

module.exports = generateMarkdown;

## Description
 
${data.description} 

## Table of Contents (Optional)
 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage} 

## Contributing

${data.contributing} 

## License

${renderLicenseSection(data.license)}
 
## Tests

 ${data.test}

 ## Questions
   <ul>
     <li> <a href='mailto://${data.email}?subject="contact me"&body="hi"'> Email Me </a>  </li>
     <li> <a href='https://github.com/${data.username}'> My Github Profile </a>   </li> 
  </ul>
`;
}

module.exports = generateMarkdown;
