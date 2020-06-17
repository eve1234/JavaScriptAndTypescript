let something: unknown = `1234`;

console.log(something == 1234);
console.log(something === 1234);
console.log(something >= 1000);
console.log(something.length);
console.log(something as number === 1234);
console.log(something as number >= 1000);
console.log((something as string).length);