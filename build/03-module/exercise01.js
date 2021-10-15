"use strict";
let user = {
    firstName: "Nilso",
    lastName: "Jr",
};
console.log(user.firstName);
function tooManyScoop(dessert) {
    if (dessert.middleName) {
        return dessert.middleName + " this middle name!";
    }
    else {
        return "Não possui!";
    }
}
console.log(tooManyScoop({
    firstName: "Nilso",
    middleName: "Conceicao",
    lastName: "Jr",
}));
