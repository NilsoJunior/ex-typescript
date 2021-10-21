"use strict";
function identity01(value, message) {
    console.log(message);
    return value;
}
let returnNumber = identity01(100, 'Hello!');
let returnString = identity01('100', 'Hola!');
let returnBoolean = identity01(true, 'Bonjour!');
returnNumber = returnNumber * 100; // OK
function identity02(value, message) {
    let result = '';
    let typeValue = typeof value;
    if (typeof value === 'number') { // Is it a number?
        result = value + value; // OK
    }
    else if (typeof value === 'string') { // Is it a string?
        result = value + value; // OK
    }
    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
    return result;
}
let numberValue = identity02(100, 'Hello');
let stringValue = identity02('100', 'Hello');
console.log(numberValue); // Returns 200
console.log(stringValue); // Returns 100100
