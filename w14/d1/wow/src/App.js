import "./App.css";
import { useState, useEffect } from "react";

function App() {
	const [searchText, setSearchText] = useState("");
	const [video, setVideo] = useState();

	useEffect(() => {
		const makeAPICall = async () => {
			const response = await fetch(
				"https://owen-wilson-wow-api.onrender.com/wows/random"
			);
			const data = await response.json();

			console.log(data[0]);
			setVideo(data[0]);
		};
		makeAPICall();
	}, []);

	const textInputted = (event) => {
		setSearchText(event.target.value);
	};

	const searchForMovie = async (event) => {
		event.preventDefault();
		setVideo(null);
		const makeAPICall = async () => {
			const response = await fetch(
				`https://owen-wilson-wow-api.onrender.com/wows/random?movie=${searchText}`
			);
			const data = await response.json();

			console.log(data[0]);
			setVideo(data[0]);
		};
		makeAPICall();
	};

	if (!video) {
		return <div>Loading.</div>;
	}

	return (
		<div className="App">
			<form onSubmit={searchForMovie}>
				<input type="text" onChange={textInputted} value={searchText} />
				<button type="submit">Search</button>
			</form>
			<h1>{searchText}</h1>

			<video controls style={{ maxWidth: "100%" }}>
				<source src={video.video["1080p"]} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<h1>
				{video.movie} - {video.year}
			</h1>
			<img src={video.poster} />
		</div>
	);
}

export default App;
