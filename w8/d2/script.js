console.log("Let's watch some movies");

const movies = {
	"Legally Blonde": {
		price: 8,
		seats: [],
	},
	"Star Wars": {
		price: 9,
		seats: [],
	},
	"Paul Blart: Mall Cop": {
		price: 10,
		seats: [],
	},
	"Citizen Kane": {
		price: 11,
		seats: [],
	},
};

// get select from HTML using ID
const movieDropdown = document.getElementById("movieSelection");

let options = "<option></option>";

//loop over each one of the movies
for (const [movieTitle, movieData] of Object.entries(movies)) {
	// console.log(movieTitle, movieData);
	// options +=
	// "<option>" + movieTitle + " ($" + movieData.price + ")" + "</option>";
	options += `<option value="${movieTitle}">${movieTitle} - $${movieData.price}</option>`;
	//generate an option tag for each movie
}

//put the options into the innerHTML of select tag
movieDropdown.innerHTML = options;

//when a movie is selected, find out what movie is selected
movieDropdown.onchange = (event) => {
	const selectedMovie = event.target.value;
	console.log(selectedMovie);
	const movieData = movies[selectedMovie];

	console.log(movieData.price);
};

//make the seats show up when the movie is selected
