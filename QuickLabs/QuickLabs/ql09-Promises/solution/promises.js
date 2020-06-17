function runPromise() {
    const aPromise = new Promise((resolve, reject) => {
        let delayedFunc = setTimeout(() => {
            let randomNumber = Math.random();
            (randomNumber < 0.5) ? resolve(randomNumber) : reject(randomNumber);
        }, Math.random() * 5000);
    });

    aPromise.then(
        data => console.log(`Promise resolved with ${data}`)
    )
        .catch(
            error => console.log(`Promise rejected wth ${error}`)
        );
}

runPromise();

