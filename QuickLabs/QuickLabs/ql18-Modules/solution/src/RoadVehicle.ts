import Vehicle from './Vehicle';

export default class RoadVehicle extends Vehicle {

    constructor(_make: string, _model: string, private _wheels: number = 4) {
        super(_make, _model);
    }

    get wheels() {
        return this._wheels;
    }

    get speed() {
        return this._speed;
    }

    set speed(delta: number) {
        if (this._speed + delta > 0) {
            this._speed = this._speed + delta;
        }
        else {
            this._speed = 0;
        }
    }
}