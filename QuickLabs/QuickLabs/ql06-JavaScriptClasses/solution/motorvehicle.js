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

const myVehicle = new MotorVehicle(`myMake`, `myModel`, 4, 2000);

console.log(myVehicle);
console.log(myVehicle.speed);

myVehicle.accelerate(10);
console.log(myVehicle.speed);

myVehicle.brake(5);
console.log(myVehicle.speed);

myVehicle.brake(5);
console.log(myVehicle.speed);
