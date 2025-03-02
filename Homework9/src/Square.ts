import { IShape } from "../src/IShape.ts";

export class Square implements IShape {
    private readonly side: number;

    public constructor(side: number) {
        this.side = side;
    }

    public calcArea(): number {
        return this.side * this.side;
    }

    public calcPerimeter(): number {
        return 4 * this.side;
    }
}