// 1 Require/import packages we installed from npm in the terminal
const express = require("express");
const cors = require("cors");
const pg = require("pg");

// 2 Use the packages from 1 to get our server setup with cors and json
const server = express();
server.use(cors());
server.use(express.json());

// 3 Configure the postgres database client to connect to the todo
//database that we created in postgres
const db = new pg.Client({
	database: "todo",
});

// 4 Connect to the DB that we configured in 3
db.connect();

// 5 Set up an endpoint to make sure our server is running
server.get("/", (req, res) => {
	res.send({ server: "online" });
});

// 22 addTask is triggered from 21 on the frontend
server.post("/addTask", async (req, res) => {
	//23 Using the data from the body of the request we are able
	//to access the value of the input from the form submission
	//and drop it into an insert query that runs in the database
	await db.query(`INSERT INTO todos(name, done) VALUES
	('${req.body.task}', false);`);

	//24 After the task is inserted into the DB from 23,
	//Select all the tasks from the database
	const dbResult = await db.query(`SELECT * FROM todos`);

	//25 Send back the data from 24 in the response to the request from 21
	res.send({ todos: dbResult.rows });
});

// 9 Tasks endpoint REQuested from frontend
server.get("/tasks", async (req, res) => {
	// 10 Use db from 3 & 4 to run a select query on the todos table to get the data
	const dbResult = await db.query(`SELECT * FROM todos`);

	// 11 RESpond to the front end with the data from the query from 10
	res.send({ todos: dbResult.rows });
});

// 6 Tell the server to listen to requests on port 3001.
//Then start the server in the terminal
server.listen(3001, () => {
	console.log("Server online port 3001");
});
