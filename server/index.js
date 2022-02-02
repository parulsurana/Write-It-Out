import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

//components
import connection from "./databse/db.js";
import Router from "./routes/route.js";

const app = express();

const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

app.listen(PORT, () =>
	console.log(`Server is Running Successfully on port ${PORT}`)
);

connection();
