// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, data) {
 //generate tob if user selects it 
 let tableOfContents = `# Table of Contents`;

 if (userResponses.installation !== "") {
   tableOfContents += 
   `* [Installation](#installation)`
 };

 if (userResponses.usage !== "") {
   tableOfContents +=
  `* [Usage](#usage)`
};

if (userResponses.contributing !== "") {
  tableOfContents += 
  `* [Contributing](#contributing)`
};

if (userResponses.test !== "") {
  tableOfContents +=
  `* [Test](#test)`
};


 
  return `# ${data.title}
 # Description
 ${data.description}
 
draftM

 # Installatin
 ${data.installatin}

`;
}

module.exports = generateMarkdown;
