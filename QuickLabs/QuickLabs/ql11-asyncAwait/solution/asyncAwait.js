const fetch = require(`node-fetch`);

let results;

const getReactRangersResults = async () => {
    try {
        const reactRangersResultsData = await fetch(`http://localhost:3000/results`);
        results = await reactRangersResultsData.json();
        console.log(results);
    }
    catch (error) {
        console.log(`There was an error: ${error}`)
    }
}

const sendReactRangersResult = async () => {
    const resultToSend = {
        home: `React Rangers`,
        away: `Vue United`,
        homeScore: 4,
        awayScore: 1
    }
    try {
        const addedResult = await fetch(`http://localhost:3000/results`, {
            "method": `POST`,
            "body": JSON.stringify(resultToSend),
            "mode": `cors`,
            "headers": {
                "Content-Type": "application/json"
            }
        });
        result = await addedResult.json();
        console.log(result);
    } catch (error) {
        console.log(`Threre was an error: ${error}`);
    }
}

getReactRangersResults();
sendReactRangersResult();


