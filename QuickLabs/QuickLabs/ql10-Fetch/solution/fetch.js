const fetch = require(`node-fetch`);

let reactRangersResults = fetch(`http://localhost:3000/results`).then(
    results => results.json()
).then(
    results => console.log(results)
).catch(
    error => console.log(`There was an error: ${error}`)
);

function sendData() {
    const resultToSend = {
        "home": "React Rangers",
        "away": "Vue United",
        "homeScore": 4,
        "awayScore": 1
    }

    let addResult = fetch(`http://localhost:3000/results`, {
        "method": `POST`,
        "body": JSON.stringify(resultToSend),
        "mode": `cors`,
        "headers": {
            "Content-Type": "application/json"
        }
    })
        .then(postResult => postResult.json())
        .then(postResult => console.log(postResult))
        .catch(error => console.log(`There was an error: ${error}`));

}

sendData();