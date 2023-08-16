const express = require("express");
const cors = require("cors");
const pg = require("pg");

const server = express();
server.use(cors());
server.use(express.json());

const db = new pg.Client({
	database: "chat",
});

db.connect();

server.get("/", (req, res) => {
	res.send({ server: "online" });
});

// #4 Frontend request received to GET /messages endpoint
server.get("/messages", async (req, res) => {
	//#5 Query the SQL Postgres database to get the messages and order by ID
	const result = await db.query("SELECT * FROM messages ORDER BY id");
	//#6 Send the results of the DB query back in the response using JSON
	res.send({ messages: result.rows });
});

server.post("/message", async (req, res) => {
	console.log(req.body);
	await db.query(`INSERT INTO messages (content, sent) VALUES(
		'${req.body.messageText}', true
	)`);
	const result = await db.query("SELECT * FROM messages ORDER BY id");
	// console.log(result);
	res.send({ messages: result.rows });
});

server.delete("/message/:messageID", async (req, res) => {
	await db.query(`DELETE FROM messages WHERE id=${req.params.messageID}`);

	res.send();
});

server.put("/message/:messageID", async (req, res) => {
	// console.log(`UPDATE messages
	// SET content='${req.body.updatedText}'
	// WHERE id=${req.params.messageID}
	// `);

	// const currentMessages = await db.query(
	// 	`SELECT * FROM messages WHERE id=${req.params.messageID}`
	// );
	// console.log(currentMessages.rows);

	await db.query(`UPDATE messages
	SET content='${req.body.updatedText}'
	WHERE id=${req.params.messageID}`);

	res.send();
});

server.listen(3010, () => {
	console.log("Server online at port 3010");
});
