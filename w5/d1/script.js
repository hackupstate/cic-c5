// Single line comment
/* Multi
line
comment */

//Console.log outputs the information between the parenthesis
console.log(1 + 9);
console.log(3 / 2);

//DATA TYPES
console.log("Hello World!"); //STRING
console.log("Hello World");
console.log(true); //BOOLEAN
console.log(false); //BOOLEAN

const firstVar = "Hello";
console.log(firstVar);

let secondVar = "Test";
// console.log(secondVar);
secondVar = "World";
console.log(secondVar);

console.log(firstVar + " " + secondVar);

const myNum = 8;
const myStr = "4";
console.log(myNum + myStr);

let myArr = [7, 5, 3];
console.log(myArr[1] + myArr[2]);

const numPets = {
	dogs: 7,
	cats: 2,
	elephants: false,
	snakes: "none",
	dogsNames: ["Stella", "Ariel", 6],
};

const cars = {
	toyota: {
		founded: 1919,
		models: ["Camry", "Rav4"],
		usa: false,
	},
	ford: ["F150", "Explorer", "Model T"],
};

console.log("Dogs: " + numPets.dogs);
console.log(numPets.snakes);
console.log(numPets.dogsNames[2]);
console.log(cars.toyota.models[1]);
