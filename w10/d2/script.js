//#1 Generate out a multi dimensinal array to store our empty board
let board = [
	["", "", ""],
	["", "", ""],
	["", "", ""],
];

//#2 Make a function so we can re use it later to generate the HTML based off the board array from #1
const generateBoard = () => {
	//#3 Make an empty string to store the HTML in as we go
	let generatedHTML = "";

	//#4 Loop over each row in our board and use entries to get the index (number) of the row
	for (const [rowIndex, row] of Object.entries(board)) {
		//#5 FOR each row, add in a div tag so they don't all show up next to each other
		generatedHTML += "<div>";
		//#6 Loop over each col in the array so we get access to whether there is an X, O, or empty column
		for (const [colIndex, col] of Object.entries(row)) {
			//#7A Make a button that stores the index of it's position into the attributes of the button
			//#7B Also include the value of the column (X or O) inside the tag OR put an empty space (&nbsp;)
			generatedHTML += `<button 
				onclick="buttonClicked(event)" 
				data-rowIndex="${rowIndex}" 
				data-colIndex="${colIndex}"
			>${col || "&nbsp;"}</button>`;
		} //end of our col loop
		// #8 Add in closing div tag for each row
		generatedHTML += "</div>";
	} //end of row loop
	//#9 Take all the HTML we generated (all the divs and buttons) and make show up
	document.getElementById("board").innerHTML = generatedHTML;
};
//#10 Generate the board the first time the page loads
generateBoard();

// #11 Only happens once a button is pressed
const buttonClicked = (event) => {
	//#12 If the button clicked is not empty, call them a cheater
	if (event.target.innerHTML !== "&nbsp;") {
		alert("CHEATER!");
		return; //stop the function and don't run anything underneath it
	}

	//#13 Go back to index from #7A so we know what button they are clicking on
	const rowIndex = event.target.getAttribute("data-rowindex");
	const colIndex = event.target.getAttribute("data-colindex");

	//#14 Use coordinates from #13 to put an X in our JS board array
	board[rowIndex][colIndex] = "X";
	//#15 Set status in HTML
	document.getElementById("status").innerHTML = "Computer is scheming";
	//#16 Update HTML to reflect the X that got placed in #14
	generateBoard();
	checkForPlayerWin();

	//#17 Make empty list to store our coordinates
	let emptyCoordinates = [];
	//#18 Loop over all the rows & cols again
	for (const [rowIndex, row] of Object.entries(board)) {
		for (const [colIndex, col] of Object.entries(row)) {
			//#19 Check to see if this col is empty
			if (col === "") {
				//#20 If it is, push this row and col into our array from #17
				emptyCoordinates.push([rowIndex, colIndex]);
			}
		}
	}
	// console.log(emptyCoordinates);
	// #20 Pick a random empty coordinate from #19
	const randomEmptyCoordinate =
		emptyCoordinates[Math.floor(Math.random() * emptyCoordinates.length)];

	// #21 Wait half a second so the computer looks like it's thinking
	setTimeout(() => {
		//#22 Use the random coordinate from #20 to place an "O" for the computers move
		board[randomEmptyCoordinate[0]][randomEmptyCoordinate[1]] = "O";
		// #23 Update status to tell user it's their turn
		document.getElementById("status").innerHTML = "Your turn";
		// #24 Update board because we updated data in #22
		generateBoard();
	}, 500);

	console.log(board);

	// button.innerHTML = "X";
	// const emptyButtons = allButtons.filter(
	// 	(button) => button.innerHTML === "&nbsp;"
	// );
	// console.log(emptyButtons);
	// let randomButton =
	// 	emptyButtons[Math.floor(Math.random() * emptyButtons.length)];
	// if (!randomButton) {
	// 	alert("Board is filled");
	// } else {
	// 	document.getElementById("status").innerHTML =
	// 		"Computer is thinking";
	// 	setTimeout(() => {
	// 		randomButton.innerHTML = "O";
	// 		document.getElementById("status").innerHTML = "Your turn";
	// 	}, 500);
	// }

	// console.log(board);
	//pick a random button and check to see if it's empty, if not loop 1000x
	// for (let buttonChecker = 0; buttonChecker < 1000; buttonChecker++) {
	// 	let randomButton =
	// 		allButtons[Math.floor(Math.random() * allButtons.length)];

	// 	if (randomButton.innerHTML === "&nbsp;") {
	// 		randomButton.innerHTML = "O";
	// 		break;
	// 	}
	// 	console.log(buttonChecker);
	// 	// console.log(randomButton);
	// }
};

const checkForPlayerWin = () => {
	//row win
	if (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") {
		alert("Player won");
	}
	if (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X") {
		alert("Player won");
	}
	if (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X") {
		alert("Player won");
	}

	//col win
	if (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") {
		alert("Player won");
	}
	if (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") {
		alert("Player won");
	}
	if (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") {
		alert("Player won");
	}

	if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
		alert("Player won");
	}
	if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
		alert("Player won");
	}

	//note we aren't checking for a computer win (yet)

	//this only checks for a horozontial win for the player
	// rowLoop: for (const [rowIndex, row] of Object.entries(board)) {
	// 	let lastValue;
	// 	for (const [colIndex, col] of Object.entries(row)) {
	// 		if (colIndex == 0) {
	// 			console.log(1);
	// 			lastValue = col;
	// 		} else {
	// 			if (lastValue != col) {
	// 				console.log(2);
	// 				continue rowLoop;
	// 			} else if (colIndex == 2 && lastValue !== "") {
	// 				console.log(3);
	// 				alert("Player won");
	// 			}
	// 		}
	// 	}
	// }
};
