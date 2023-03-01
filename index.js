const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');
const {Triangle, Square, Circle} = require('./lib/shapes');

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
            name: 'textColor',
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
        console.log(input);
        let chosenShape;
        if (input.shape === 'triangle') {
            chosenShape = new Triangle()
        }
        if (input.shape === 'square') {
            chosenShape = new Square()
        }
        if (input.shape === 'circle') {
            chosenShape = new Circle()
        }
        chosenShape.setColor(input.color)
        console.log(chosenShape)
    })
}

init();