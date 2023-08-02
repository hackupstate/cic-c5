import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "./img/desert.jpg";
import ClipLoader from "react-spinners/ClipLoader";

const Home = (props) => {
	console.log(props);
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

	useEffect(() => {
		console.log("Hello World");
	}, []);

	if (!characters) {
		return (
			<>
				<h1>Loading</h1>
				<ClipLoader color="lime" />
			</>
		);
	}

	return (
		<div>
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
				{(filterResults || characters).map((char, id) => {
					return (
						<li key={char.name}>
							<Link to={`/character/${id + 1}`}>{char.name}</Link>
						</li>
					);
				})}
			</ul>
			<Link to="/character">
				<button className="btn btn-primary">
					Go to Character Page{" "}
					<span class="material-symbols-outlined">home</span>
				</button>
			</Link>
			<img src="/img/desert.jpg" style={{ width: "50vw" }} />
			<img src={img} style={{ width: "50vw" }} />
		</div>
	);
};

export default Home;
