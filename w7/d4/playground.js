const groceries = [
	"milk",
	"ice cream",
	"eggs",
	"ice cream",
	"bread",
	"milk",
	"apple",
	"ice cream",
	"greeting card",
	"shirt",
];

let dairyItemsCount = 0;
let anythingElseCount = 0;

for (const item of groceries) {
	if (item === "milk" || item === "ice cream" || item === "butter") {
		dairyItemsCount++;
	} else {
		anythingElseCount = anythingElseCount + 1;
	}
}

console.log("The number of dairy items is: ", dairyItemsCount);
console.log("The number of any others items is: ", anythingElseCount);
// console.log("Non edible items", nonedible);
console.log(
	"The total number of items is:",
	dairyItemsCount + nondairyItems + nonedible
);
