// let animals = ["dog", "cat", "snake"];
// const forrest = ["tree", "grass", "sun", "shade"];

// for (let loopRuns = 2; loopRuns < forrest.length; loopRuns++) {
// 	console.log(loopRuns, forrest[loopRuns]);
// }

const years = [2019, 2002, 1943, 1965, 1993, 2003];

for (const birthYear of years) {
	const age = 2023 - birthYear;
	if (age >= 21) {
		console.log(
			"Birth year",
			birthYear,
			"is allowed to drink because they are",
			age
		);
	} else {
		console.log(
			"Birth year",
			birthYear,
			"is NOT allowed to drink because they are",
			age
		);
	}
}
