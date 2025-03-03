import { expect } from 'chai';
import { Rectangle } from '../src/Rectangle';

describe('Rectangle Class', () => {
    it('should calculate area correctly', () => {
        const rectangle = new Rectangle(10, 5);
        expect(rectangle.calcArea()).to.equal(50);
    });

    it('should calculate perimeter correctly', () => {
        const rectangle = new Rectangle(10, 5);
        expect(rectangle.calcPerimeter()).to.equal(30);
    });
});