// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;

  switch(license) {
    case 'MIT':
      licenseBadge = {name: 'MIT', color: 'yellow-orange'};
      break;
    case 'Apache':
      licenseBadge = {name: 'Apache', color: 'yellow'};
      break;
    case 'BSD':
      licenseBadge = {name: 'BSD', color: 'orange'};
      break;
    case 'GNU General Public License':
      licenseBadge = {name: 'GNU General Public License', color: 'blue'};
      break;
    case '':
      licenseBadge = ''
  };
  return `https://img.shields.io/static/v1?label=license&message=${licenseBadge.name}&color=${licenseBadge.color})`;
};

// TODO: Create a function that returns the license link figure out how to find license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let licenseLink;
//   switch(license){
//     case 'MIT':
//       licenseLink = {href: }
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText;

  switch(license){
    case 'MIT':
      licenseText = `MIT License

      Copyright (c)
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
      `;
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
