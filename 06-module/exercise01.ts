function identity01<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity01<number, string>(100, 'Hello!');
let returnString = identity01<string, string>('100', 'Hola!');
let returnBoolean = identity01<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK
// returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
// returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'


type ValidTypes = string | number;
function identity02<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: ValidTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result
}

let numberValue = identity02<number, string>(100, 'Hello');
let stringValue = identity02<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100