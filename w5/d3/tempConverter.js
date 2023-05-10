const cToF = (celsiusTemp) => {
	const result1 = celsiusTemp * (9 / 5);
	const finalResult = result1 + 32;
	console.log(finalResult);
};

const temps = [20, 100, 0];

for (const temp of temps) {
	cToF(temp);
}
