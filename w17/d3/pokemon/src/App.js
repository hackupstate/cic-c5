import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
	//#8 Set up state to store data
	const [pokemon, setPokemon] = useState([]);

	// #9 useEffect to make API call only when the component loads
	useEffect(() => {
		const makeAPICall = async () => {
			// #10 Fetch pokemon data from backend and get res from #6 in the backend
			const response = await fetch("http://localhost:3001/pokemon");
			// #11 Parse it and set it into state
			const data = await response.json();
			console.log(data);
			setPokemon(data.pokemon);
		};
		makeAPICall();
	}, []);

	return (
		<div className="App">
			{/* #12 Map over each item in the state from the API Call that's running a SQL statement */}
			{pokemon.map((item) => {
				// #13 Make each item's name show up in an li
				return <li key={item.name}>{item.name}</li>;
			})}
		</div>
	);
}

export default App;
