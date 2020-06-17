let person: [string, number, boolean];

person = [true, `Name`, 21];

console.log(person);

person = [`Name`, 21, true];

person.push(() => console.log(`Hello World`));

console.log(person);
person[3]();