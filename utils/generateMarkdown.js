// license badges
let license = data.license;

if (license === "MIT") {
  license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

} else if (license === "Apache 2.0") {
  license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

} else if (license === "GPLv3") {
  license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

} else if (license === "BSD 3-Clause") {
  license = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"

} else if (license === "Unlicense") {
  license = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${license}


## Description
${data.description}


## Contents


## Installation


## Usage


## License


## Credits


## Tests


## Questions

`;
}

module.exports = generateMarkdown;
