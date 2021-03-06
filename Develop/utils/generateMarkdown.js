// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

    case "GNU GPLv3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`

    case "MPL 2.0":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `[MIT](https://opensource.org/licenses/MIT)`

    case "GNU GPLv3":
      return `[GPL-3.0-or-later](https://opensource.org/licenses/GPL-3.0)`

    case "MPL 2.0":
      return `[MPL-2.0](https://opensource.org/licenses/MPL-2.0)`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}



// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses) {
  //generate tob if user selects it 
  let tableOfContents = `# Table of Contents`;

  if (userResponses.installation !== "") {
    tableOfContents +=
      `* [Installation](#Installation)`
  };

  if (userResponses.usage !== "") {
    tableOfContents +=
      `* [Usage](#Usage)`

  };

  if (userResponses.contributing !== "") {
    tableOfContents +=
      `* [Contributing](#Contributing)`
  };

  if (userResponses.test !== "") {
    tableOfContents +=
      `* [Test](#Test)`
  };
  console.log(userResponses.title)
  let draftReadMe = ""




  draftReadMe += `#${userResponses.title}

 # Description
 ${userResponses.description}
`
  // add table of contents
  draftReadMe += tableOfContents

  // license section 
  draftReadMe += `
*[license](#license)
`
  // optional install
  if (userResponses.installation !== "") {
    draftReadMe +=
      `
  
  ## Tests

  Tests for application and how to run them:

  ${userResponses.test}

  ## License

   ${renderLicenseLink(userResponses.license) + renderLicenseBadge(userResponses.license)}
   
  

  ##Questions?

  For any questions, please contact me at the information below:

  GitHub: ${userResponses.github}
  

  Email: ${userResponses.email}
    `







  };
  return draftReadMe;

}

module.exports = generateMarkdown;
