// Tipo
// type calculator = (x: number, y: number) => number;

// let addNumber: calculator = (x: number, y: number): number => x + y;
// let subtractNumbers: calculator = (x: number, y: number): number => x - y;

// let doCalculation = (operation: "add" | "subtract"): calculator => {
//     if (operation === "add") {
//         return addNumber;
//     } else {
//         return subtractNumbers;
//     }
// };

// Interface
interface Calculator {
    (x: number, y: number): number;
}

let addNumber: Calculator = (x: number, y: number): number => x + y;
let subtractNumbers: Calculator = (x: number, y: number): number => x - y;

let doCalculation = (operation: "add" | "subtract"): Calculator => {
    if (operation === "add") {
        return addNumber;
    } else {
        return subtractNumbers;
    }
};

// Inferência de tipo de função

// let addNumbers: Calculator = (x: number, y: number): number => x + y;
// let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
// let addNumbers: Calculator = (num1, num2) => num1 + num2;

console.log(doCalculation("add")(1, 2));
