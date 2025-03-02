import { IShape } from "../src/IShape.ts";

export abstract class Quadrilateral implements IShape {
    protected readonly width: number;
    protected readonly height: number;

    public constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public calcPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    public abstract calcArea(): number;
}