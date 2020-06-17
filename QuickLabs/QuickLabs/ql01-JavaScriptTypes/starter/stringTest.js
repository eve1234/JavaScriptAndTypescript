let stringTest = `I am the very model of a modern major general`;
stringTest = stringTest.toUpperCase();
let indexOfM = stringTest.indexOf(`M`);
console.log(indexOfM);

let start = stringTest.indexOf("MODEL");
let end = stringTest.lastIndexOf("MAJOR");

let subStr = stringTest.substring(start, end);
console.log(start);
console.log(end);
console.log(subStr);