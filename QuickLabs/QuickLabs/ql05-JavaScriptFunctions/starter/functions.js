const movies = [
    { title: "Jaws", director: "Steven Spielberg", year: "1975" },
    { title: "Star Wars", director: "George Lucas", year: "1977" },
    { title: "Avengers: Infinity War", director: "Anthony and Joe Russo", year: "2018" },
    { title: "Top Gun", director: "Tony Scott", year: "1986" },
    { title: "Justice League", director: "Zack Snyder", year: "2017" }
];

// Part 1
function findMovie(movieTitle){

    for (let movie of movies){
        if(movie.title==movieTitle){
            console.log(`Movie is  ${movie.title} Directed by ${movie.director} year of release ${movie.year
            }
            `);
        }
        console.log(movie);
    }
}

findMovie(`Star Wars`);
console.log(movie);
var movie=`Thor: Ragnorok`;

console.log(movie);   

findMovie(movie);





