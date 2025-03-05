import { expect } from "chai";
import sinon from "sinon";
import { Rectangle } from "../src/Rectangle";
import { Square } from "../src/Square";
import { printShapeInfo } from "../src/shapeUtils";
import { IShape } from "../src/IShape";

describe("Rectangle", () => {
    it("should calculate area correctly", () => {
        const rect = new Rectangle(10, 5);
        expect(rect.calcArea()).to.equal(50);
    });

    it("should calculate perimeter correctly", () => {
        const rect = new Rectangle(10, 5);
        expect(rect.calcPerimeter()).to.equal(30);
    });
});

describe("Square", () => {
    it("should calculate area correctly", () => {
        const square = new Square(7);
        expect(square.calcArea()).to.equal(49);
    });

    it("should calculate perimeter correctly", () => {
        const square = new Square(7);
        expect(square.calcPerimeter()).to.equal(28);
    });
});

describe("printShapeInfo", () => {
    let consoleSpy: sinon.SinonSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, "log");
    });

    afterEach(() => {
        consoleSpy.restore();
    });

    it("should print correct info for Rectangle", () => {
        const rect = new Rectangle(10, 5);
        printShapeInfo(rect);

        expect(consoleSpy.calledWith("Area:", 50)).to.be.true;
        expect(consoleSpy.calledWith("Perimeter:", 30)).to.be.true;
    });

    it("should print correct info for Square", () => {
        const square = new Square(7);
        printShapeInfo(square);

        expect(consoleSpy.calledWith("Area:", 49)).to.be.true;
        expect(consoleSpy.calledWith("Perimeter:", 28)).to.be.true;
    });

    it("should work with mocked object", () => {
        const mockShape: IShape = {
            calcArea: sinon.stub().returns(100),
            calcPerimeter: sinon.stub().returns(40)
        };

        printShapeInfo(mockShape);

        expect(consoleSpy.calledWith("Area:", 100)).to.be.true;
        expect(consoleSpy.calledWith("Perimeter:", 40)).to.be.true;
    });
});
