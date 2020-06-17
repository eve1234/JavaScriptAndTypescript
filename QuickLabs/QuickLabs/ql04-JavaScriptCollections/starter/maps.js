const hanSolo = new Map([[
    `vehicle`, `Millenium Falcon`],
    [`bff`, `Chewbacca`],
    [`sweetheart`, `Leia`]
]);


console.log(hanSolo.size);
console.log(hanSolo.get(`vehicle`));

console.log(hanSolo.has('Jedi'));

hanSolo.set(`son`, `Ben`);

console.log(hanSolo.get(`son`));

for (let [key, value] of hanSolo){
    console.log(`key: ${key} value: ${value}`)

}

hanSolo.set(`bff`, `Luke`);
console.log(hanSolo);

hanSolo.delete(`son`)
console.log(hanSolo);
hanSolo.clear()
console.log(hanSolo);