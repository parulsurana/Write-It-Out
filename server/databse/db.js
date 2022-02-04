import mongoose from "mongoose";

const connection = async () => {
	try {
		const URL =
			"mongodb+srv://blog:bl06@cluster0.ey6cy.mongodb.net/Blog?retryWrites=true&w=majority";
		await mongoose.connect(URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log("Database Connected Successfully");
	} catch (err) {
		console.log("Error while connection to MongoDB", err);
	}
};
mongoose.set("useCreateIndex", true); //DeprecationWarning: `ensureIndex()` is deprecated in Mongoose >= 4.12.0, use `createIndex()` instead

export default connection;
