const URL = "http://localhost:8000";

export const uploadImage = (req, res) => {
	try {
		if (!req.file) return res.status(404).json("File not found");

		const imageUrl = `${URL}/file/${req.file.filename}`;

		res.status(200).json(imageUrl);
	} catch (err) {
		res.status(500).json(err);
	}
};
