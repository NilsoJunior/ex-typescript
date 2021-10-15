interface User {
    firstName: string;
    middleName?: string;
    lastName: string;
}

let user: User = {
    firstName: "Nilso",
    lastName: "Jr",
};

console.log(user.firstName);

function tooManyScoop(dessert: User) {
    if (dessert.middleName) {
        return dessert.middleName + " this middle name!";
    } else {
        return "Não possui!";
    }
}

console.log(
    tooManyScoop({
        firstName: "Nilso",
        middleName: "Conceicao",
        lastName: "Jr",
    })
);
