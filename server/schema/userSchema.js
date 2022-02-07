import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	cpassword: {
		type: String,
		required: true,
	},
});

//Hashing Password
UserSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 12);
		this.cpassword = await bcrypt.hash(this.cpassword, 12);
	}
	next();
});

// We are generating token
// UserSchema.methods.generateAuthToken = async function () {
// 	try {
// 		let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
// 		this.tokens = this.tokens.concat({ token: token });
// 		await this.save();
// 		return token;
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
const user = mongoose.model("user", UserSchema);

export default user;
