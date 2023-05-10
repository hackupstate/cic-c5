// console.log("Hello World");

const firstName = "Max";
const lastName = "Matthews";
console.log(firstName.length);
console.log("Name Length is: ", firstName.length + lastName.length);

const person = { firstName: "Max", lastName: "Matthews", age: "redacted" };
// console.log(person.firstName + " " + person.lastName);
// console.log(person["firstName"] + " " + person.lastName);

const infoAboutThePerson = "firstName";
console.log(person[infoAboutThePerson]);

const num1 = 15;
const sarcasm = false;

if (num1 > 10 && sarcasm === true) {
	console.log("Woah! Big Number!");
} else if (person.firstName === "Max") {
	if (person.lastName === "Mathews") {
		console.log("Don't know him");
	} else {
		console.log("Smart ass");
	}
} else if (num1 > 10 && sarcasam === false) {
	console.log("That's quite a big number");
} else if (num1 === 9) {
	console.log("Big-ish number");
} else {
	console.log("It's not a big number");
}

let names = ["Max", "Ariel", "Stella"];
console.log(names[1]);
names.push("Karin");
console.log(names);
names.shift();
console.log(names);

for (let i = 0; i < names.length; i++) {
	console.log("Index #", i, "Name: ", names[i]);
}

for (let name of names) {
	console.log("A name is: ", name);
}

let items = ["cat", "toyota", "ta"];

for (let thingy of items) {
	console.log(thingy);
}

let nums = [5, 10, 20, 40];

// for (let aNum of nums) {
// console.log(aNum / 2);
// }

// for (let i = nums.length; i >= 0; i--) {
// 	console.log(nums[i]);
// }
