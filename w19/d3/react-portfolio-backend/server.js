const express = require("express");
const cors = require("cors");
const pg = require("pg");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const randomWord = require("random-word");

const server = express();
server.use(cors());
server.use(express.json());

const validateUserTokenMiddleware = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    res.status(401).send({ error: 'Authorization header not specified!' });
    return;
  }

  const headerParts = header.split(' ');
  if (headerParts.length !== 2) {
    res.status(401).send({ error: `Malformed Authorization header - expected two words, found ${headerParts.length}` });
    return;
  }

  if (headerParts[0] !== 'Bearer') {
    res.status(401).send({ error: `Malformed Authorization header - expected Bearer scheme, found ${headerParts[0]}` });
    return;
  }

  const token = headerParts[1];
  if (token.length === 0) {
    res.status(401).send({ error: 'Malformed Authorization header - missing token!' });
    return;
  }

  const publicKey = fs.readFileSync('./clerk-public-key.pem', { encoding: 'utf-8' });
  let decoded;
  try {
    decoded = jwt.verify(token, publicKey);
  } catch (error) {
    console.error('Error validating token:', error.message);
    res.status(401).json({ error: 'Malformed Authorization header - invalid token!' });
    return;
  }

  // Extract the clerk user id from the decoded token data
  req.auth = { clerkUserId: decoded.sub };

  next();
};
// server.use(validateUserTokenMiddleware);

const db = new pg.Client({ database: "auth" });
db.connect();

server.get("/", (req, res) => {
  res.send({ ok: true });
});

server.get("/secret-word", validateUserTokenMiddleware, (req, res) => {
  // Extract the clerk user id from the decoded token data
  const clerkUserId = req.auth.clerkUserId;

  res.send({ data: 'static' });

  // Get the user’s secret word
  // db.query(
  //   `SELECT secret_word FROM clerk_user where clerk_id='${clerkUserId}'`,
  // ).then(result => {
  //   // If the user is already in the table, respond with their secret word
  //   if (result.rows.length > 0) {
  //     let firstRow = result.rows[0];
  //     res.send({ data: firstRow.secret_word });
  //   } else {
  //     // If the user is not defined, make them a new row
  //     const secretWord = randomWord();
  //     db.query(
  //       `INSERT INTO clerk_user (clerk_id, secret_word)
  //        VALUES ('${clerkUserId}', '${secretWord}')`,
  //     ).then(() => {
  //       res.send({ data: secretWord });
  //     });
  //   }
  // });
});



server.get('/todos', validateUserTokenMiddleware, async (req, res) => {
  const rawUser = await db.query(
    `SELECT id FROM clerk_user WHERE clerk_id='${req.auth.clerkUserId}'`
  );
  if (rawUser.rows.length === 0) {
    res.status(404).send({ error: `No user found for clerk id ${req.auth.clerkUserId}` });
    return;
  }
  const userId = rawUser.rows[0].id;

  const todos = await db.query(`SELECT * FROM todo WHERE created_by_user_id=${userId}`);
  res.status(200).send({
    results: todos.rows,
  });
});

server.post('/todos', validateUserTokenMiddleware, async (req, res) => {
  const rawUser = await db.query(
    `SELECT id FROM clerk_user WHERE clerk_id='${req.auth.clerkUserId}'`
  );
  if (rawUser.rows.length === 0) {
    res.status(404).send({ error: `No user found for clerk id ${req.auth.clerkUserId}` });
    return;
  }
  const userId = rawUser.rows[0].id;

  const text = req.body.text;
  if (typeof text !== 'string') {
    res.status(400).send({
      error: `The "text" key in the body is not a string! THis is not allowed.`,
    });
    return;
  }

  const result = await db.query(
    `INSERT INTO todo (created_by_user_id, text, complete) VALUES ('${userId}', '${text}', FALSE)`
  );
  console.log(result);
  res.status(201).send(result.rows[0]);
});


server.listen(8000, () => {
  console.log("Listening on port 8000");
});