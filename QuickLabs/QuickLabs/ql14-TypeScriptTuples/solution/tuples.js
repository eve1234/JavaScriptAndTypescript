var person;
person = [true, "Name", 21];
console.log(person);
person = ["Name", 21, true];
person.push(function () { return console.log("Hello World"); });
console.log(person);
person[3]();
