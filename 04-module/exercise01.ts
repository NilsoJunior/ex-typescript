function addNumbersRequired(x: number, y: number): number {
    return x + y;
}

addNumbersRequired(1, 2); // Returns 3

// function addNumbers(x: number, y?: number): number {
//     return x + y;
// }

// addNumbers(1); // Returns 1

function addNumbersDefault(x: number, y = 25): number {
    return x + y;
}

addNumbersDefault(1, 2); // Returns 3
addNumbersDefault(1); // Returns 26

let addAllNumbers = (
    firstNumber: number,
    ...restOfNumbers: number[]
): number => {
    let total: number = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};

addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2

interface Message {
    text: string;
    sender: string;
}

function displayMessage({ text, sender }: Message) {
    console.log(`Message from ${sender}: ${text}`);
}

displayMessage({ sender: "Christopher", text: "hello, world" });
