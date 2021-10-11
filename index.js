// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("../README-generator/Develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
questions = ["What is your project's name?", "What are the steps required to install your project?", "Provide screenshots and examples for use:", "Would you like to list any collaborators to your project?", "Please list their names with links to their GitHub profiles separated by commas:", "What license(s) would you like to include in your project?", "Would you like to include any badges for your project?", "Please choose which badge(s) you would like to add:", "Would you like to add any features to your project?", "Please type what feature(s) you would like to add separated by commas:"];

function questionsPrompt() {
    return inquirer
    
      .prompt([
        
        {
            type: "input",
            name: "projectName",
            message: questions[0],
        },
        {
            type: "input",
            name: "stepsForInstallation",
            message: questions[1],
        },
        {
            type: "input",
            name: "badgeInput",
            message: questions[6],
        },
        

          
      ])

      .then((data) => {
        return data;
        
      })

};



// TODO: Create a function to write README file
// const writeFile = data => {
//     return new Promise((resolve, reject) => {
//       fs.writeFile('./README.md', data, err => {
//         if (err) {
//           reject(err);
//           return;
//         }
  
//         resolve({
//           ok: true,
//           message: 'File created!'
//         });
//       });
//     });
//   };
// TODO: Create a function to initialize app
function init() {
    questionsPrompt();
    // writeFile();
    // console.log(writeFile);
    // generateMarkdown();
}

// Function call to initialize app
init();


