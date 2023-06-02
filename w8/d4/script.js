//#1 Shows our JS is linked to our HTML page
console.log("Let's watch some movies");

//#2 Set up an object where each movie title is a key and the value
//is an object to store both the price and the array of empty seats
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

//#3 Get the movie select from the HTML using an ID
const movieDropdown = document.getElementById("movieSelection");

//#4 Make a new string with an empty option, so when the page loads
//the dropdown is empty. We use this string to generate out the HTML
//options using a loop below.
let options = "<option></option>";

//#5 Loop over each one of the movies by using object entries to get
//access to the key value, pairs.
for (const [movieTitle, movieData] of Object.entries(movies)) {
	// console.log(movieTitle, movieData);
	// options +=
	// "<option>" + movieTitle + " ($" + movieData.price + ")" + "</option>";

	//#6 Generate out the option HTML element using the movie title
	//and movieData in a template literal. Also set the value to the
	//movie title, so when it is selected, we know just the movie title,
	//not the title with the price included.
	options += `<option value="${movieTitle}">${movieTitle} - $${movieData.price}</option>`;
}

//#7 Put the options we generated in #6 into the innerHTML of select tag
movieDropdown.innerHTML = options;

//#14 When a movie is selected
const generateSeats = (event) => {
	//#15 Figure out what was selected in the dropdown
	const selectedMovie = movieDropdown.value;

	if (!selectedMovie) {
		document.getElementById("seats").innerHTML = "";
		return;
	}

	let numSelectedSeats = 0;

	//#16 Using the info from #15 go back into the object from #2 and select only
	//the movie that was selected in the dropdown.
	const movieData = movies[selectedMovie];
	console.log(selectedMovie);
	//#17 Make an empty string for us to store the HTML we're about to make
	let seatsHTML = "";
	console.log(movieData.seats);
	//#18 Using #16 seats data, loop over each row of seats to give us the index and row
	for (let [rowIndex, row] of Object.entries(movieData.seats)) {
		//#19 Add on a div that will hold the row of seats
		seatsHTML += `<div>`;
		//#20 Loop over each individual seat in the row
		for (let [colIndex, col] of Object.entries(row)) {
			//#21 For each seat, add a span tag, and include the row and col
			//index so when they are clicked on, we know which one was clicked
			//on
			seatsHTML += `<span onclick="seatClicked(event)" 
			data-rowIndex="${rowIndex}"
			data-colIndex="${colIndex}" 
			class="material-symbols-outlined ${col.selected ? "selected" : ""} 
			${col.occupied ? "occupied" : ""}"> chair </span>`;

			if (col.selected) {
				numSelectedSeats++;
			}
		}
		//#22 Once we have looped over and add all the span tags for the seats,
		//add the closing div to #19 to finish out the row
		seatsHTML += `</div>`;
	}

	//#23 After we have looped through each seat in the whole theater,
	//take the HTML we genereated on #19-22 and put it into the HTML seats div
	document.getElementById("seats").innerHTML = seatsHTML;

	document.getElementById(
		"selectedStatus"
	).innerHTML = `You have selected <strong>${numSelectedSeats}</strong> seats for a total of <strong>$${
		numSelectedSeats * movieData.price
	}.</strong>`;
};

movieDropdown.onchange = (event) => {
	generateSeats(event);
};

//#24 When a seat is clicked on
const seatClicked = (event) => {
	//#25 Get the selected movie from the dropdown
	const movieSelected = movieDropdown.value;
	//#26 Get the row & col index that we put in the attributes in #21
	const rowIndex = event.target.getAttribute("data-rowIndex");
	const colIndex = event.target.getAttribute("data-colIndex");

	let seat = movies[movieSelected].seats[rowIndex][colIndex];

	if (seat.occupied) {
		alert("Get your own damn seat, this one is taken");
		return;
	} else {
		seat.selected = !seat.selected;
		console.log(movies[movieSelected].seats);
		generateSeats(event);
	}

	// movies["Legally Blonde"].seats[1][1].occupied = true;
	//#27 Set the seat to selected in the object from #2

	// if (seat.selected) {
	// 	seat.selected = false;
	// } else {
	// 	seat.selected = true;
	// }
};

// let innerLoopCounter = 0;
//#8 Loop over each one of the movies from the movies object at the
//start of the file. Use object.values to get the right part of the object.
for (const movieData of Object.values(movies)) {
	//#9 For each movie, loop 8 times to generate each row of seats
	for (let rowIterator = 0; rowIterator < 8; rowIterator++) {
		//#10 Start the row out empty
		let row = [];

		//#11 Run another 8 times for each row to generate out 8 seats
		for (let colIterator = 0; colIterator < 8; colIterator++) {
			// innerLoopCounter++;
			//#12 Add onto the end of the row from #10 a new seat that
			//tracks the occupied and selected information
			row.push({ occupied: Math.random() < 0.5, selected: false });
		}
		//#13 After we have generate the 8 seats for this row, add the
		//completed row onto our seats value from the movies object at
		//the top of the file
		movieData.seats.push(row);
	}
}
// console.log(innerLoopCounter);
// console.log(movies["Legally Blonde"].seats[1]);

//when a seat is clicked on, make it show as selected
const allSeats = document.getElementsByTagName("span");
for (const seat of allSeats) {
	seat.onclick = (event) => {
		const movieSelected = movieDropdown.value;
		console.log(event.target);
	};
}

const checkout = (event) => {
	const movieData = movies[movieDropdown.value];
	for (const row of movieData.seats) {
		for (const seat of row) {
			if (seat.selected) {
				seat.selected = false;
				seat.occupied = true;
			}
		}
	}
	generateSeats();
	alert(
		"This is where we'd ask for your credit, but as a prototype, we've marked your seats as occupied for you."
	);
};
