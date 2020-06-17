const hanSolo = new Map([[`vehicle`, `Millenium Falcon`], [`bff`, `Chewbacca`], [`sweetheart`, `Leia`]]);

console.log(hanSolo.size);
console.log(hanSolo.get(`vehicle`));
console.log(hanSolo.has(`sweetheart`));
console.log(hanSolo.has(`Jedi`));

hanSolo.set(`son`, `Ben`);

for (let [hanSoloDetailKey, hanSoloDetailValue] of hanSolo) {
    console.log(`Han Solo's ${hanSoloDetailKey} is ${hanSoloDetailValue}`);
}

hanSolo.set(`bff`, `Luke`);
hanSolo.delete(`son`);
console.log(hanSolo);

hanSolo.clear();
console.log(hanSolo);