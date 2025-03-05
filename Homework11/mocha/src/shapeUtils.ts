import { IShape } from "./IShape.js";

export function printShapeInfo(shape: IShape): void {
    console.log("Area:", shape.calcArea());
    console.log("Perimeter:", shape.calcPerimeter());
}