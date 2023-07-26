console.log("Hello fellow developer. Why you in my console?");

const theyDoneClickedTheButton = (event) => {
	alert("You clicked it!");
};

const addNumbers = () => {
	const num1Str = document.getElementById("num1").value;
	const num2Str = document.getElementById("num2").value;

	document.getElementById("result").innerHTML =
		parseInt(num1Str) + parseInt(num2Str);
};
