// 1 Does imports from npm packages
import express from "express";
import cors from "cors";
// 2 (through 16) Imports sequelize setup
import { db, Post } from "./db/db.js";

//17 Setup express server to parse json body and allow CORS
const server = express();
server.use(express.json());
server.use(cors());

//18 Root endpoint to test that the server is working
server.get("/", (req, res) => {
	res.send({ status: "online" });
});

//41 Get the request from the front end to save a new post to the DB
server.post("/newPost", async (req, res) => {
	//42 Use the form values from #39 to make a new post in the DB
	await Post.create(req.body);
	res.send();
});

//23 Lines up with 22 on the frontend
server.get("/posts", async (req, res) => {
	//24 Use the post model from #2 to query the database, get the results
	//and send them back to the frontend in a posts object
	res.send({ posts: await Post.findAll() });
});

server.get("/post/:id", async (req, res) => {
	//34 Get specific post ID using the model from sequelize
	res.send({ post: await Post.findOne({ id: req.params.id }) });
});

//19 Make server listen for requests on 3011
server.listen(3011, () => {
	console.log("Server is running on port 3011");
});
