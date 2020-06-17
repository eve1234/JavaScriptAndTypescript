class MotorVehicle {
    constructor(make, model, wheels, engineSize) {
        this._make = make;
        this._model = model;
        this._wheels = wheels;
        this._engineSize = engineSize;
        this._speed = 0;
    }

    get make() {
        return this._make;
    }

    get model() {
        return this._model;
    }

    get wheels() {
        return this._wheels;
    }

    get engineSize() {
        return this._engineSize;
    }

    get speed() {
        return this._speed;
    }

    accelerate(time) {
        this._speed = this._speed + ((0.25 * this._engineSize / this._wheels) * time);
    }

    brake(time) {
        this._speed = this._speed - ((0.3 * this._engineSize / this._wheels * time));

        this._speed = this._speed > 0 ? this._speed : 0;
    }
}

class Car extends MotorVehicle {
    constructor(make, model, engineSize, doors, satNav = false, wheels) {
        super(make, model, wheels = 4, engineSize);
        this._doors = doors;
        this._satNav = satNav;
    }

    get doors() {
        return this._doors;
    }

    get savNav() {
        return this._satNav;
    }

    set satNav(satNav) {
        this._satNav = satNav;
    }
}

const myCar = new Car(`Make`, `Model`, 2000, 4);

console.log(myCar);

class Motorbike extends MotorVehicle {
    constructor(make, model, engineSize, driveType, wheels) {
        super(make, model, wheels = 2, engineSize);
        this._driveType = driveType;
    }

    get driveType() {
        return this_driveType;
    }

    accelerate(time) {
        this._speed = this._speed + ((0.5 * this._engineSize / this._wheels) * time);
    }
}

const myBike = new Motorbike(`Kawasaki`, `Ninja`, 650, `chain`);

console.log(myBike);

myCar.accelerate(10);
myBike.accelerate(10);

console.log(myCar.speed);
console.log(myBike.speed);

