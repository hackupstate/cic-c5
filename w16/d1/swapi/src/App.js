import "./App.css";
import { useState, useEffect } from "react";

function App() {
	const [characters, setCharacters] = useState();
	const [filterResults, setFilterResults] = useState();
	const [filterText, setFilterText] = useState("");

	useEffect(() => {
		// const makeAPICall = async () => {
		// const response = await fetch(`https://swapi.dev/api/people`);
		// const data = await response.json();
		// setCharacters(data.results);
		// };
		// makeAPICall();
		// console.log("API Call running");
		fetch(`https://swapi.dev/api/people`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setCharacters(data.results);
			});
	}, []);

	useEffect(() => {
		if (!filterText) {
			return;
		}
		setFilterResults(
			characters.filter((char) => {
				console.log(char);
				return char.name
					.toLowerCase()
					.includes(filterText.toLowerCase());
			})
		);
		console.log(characters);
	}, [filterText]);

	const filter = (event) => {
		setFilterText(event.target.value);
	};

	if (!characters) {
		return <h1>Loading</h1>;
	}

	return (
		<div className="App">
			<h1>SWAPI</h1>
			<label htmlFor="filter">Filter by name:</label>
			<input id="filter" value={filterText} onChange={filter} />
			{/* <button
				onClick={() => {
					setFilterText("");
				}}
			>
				Clear
			</button> */}
			<ul>
				{(filterResults || characters).map((char) => {
					return <li key={char.name}>{char.name}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;
