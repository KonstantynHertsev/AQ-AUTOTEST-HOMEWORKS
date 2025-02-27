import { Quadrilateral } from "../src/Quadrilateral";

export class Rectangle extends Quadrilateral {
    public constructor(width: number, height: number) {
        super(width, height);
    }

    public calcArea(): number {
        return this.width * this.height;
    }
}