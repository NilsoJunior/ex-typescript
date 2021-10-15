"use strict";
// Tipo
// type calculator = (x: number, y: number) => number;
let addNumber = (x, y) => x + y;
let subtractNumbers = (x, y) => x - y;
let doCalculation = (operation) => {
    if (operation === "add") {
        return addNumber;
    }
    else {
        return subtractNumbers;
    }
};
// Inferência de tipo de função
// let addNumbers: Calculator = (x: number, y: number): number => x + y;
// let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
// let addNumbers: Calculator = (num1, num2) => num1 + num2;
console.log(doCalculation("add")(1, 2));
