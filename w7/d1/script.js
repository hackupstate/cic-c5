console.log("Hello World");

const addItem = (event) => {
	const inputBox = document.getElementById("inputtedText");
	console.log(inputBox.value);
	console.log("Item added");

	const listDiv = document.getElementById("listItems");
	listDiv.innerHTML = inputBox.value;
	inputBox.value = "";
};
