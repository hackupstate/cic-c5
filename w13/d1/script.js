console.log("Wow");
// fetch("https://owen-wilson-wow-api.onrender.com/wows/random")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(typeof data);
// 	});

const makeAPICall = async () => {
	const response = await fetch(
		"https://owen-wilson-wow-api.onrender.com/wows/random"
	);
	const data = await response.json();

	const title = data[0].movie;
	const videoURL = data[0].video["1080p"];

	let htmlOutput = `<h2 class="title">${title}</h2>
	<video  controls style="max-width: 100%;">
		<source
			src="${videoURL}"
			type="video/mp4"
		/>
		Your browser does not support the video tag.
	</video>`;

	document.getElementById("apiResults").innerHTML = htmlOutput;

	console.log(videoURL);
};

makeAPICall();
