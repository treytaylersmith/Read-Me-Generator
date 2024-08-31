// Returns license name or empty string if no license
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return "MIT License"
  }
  else if(license === "Apache"){
    return "Apache License 2.0"
  }
  else if(license === "Mozilla"){
    return "Mozilla Public License 2.0"
  }
  else if(license === "BSD 3-Clause"){
    return "BSD 3-Clause License"
  }
  else return ""
}

// returns link to license description or empty string if no license
function renderLicenseLink(license) {
  if(license === "MIT"){
    return "https://opensource.org/license/mit"
  }
  else if(license === "Apache"){
    return "https://opensource.org/license/apache-2-0"
  }
  else if(license === "Mozilla"){
    return "https://opensource.org/license/mpl-2-0"
  }
  else if(license === "BSD 3-Clause"){
    return "https://opensource.org/license/bsd-3-clause"
  }
   else return ""
}

// renders license markdown
function renderLicenseSection(license) {
  if(license === "n/a" ){
    return "n/a";
  }

  else {
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);

    return `[${badge}](${link})`
  }
}

function renderTableOfContents(data){
  let contents = "";
  let dataStrings = Object.entries(data);
  for(section of dataStrings){
    console.log(section);
    if(section[1] === "" || section[1] === "username"){

    }
    else{
     contents+= `- [${section[0].charAt(0).toUpperCase()+ section[0].slice(1)}](#${section[0]})\n`
   }
  }
  return contents;
}


function generateMarkdown(data) {
  if(data.Installation === ""){
    data.Installation === "n/a"
  }
  if(data.Usage === ""){
    data.Usage === "n/a"
  }
  if(data.Contribution === ""){
    data.Contribution === "n/a"
  }
  if(data.Test === ""){
    data.Test === "n/a"
  }
  return `# ${data.title}
${renderLicenseBadge(data.License)}\n
## Description\n
${data.description}\n
## Table of Contents\n
${renderTableOfContents(data)}\n
## Installation\n
${data.Installation}\n
## Usage\n
${data.Usage}\n
## License\n
${renderLicenseSection(data.License)}\n
## Questions\n
My GitHub: [${data.username}](htthttps://github.com/${data.username})\n
Email me with any additional questions at ${data.Questions}\n
`;
}

module.exports = generateMarkdown;
