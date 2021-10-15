"use strict";
/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so
   you can pass in the season by referencing an item in the enum, for example
   Season.Fall, instead of the literal string "Fall". */
var Season;
(function (Season) {
    Season["Fall"] = "Fall";
    Season["Winter"] = "Winter";
    Season["Spring"] = "Spring";
    Season["Summer"] = "Summer";
})(Season || (Season = {}));
function whichMonths(season) {
    let monthsInSeason = "";
    switch (season) {
        case "Fall":
            monthsInSeason = "September to November";
            break;
        case "Winter":
            monthsInSeason = "December to February";
            break;
        case "Spring":
            monthsInSeason = "March to May";
            break;
        case "Summer":
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}
console.log(whichMonths(Season.Fall));
