import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
	url: `mongodb+srv://blog:bl06@cluster0.ey6cy.mongodb.net/Blog?retryWrites=true&w=majority`,
	options: { useNewUrlParser: true, useUnifiedTopology: true },
	file: (req, file) => {
		const match = ["image/png", "image/jpg"];

		if (match.indexOf(file.memeType === -1))
			return `${Date.now()}-blog-${file.originalname}`;

		return {
			bucketName: "photos",
			filename: `${Date.now()}-blog-${file.originalname}`,
		};
	},
});

export default multer({ storage });
