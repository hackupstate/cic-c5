import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [color, setColor] = useState();
	const [edible, setEdible] = useState();

	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setResults([]);
		setLoading(true);
		const makeAPICall = async (event) => {
			let url = `https://proxy.maxmatthe.ws/https://trefle.io/api/v1/plants?token=APIKEYGOESHERE`;
			if (color) {
				url += `&filter[flower_color]=${color}`;
			}
			if (edible) {
				url += `&filter[edible]=${edible}`;
			}

			console.log(url);

			const response = await fetch(url);
			const data = await response.json();
			setResults(data.data);
			setLoading(false);
		};
		makeAPICall();
	}, [edible, color]);

	return (
		<div className="App">
			<label>Edible:</label>
			<select
				value={edible}
				onChange={(event) => {
					setEdible(event.target.value);
				}}
			>
				<option></option>
				<option value="true">Yes</option>
				<option value="false">No</option>
			</select>
			<br />
			Flower Color:
			<select
				value={color}
				onChange={(event) => {
					setColor(event.target.value);
				}}
			>
				<option></option>
				<option>red</option>
				<option>yellow</option>
			</select>
			<ul>
				{loading ? (
					<h1>Loading...</h1>
				) : (
					results.map((plant) => {
						return (
							<li key={plant.id}>
								<img
									src={plant.image_url}
									style={{ maxHeight: 50 }}
								/>
								{plant.common_name}
							</li>
						);
					})
				)}
			</ul>
		</div>
	);
}

export default App;
