import { Rectangle } from "../src/Rectangle";
import { Square } from "../src/Square";
import { printShapeInfo } from "../src/shapeUtils";

const rectangle = new Rectangle(10, 5);
const square = new Square(7);

printShapeInfo(rectangle);
printShapeInfo(square);
