const movies = [
    { title: "Jaws", director: "Steven Spielberg", year: "1975" },
    { title: "Star Wars", director: "George Lucas", year: "1977" },
    { title: "Avengers: Infinity War", director: "Anthony and Joe Russo", year: "2018" },
    { title: "Top Gun", director: "Tony Scott", year: "1986" },
    { title: "Justice League", director: "Zack Snyder", year: "2017" }
];

// Part 2


function returnMovie(movieTitle){
for (let movie of movies){
    if(movie.title===movieTitle){
        console.log(`Movie is  ${movie.title} Directed by ${movie.director} year of release ${movie.year}
        `);
        return movie;
    }
    else{
        console.log(`Movie ${movieTitle} not found`);
    }
    //console.log(movie);
    //console.log(`Any text, any test at all`);
}
}

let myMovie=returnMovie(`Avengers: Infinity War`);

console.log(`The result is : ${myMovie}`);

let myOtherMovie=returnMovie(`Thor: Ragnorok`);
console.log(myOtherMovie);

function myMovieDetails(anyMovie){
    if(typeof anyMovie ===`object`){

        return `${anyMovie.title} is a film directed by ${anyMovie.director} released in ${
            anyMovie.year}`

    }else{
        return anyMovie;
    }

}
console.log(myMovieDetails(`${myOtherMovie}`))
console.log(returnMovie(`Jaws`));