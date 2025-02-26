export abstract class Triangle {
    public a: number;
    public b: number;
    public c: number;

    public constructor(a: number, b: number, c: number) {
        if (!Triangle.isValidTriangle(a, b, c)) {
            throw new Error("Invalid triangle sides");
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    public calcPerimeter(): number {
        return this.a + this.b + this.c;
    }

    public abstract calcArea(): number;

    private static isValidTriangle(a: number, b: number, c: number): boolean {
        return a + b > c && a + c > b && b + c > a;
    }
}

export class EquilateralTriangle extends Triangle {
    public constructor(a: number) {
        super(a, a, a);
    }

    public calcArea(): number {
        return (Math.sqrt(3) / 4) * this.a * this.a;
    }
};