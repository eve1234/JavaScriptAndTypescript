let darthVader = {
    allegiance: `Empire`,
    weapon: `lightsabre`,
    sith: true
}

console.log(darthVader.allegiance);
console.log(darthVader.weapon);
console.log(darthVader.sith);
console.log(darthVader.Jedi);

console.log(Object.keys(darthVader).length);

darthVader.children = 2;
darthVader.childNames = [`Luke`, `Leia`];

for (let darthVaderDetailKey in darthVader) {
    console.log(`Darth Vader's ${darthVaderDetailKey} is ${darthVader[darthVaderDetailKey]}`);
}

darthVader.allegiance = `The light side`;
delete darthVader.children;
console.log(darthVader.children);

let { allegiance, weapon, sith, childNames } = darthVader;

console.log(allegiance);
console.log(weapon);
console.log(sith);
console.log(childNames);
darthVader = {}
console.log(darthVader);
