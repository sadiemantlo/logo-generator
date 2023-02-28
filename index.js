const inquirer = require('inquirer');
const fs = require('fs');

function init() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'characters',
            message: 'Enter up to 3 characters to be included in the logo',
        },
        {
            type: 'input',
            name: 'color',
            message: 'What would you like the background color to be?',
        },
        {
            type: 'input',
            name: 'text',
            message: 'What would you like the text color to be?',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like the logo to be?',
            choices: ['circle', 'triangle', 'square'],
        },
    ])
    .then ((input) => {
        console.log(input.text);
        console.log(input.color);
        console.log(input.shape);
        console.log(input.characters);
    })
}

init();