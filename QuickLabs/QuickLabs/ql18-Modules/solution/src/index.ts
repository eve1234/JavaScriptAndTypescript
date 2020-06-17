import SingleDeckerBus from './SingleDeckerBus';
import Train from './Train';

let myBus = new SingleDeckerBus(`Volvo`, `B9R`, 6);
console.log(`At the start of the journey, the bus had ${myBus.passengersOnBoard} on board.`);
myBus.makeStop(8, 0);
console.log(`At the first stop, 8 people got on and 0 people got off - there was now ${myBus.passengersOnBoard} on board`);
myBus.makeStop(22, 4);
console.log(`At the second stop, 22 people got on and 4 people got off - there was now ${myBus.passengersOnBoard} on board`);

let myTrain = new Train(`Bombardier`, `LRC`);
console.log(`At the start of the journey, the train had ${myTrain.passengersOnBoard} on board.`);
myTrain.makeStop(210, 0);
console.log(`At the first stop, 210 people got on and 0 people got off - there was now ${myTrain.passengersOnBoard} on board`);
myTrain.makeStop(183, 45);
console.log(`At the second stop, 183 people got on and 45 people got off - there was now ${myTrain.passengersOnBoard} on board`);
