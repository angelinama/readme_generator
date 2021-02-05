const fs = require('fs');
const inquirer = require('inquirer');

// const questions = [
//     //    What is your name
//       {
//         type: "input",
//         name: "yourName",
//         message: "What is your name?"
//       },
//     //    What is your location
//       {
//         type: "input",
//         name: "location",
//         message: "What is your location?"
//       },
//     //    Tell us about yourself
//       {
//         type: "input",
//         name: "bio",
//         message: "Tell us about yourself"
//       },
//     //    LinkedIn URL
//       {
//         type: "input",
//         name: "linkedIn",
//         message: "Please enter your LinkedIn URL"
//       },
//     //    Github URL
//       {
//         type: "input",
//         name: "gitHub",
//         message: "Please enter your gitHub URL"
//       },
//     ]
    
//     const writeHTML = (userResponses) => {
//         // put user info into html code
//         // filename
//         // content
//         const content = renderAtTemplate("template.html", userResponses);
//         console.log(content);
//         // write the html code into a file called index.html
//         // we can use fs.writeFileSync here
//         fs.writeFileSync("index.html", content, "utf8");
      
//       }
          