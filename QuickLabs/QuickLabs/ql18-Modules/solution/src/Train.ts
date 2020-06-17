import Vehicle from './Vehicle';
import HasPassengers from './HasPassengers';

export default class Train extends Vehicle implements HasPassengers {

    constructor(_make: string, _model: string, readonly passengerSeats = 622, private _passengersOnBoard = 0) {
        super(_make, _model);
    }

    get passengersOnBoard() {
        return this._passengersOnBoard;
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

    public makeStop(numberOn: number, numberOff: number): void {
        if ((this._passengersOnBoard + (numberOn - numberOff)) >= 0) {
            if ((this._passengersOnBoard + (numberOn - numberOff)) <= this.passengerSeats) {
                this._passengersOnBoard += (numberOn - numberOff)
            }
            else {
                this._passengersOnBoard = this.passengerSeats;
            }
        }
        else {
            this._passengersOnBoard = 0;
        }
    }
}