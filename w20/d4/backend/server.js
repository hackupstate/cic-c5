import express from "express";
import cors from "cors";
import { db, Shoes, Ocassions } from "./db.js";

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
	res.send({ hello: "world" });
});

server.get("/shoes", async (req, res) => {
	res.send({ shoes: await Shoes.findAll({ include: Ocassions }) });
});

server.post("/shoes", async (req, res) => {
	const newShoe = await Shoes.create({
		name: req.body.name,
		type: req.body.type,
		size: req.body.size,
	});
	for (const occasion of req.body.occasions) {
		await Ocassions.create({
			name: occasion,
			shoeID: newShoe.dataValues.id,
		});
	}
	res.send();
});

server.listen(3080, () => {
	console.log("Server online");
});
