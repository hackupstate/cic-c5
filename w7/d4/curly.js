const animal = "cat";

console.log("animal");

if (animal === "dog") {
	// console.log("It's a dog");
}

const animals = ["dog", "cat"];

for (const pet of animals) {
	// console.log(pet);
}

const add = (num1, num2) => {
	// console.log(num1 + num2);
};

add(1, 2);
add(3, 9);

const car = { make: "Toyota", model: "RAV4" };

console.log(car.make);
const thingyToGet = "model";
console.log(car["make"]);
console.log(car[thingyToGet]);
