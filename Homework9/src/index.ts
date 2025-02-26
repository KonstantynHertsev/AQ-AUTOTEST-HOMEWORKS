import { IShape, Rectangle, Square } from './shapes';

function displayShapeInfo(shape: IShape): void {
    console.log(`Area: ${shape.calcArea()}`);
    console.log(`Perimeter: ${shape.calcPerimeter()}`);
}

const rectangle = new Rectangle(4, 6);
console.log('Rectangle:');
displayShapeInfo(rectangle);
const square = new Square(5);
console.log('Square:');
displayShapeInfo(square);
