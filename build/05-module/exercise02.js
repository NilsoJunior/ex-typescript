"use strict";
class CarE2 {
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        if (doors % 2 === 0) {
            this._doors = doors;
        }
        else {
            throw new Error("Doors must be an even number");
        }
        CarE2.numberOfCars++; // Increments the value of the static property
    }
    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return "The color of the car is " + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if (doors % 2 === 0) {
            this._doors = doors;
        }
        else {
            throw new Error("Doors must be an even number");
        }
    }
    // Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    worker() {
        return this._make;
    }
    // public
    static getNumberOfCars() {
        return CarE2.numberOfCars;
    }
}
CarE2.numberOfCars = 0; // New static property
// Instantiate the Car object with all parameters
let myCarE1 = new CarE2("Cool Car Company", "blue", 2);
// Instantiates the Car object with all parameters
let myCarE2 = new CarE2("Galaxy Motors", "blue", 2);
// Returns 2
console.log(Car.getNumberOfCars());
console.log(myCarE1.accelerate(35));
console.log(myCarE1.brake());
console.log(myCarE1.turn("right"));
