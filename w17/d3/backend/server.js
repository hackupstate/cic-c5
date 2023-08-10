// #1 import three packages from npm
const express = require("express");
const pg = require("pg");
const cors = require("cors");

//#2 set up express to use JSON & allow CORS
const server = express();
server.use(express.json());
server.use(cors());

//#3 Connect client to Postgres DB
const db = new pg.Client({
	database: "playground",
});

db.connect();

//#4 Make an endpoint (	Request comes in from frontend #10)
server.get("/pokemon", async (req, res) => {
	//#5 Runs DB query
	const data = await db.query("SELECT * FROM pokemon");
	// console.log(dbResult);

	//#6 Sends the results back to the frontend
	res.send({ pokemon: data.rows });
});

//#7 Listen for incoming requests to port 3001
server.listen(3001, () => {
	console.log("Server is running on port 3001");
});

// server.get("/", (req, res) => {
// 	res.send({ hello: "world! Max is here." });
// });

// let animals = [];

// server.post("/animals", (req, res) => {
// 	animals.push(req.query.animal);
// 	res.send({ animals: animals });
// });

// //path params
// server.post("/animals/:name", (req, res) => {
// 	animals.push(req.params.name);
// 	res.send({ animals });
// });

// server.post("/animal/new", (req, res) => {
// 	animals.push(req.body.newAnimal);
// 	res.send({ animals });
// });
