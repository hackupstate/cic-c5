console.log("Test");

// this only runs when a button is onclick from HTML
const buttonClicked = (event) => {
	//get the inner HTML (the number) from the event - ie which number was clicked on
	const numberClicked = event.target.innerHTML;

	//get the screen from the HTML so we can change the content of it
	const screen = document.getElementById("screen");

	//if the number in the screen is 0, then put the number clicked on top of it
	if (screen.innerHTML === "0") {
		screen.innerHTML = numberClicked;
	} else {
		// else the number in the screen is not zero, so add on
		//whatever number was clicked to the end of the exisiting numbers
		screen.innerHTML = screen.innerHTML + numberClicked;
	}

	console.log("Button Clicked");
};

//make another function that only runs if the equal button is pressed
const equalPressed = (event) => {
	console.log("equal pressed");
};

//get all the button tags/elements from the HTML
const allButtons = document.getElementsByTagName("button");

//loop/go through each one of the allButtons to get each individual button
for (const individualButton of allButtons) {
	//if the button we're on is has the = sign inside of it
	if (individualButton.innerHTML === "=") {
		// console.log("equalPressed attached to button: ", button.innerHTML);

		//attach the equalPressed function above to the onclick
		individualButton.onclick = equalPressed;
	} else {
		// console.log("buttonClicked attached to button", button.innerHTML);
		//if there's anything else inside the button that isn't just "=" then
		//attach the buttonClicked function to the onclick event
		individualButton.onclick = buttonClicked;
	}
}
