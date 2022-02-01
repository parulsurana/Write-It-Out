const express = require("express");
const connection = require("./databse/db.js");

const app = express();

const PORT = 8000;

app.listen(PORT, () =>
	console.log(`Server is Running Successfully on port ${PORT}`)
);

connection();
