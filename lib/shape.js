class Shape {
    // gives color to each shape
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    } 
}

// renders a triangle 
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

//renders square
class Square extends Shape {
    render() {
        return `<rect x="90" y="40" fill="${this.color}"/>`
    }
}

//renders circle
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

module.exports = {Triangle, Square, Circle}