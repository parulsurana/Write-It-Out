import mongoose from "mongoose";

const connection = async () => {
	try {
		const URL =
			"mongodb+srv://blog:bl06@cluster0.ey6cy.mongodb.net/Blog?retryWrites=true&w=majority";
		await mongoose.connect(URL, { useNewUrlParser: true });
		console.log("Database Connected Successfully");
	} catch (err) {
		console.log("Error while connection to MongoDB", err);
	}
};

export default connection;
