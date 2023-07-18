import { useState } from "react";
import "./App.css";

function App() {
	const [inputValue, setInputValue] = useState("");
	const cars = [
		{ make: "Toyota", model: "Rav4" },
		{ make: "Tesla", model: "Y" },
		{ make: "Honda", model: "CRV" },
		{ make: "Ford", model: "F150" },
	];

	const addTwoNums = (num1, num2) => {
		return num1 + num2;
	};

	const formSubmitted = (event) => {
		// const inputText = event.target.elements.inputName.value;
		console.log(inputValue);
	};

	return (
		<div className="App">
			<h1>Welcome to React!</h1>
			<form onSubmit={formSubmitted}>
				<input
					type="text"
					name="inputName"
					value={inputValue}
					onChange={(evt) => {
						setInputValue(event.target.value);
					}}
				/>
			</form>
			<ul>
				{cars.map((car) => {
					console.log(car);
					return <CarShower make={car.make} model={car.model} />;
				})}
			</ul>

			<p className="firstSum">Sum of 1+9 is {1 + 9}</p>
			<p>9 + 5 added together is {addTwoNums(9, 5)}</p>
		</div>
	);
}

const CarShower = (props) => {
	return (
		<div>
			<span style={{ fontWeight: "bold" }}>Make: </span>
			{props.make}
			<br />
			<span style={{ fontWeight: "bold" }}>Model: </span>
			{props.model}
		</div>
	);
};

export default App;
