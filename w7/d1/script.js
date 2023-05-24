console.log("Hello World");

// #3 Run addItem function that got triggered from onclick in #2
const addItem = () => {
	// #5 Using DOM (document) get the HTML tag with the ID of inputtedText
	//then store that HTML element in a new variable called inputBox
	const inputBox = document.getElementById("inputtedText");
	//#6 Log out the value (ie the text typed into the box) from the variable in #5
	console.log(inputBox.value);
	console.log("Item added");

	//#7 Reuse document getElementById and get the listItems div
	const listDiv = document.getElementById("listItems");

	const currentListItems = listDiv.innerHTML;

	// #9 Now that we have access to the div, take the value from #5 and put
	//it inside the HTML tag from #7
	listDiv.innerHTML = currentListItems + "<li>" + inputBox.value + "</li>";
	// #10 Clear out the value (ie what's typed) to the inputBox
	inputBox.value = "";
};

const keyPressed = (event) => {
	if (event.key === "Enter") {
		addItem();
	}
};

console.log("End of JS file");
