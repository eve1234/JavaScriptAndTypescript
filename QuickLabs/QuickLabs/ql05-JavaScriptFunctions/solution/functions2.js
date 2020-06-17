const movies = [
    { title: "Jaws", director: "Steven Spielberg", year: "1975" },
    { title: "Star Wars", director: "George Lucas", year: "1977" },
    { title: "Avengers: Infinity War", director: "Anthony and Joe Russo", year: "2018" },
    { title: "Top Gun", director: "Tony Scott", year: "1986" },
    { title: "Justice League", director: "Zack Snyder", year: "2017" }
];

// Part 2
function returnMovie(movieTitle) {
    for (let movie of movies) {
        if (movie.title === movieTitle) {
            return movie;
        }
        console.log(movie);

    }
    // console.log(`Any text, any text at all`);
    return `Movie not found`;
}

const myMovie = returnMovie(`Avengers: Infinity War`);

console.log(myMovie);

console.log(
    `${myMovie.title} is a film directed by ${myMovie.director} released in ${
    myMovie.year
    }`
);

const myOtherMovie = returnMovie(`Thor: Ragnorok`);

function myMovieDetails(anyMovie) {
    if (typeof anyMovie === `object`) {
        return `${anyMovie.title} is a film directed by ${anyMovie.director} released in ${
            anyMovie.year
            }`
    }
    return anyMovie;
}

console.log(myMovieDetails(myOtherMovie));

console.log(returnMovie(`Jaws`));

console.log(myMovieDetails(returnMovie(`Jaws`)));
