console.log("test");

const weatherData = {
	Manlius: { temperature: 48, precipitation: 55, wind: "10mph" },
	Syracuse: { temperature: 38, precipitation: 90, wind: "20mph" },
	"San Francisco": { temperature: 72, precipitation: 2, wind: "3mph" },
};

console.log(weatherData.Syracuse.wind);

document.getElementById("location").addEventListener("change", (event) => {
	console.log("location changed");
	const selectedLocation = event.target.value;
	console.log(selectedLocation);
	console.log(weatherData[selectedLocation]);

	document.getElementById("currentTemp").innerHTML =
		weatherData[selectedLocation].temperature;
});
