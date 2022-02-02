import Post from "../schema/postSchema.js";

export const createPost = async (req, res) => {
	console.log(req.body);
	try {
		const post = await new Post(req.body);
		post.save();
		res.status(200).json("Blog Successfully Saved");
	} catch (err) {
		res.status(500).json(err);
	}
};
