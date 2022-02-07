import express from "express";

const router = express.Router();
import User from "../schema/userSchema.js";
import bcrypt from "bcrypt";

router.get("/", (req, res) => {
	console.log("Router Working");
	res.send(`Hello From Router.js`);
});

//SignUp
router.post("/register", async (req, res) => {
	const { name, email, phone, password, cpassword } = req.body;

	if (!name || !email || !phone || !password || !cpassword) {
		return res.status(422).json({ error: "All fields are Required" });
	}

	try {
		const userExist = await User.findOne({ email: email });
		if (userExist) {
			return res.status(422).json({ error: "Email already exists" });
		} else if (password != cpassword) {
			return res.status(422).json({ error: "Passwords are not matching" });
		} else {
			const user = new User({ name, email, phone, password, cpassword });
			// pre wala will work.(passwor hashing - UserSchema)
			await user.save();

			res.status(201).json({ message: "User Registered Successfully" });
		}
	} catch (err) {
		console.log(err);
	}
});

//SignIn

router.post("/signin", async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ error: "Filled the data" });
		}

		const userLogin = await User.findOne({ email: email });

		console.log(userLogin);
		if (userLogin) {
			const isMatch = await bcrypt.compare(password, userLogin.password);

			if (!isMatch) {
				res.status(400).json({ error: "Invalid Credentials s" });
			} else {
				res.json({ message: "User Signin Successfully" });
			}
		} else {
			res.status(400).json({ error: "Invalid Credentials" });
		}
	} catch (err) {
		console.log(err);
	}
});

export default router;
