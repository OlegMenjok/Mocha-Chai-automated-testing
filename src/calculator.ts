class Calculator {
    add(a: number, b: number):number {
        return a + b;
    }
    substract(a: number, b: number):number {
        return a - b;
    }
    multiply(a: number, b: number):number {
        return a * b;
    }
    divide(a: number, b: number):number {
        if(b === 0){
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
}
export default Calculator;