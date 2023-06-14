let board = [
	["O", "", "X"],
	["O", "X", ""],
	["X", "O", ""],
];

console.log(board[2][2]);

const allButtons = [...document.getElementsByTagName("button")];
console.log(allButtons);

for (const button of allButtons) {
	// console.log(button);
	button.onclick = () => {
		if (button.innerHTML !== "&nbsp;") {
			alert("CHEATER!");
			return;
		}
		button.innerHTML = "X";
		const emptyButtons = allButtons.filter(
			(button) => button.innerHTML === "&nbsp;"
		);
		console.log(emptyButtons);
		let randomButton =
			emptyButtons[Math.floor(Math.random() * emptyButtons.length)];
		if (!randomButton) {
			alert("Board is filled");
		} else {
			document.getElementById("status").innerHTML =
				"Computer is thinking";
			setTimeout(() => {
				randomButton.innerHTML = "O";
				document.getElementById("status").innerHTML = "Your turn";
			}, 500);
		}

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
}
