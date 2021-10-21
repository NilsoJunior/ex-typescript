"use strict";
let returnNumber0 = {
    value: 25,
    message: 'Hello!'
};
let returnString0 = {
    value: 'Hello!',
    message: 25
};
function processIdentity(value, message) {
    console.log(message);
    return value;
}
// let processor0: ProcessIdentity<number, string> = processIdentity;
// let returnNumber1 = processor0(100, 'Hello!');   // OK
// let returnString1 = processor('Hello!', 100);   // Type check error
