import { expect } from 'chai';
import { Rectangle } from '../src/Rectangle';
import { Square } from '../src/Square';
import { printShapeInfo } from '../src/shapeUtils';
import sinon from "sinon";


describe('printShapeInfo Function', () => {
    it('should print correct info for Rectangle', () => {
        const rectangle = new Rectangle(10, 5);
        const consoleSpy = sinon.spy(console, 'log');

        printShapeInfo(rectangle);

        expect(consoleSpy.calledWith('Area:', 50)).to.be.true;
        expect(consoleSpy.calledWith('Perimeter:', 30)).to.be.true;

        consoleSpy.restore();
    });

    it('should print correct info for Square', () => {
        const square = new Square(7);
        const consoleSpy = sinon.spy(console, 'log');

        printShapeInfo(square);

        expect(consoleSpy.calledWith('Area:', 49)).to.be.true;
        expect(consoleSpy.calledWith('Perimeter:', 28)).to.be.true;

        consoleSpy.restore();
    });
});