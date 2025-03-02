import { IShape } from "../src/IShape.ts";

export function printShapeInfo(shape: IShape): void {
    console.log("Area:", shape.calcArea());
    console.log("Perimeter:", shape.calcPerimeter());
}