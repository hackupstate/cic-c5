const resultsDiv = document.getElementById("results");

resultsDiv.innerHTML = "Loading";

const makeAPICall = async () => {
	const response = await fetch(`https://swapi.dev/api/people`);
	const data = await response.json();
	resultsDiv.innerHTML = data.results
		.map((char) => {
			return <li>{char.name}</li>;
		})
		.join("");
};
makeAPICall();
