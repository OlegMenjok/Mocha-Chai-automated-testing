import Calculator from "../src/calculator";
import {expect} from "chai";

describe.skip('hooks', () => {
    let calculator: Calculator;
    before(() => {
        console.log("before")
        calculator = new Calculator();
    })
    beforeEach(() => {
        console.log("before each")
    })
    it('[Hooks] Should correctly add two numbers', () => {
        //arrange


        //act
        const result = calculator.add(1, -2);

        // assert
        expect(result).to.equal(-1);
    })
    it('[Hooks] Should correctly substruct two numbers', () => {
        //arrange


        //act
        const result = calculator.substract(1, -2);

        // assert
        expect(result).to.equal(3);
    })
    afterEach(() => {
        console.log("after each")
    })
    after(() => {
        console.log("after")
    })
})