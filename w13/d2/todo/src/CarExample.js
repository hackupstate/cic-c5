import "./App.css";

function App() {
	const cars = [
		{ make: "Toyota", model: "Rav4" },
		{ make: "Tesla", model: "Y" },
		{ make: "Honda", model: "CRV" },
		{ make: "Ford", model: "F150" },
	];

	const addTwoNums = (num1, num2) => {
		return num1 + num2;
	};

	return (
		<div className="App">
			<h1>Welcome to React!</h1>
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
