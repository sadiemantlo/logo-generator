class Shapes {
    constructor(textColor, color, characters) {
        this.textColor = textColor;
        this.color = color;
        this.characters = characters;
    }
}

class Triangle extends Shapes {
    constructor(textColor, color, characters, triangle) {
        super(textColor, color, characters);
        this.triangle = triangle;
    }
}

class Square extends Shapes {
    constructor(textColor, color, characters, square) {
        super(textColor, color, characters);
        this.square = square;
    }
}

class Circle extends Shapes {
    constructor(textColor, color, characters, circle) {
        super(textColor, color, characters);
        this.circle = circle;
    }
}