import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

//components
import connection from "./databse/db.js";
import Router from "./routes/route.js";

const app = express();

import Auth from "./routes/auth.js";

const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);
app.use("/", Auth);

app.get("/", (req, res) => {
	res.send(`Hello World from the server`);
});

app.listen(PORT, () =>
	console.log(`Server is Running Successfully on port ${PORT}`)
);

connection();
