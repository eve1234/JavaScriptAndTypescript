

let reactRangersResults =
fetch(`http://localhost:3000/results`).then(
    results => results.json()
).then(
    results => console.log(results)
).catch(
    error => console.log(`There was an error: ${error}`)
);

function sendData(){
    const restultToSend={
        "home": "React Rangers",
        "away": "Vue United",
        "homeScore": 4,
        "awayScore": 1
    }
}

