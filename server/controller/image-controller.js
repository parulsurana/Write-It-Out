import mongoose from "mongoose";
import grid from "gridfs-stream";

const URL = "http://localhost:8000";

let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
	gfs = grid(conn.db, mongoose.mongo);
	gfs.collection("fs");
});

export const uploadImage = (req, res) => {
	try {
		if (!req.file) return res.status(404).json("File not found");

		const imageUrl = `${URL}/file/${req.file.filename}`;

		res.status(200).json(imageUrl);
	} catch (err) {
		res.status(500).json(err);
	}
};

export const getImage = async (req, res) => {
	try {
		const file = await gfs.files.findOne({ filename: req.params.filename });
		const readStream = gfs.createReadStream(file.filename);
		readStream.pipe(res);
	} catch (err) {
		res.status(500).json("Failed to fetch the image", err);
	}
};
