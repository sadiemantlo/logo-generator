const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');
const {Triangle, Square, Circle} = require('./lib/shape');

function init() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters to be included in the logo',
        },
        {
            type: 'input',
            name: 'shapeColor',
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
    .then ((response) => {
        console.log(response);
        let shape;
        if (response.shape === "triangle") {
            shape = new Triangle()
        }
        if (response.shape === "square") {
            shape = new Square()
        }
        if (response.shape === "circle") {
            shape = new Circle()
        }
        shape.setColor(response.shapeColor);
        const svg = new SVG();
        svg.setText(response.text, response.textColor);
        svg.setShape(shape);
        fs.writeFileSync('logo.svg', svg.render());
        console.log('logo.svg created succesfully');
    })
}

init();