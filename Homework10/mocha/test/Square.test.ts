import { expect } from 'chai';
import { Square } from '../src/Square';

describe('Square Class', () => {
    it('should calculate area correctly', () => {
        const square = new Square(7);
        expect(square.calcArea()).to.equal(49);
    });

    it('should calculate perimeter correctly', () => {
        const square = new Square(7);
        expect(square.calcPerimeter()).to.equal(28);
    });
});