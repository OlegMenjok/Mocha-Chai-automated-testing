import Calculator from "../src/calculator";
import {expect} from "chai";


describe('calculator', () => {
    it('Should correctly add two numbers', () => {
        //arrange
        const calculator = new Calculator();

        //act
       const result = calculator.add(1, -2);

        // assert
        expect(result).to.equal(-1);
    })
    it('Should correctly substruct two numbers', () => {
        //arrange
        const calculator = new Calculator();

        //act
        const result = calculator.substract(1, -2);

        // assert
        expect(result).to.equal(3);
    })
    it('Should correctly multiply two numbers', () => {
        //arrange
        const calculator = new Calculator();

        //act
        const result = calculator.multiply(3, 8);

        // assert
        expect(result).to.equal(24);
    })
    it('Should correctly divide two numbers', () => {
        //arrange
        const calculator = new Calculator();

        //act
        const result = calculator.divide(9, 3);

        // assert
        expect(result).to.equal(3);
    })
    it('Should be error when divide by zero', () => {
        //arrange
        const calculator = new Calculator();
        // act
        //const result = calculator.divide(9, 0);

        // act
        expect(() => calculator.divide(9,0)).to.throw('Cannot divide by zero');
    })
})
