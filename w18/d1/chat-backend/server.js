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

server.get("/messages", async (req, res) => {
	const result = await db.query("SELECT * FROM messages");
	res.send({ messages: result.rows });
});

server.listen(3010, () => {
	console.log("Server online at port 3010");
});
