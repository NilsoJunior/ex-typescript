class Car0 {
    make: string = 'Generic Car';
    doors: number = 4;
}
class ElectricCar0 extends Car0 {
    make0 = 'Electric Car';
    doors0 = 4
}
class Truck extends Car0 {
    make0 = 'Truck';
    doors0 = 2
}
function accelerate<T extends Car0> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCar0;
accelerate<ElectricCar0>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);