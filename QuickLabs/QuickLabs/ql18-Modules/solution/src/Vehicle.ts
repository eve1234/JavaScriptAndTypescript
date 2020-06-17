export default abstract class Vehicle {

    constructor(private _make: string, private _model: string, protected _speed: number = 0) { }

    get make() {
        return this._make;
    }

    get model() {
        return this._model;
    }

    abstract get speed();

    abstract set speed(delta: number);

}