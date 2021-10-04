// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }



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

  let draftReadMe = `# ${userResponses.title}`



    `# ${data.title}

 # Description
 ${data.description}
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

  *Tests for application and how to run them:*

  ${userResponses.test}

  ## License

  ${userResponses.license}
  `
    let draftDev =
      `
      ---

      ##Questions?

      ![Developer Profile Picture](${userInfo.avatar_url})

      For any questions, please contact me at the information below:

      GitHub: [@${userInfo.login}](${userInfo.url})
  `;

    if (userInfo.email !== null) {
      draftDev +=
        `
    Email: ${userInfo.email}
    `
    };

    //add developer section to markdown
    draftReadMe += draftDev;

    return draftReadMe;


  };

  return generateMarkdown
}

module.exports = generateMarkdown;
