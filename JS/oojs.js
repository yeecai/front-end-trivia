//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript

//OOJS 1
function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

// Write your code below here
Shape.prototype.calcPerimeter = function() {
  return this.sides * this.sideLength
}


// var square = new Shape('square', 4, 5)
// square.calcPerimeter()


//OOJS 2
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    };

    calcPerimeter() {
        return this.sides * this.sideLength
    }
}

// var triangle = new Shape('triangle', 3, 3)
// triangle.calcPerimeter()

//OOJS 3 
class Square extends Shape {
    constructor(name, sideLength) {
        super(name, 4, sideLength)
    }
    calcArea() {
        return this.sideLength * this.sideLength
    }

}

var square = new Square('square',4)
console.log(square.calcArea())
square.calcPerimeter()
