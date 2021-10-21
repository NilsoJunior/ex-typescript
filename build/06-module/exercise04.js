"use strict";
class Car0 {
    constructor() {
        this.make = 'Generic Car';
        this.doors = 4;
    }
}
class ElectricCar0 extends Car0 {
    constructor() {
        super(...arguments);
        this.make0 = 'Electric Car';
        this.doors0 = 4;
    }
}
class Truck extends Car0 {
    constructor() {
        super(...arguments);
        this.make0 = 'Truck';
        this.doors0 = 2;
    }
}
function accelerate(car) {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`);
    return car;
}
let myElectricCar = new ElectricCar0;
accelerate(myElectricCar);
let myTruck = new Truck;
accelerate(myTruck);
