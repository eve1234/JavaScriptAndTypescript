// Up to part 11
// let stringTest = `I am the very model of a modern major general`;
// let indexOfM = stringTest.indexOf(`m`);
// console.log(indexOfM);

// Up to part 12
// let stringTest = `I am the very model of a modern major general`;
// let indexOfM = stringTest.indexOf(`M`);
// console.log(indexOfM);

// Up to part 14
let stringTest = `I am the very model of a modern major general`;
stringTest = stringTest.toUpperCase();
let indexOfM = stringTest.indexOf(`M`);
console.log(indexOfM);

// Up to part 17
let start = stringTest.indexOf(`MODEL`);
let end = stringTest.indexOf(`MAJOR`);
let subStr = stringTest.substring(start, end);
console.log(subStr);
