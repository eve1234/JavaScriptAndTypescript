import RoadVehicle from './RoadVehicle';
import HasPassengers from './HasPassengers';

export default class SingleDeckerBus extends RoadVehicle implements HasPassengers {

    constructor(_make: string, _model: string, _wheels: number, readonly passengerSeats = 52, private _passengersOnBoard = 0) {
        super(_make, _model, _wheels);
    }

    get passengersOnBoard() {
        return this._passengersOnBoard;
    }

    public makeStop(numberOn: number, numberOff: number): void {
        if ((this._passengersOnBoard + (numberOn - numberOff)) >= 0) {
            this._passengersOnBoard += (numberOn - numberOff)
        }
        else {
            this._passengersOnBoard = 0;
        }
    }
}