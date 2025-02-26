export interface IShape {
    calcArea(): number;
    calcPerimeter(): number;
}

export abstract class Shape implements IShape {
    public abstract calcArea(): number;
    public abstract calcPerimeter(): number;
}

export abstract class Quadrilateral extends Shape {
    protected readonly width: number;
    protected readonly height: number;

    public constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    public calcPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

export class Rectangle extends Quadrilateral {
    public constructor(width: number, height: number) {
        super(width, height);
    }

    public calcArea(): number {
        return this.width * this.height;
    }
}

export class Square extends Rectangle {
    public constructor(side: number) {
        super(side, side);
    }
}

export function printShapeInfo(shape: IShape): void {
    console.log("Area:", shape.calcArea());
    console.log("Perimeter:", shape.calcPerimeter());
}