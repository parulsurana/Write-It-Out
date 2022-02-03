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

export const getAllPost = async (req, res) => {
	let username = req.query.username;
	let category = req.query.categories;
	let posts;
	try {
		if (username) posts = await Post.find({ username: username });
		else if (category) posts = await Post.find({ categories: category });
		else posts = await Post.find({});

		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json(err);
	}
};

export const getPost = async (req, res) => {
	try {
		let post = await Post.findById(req.params.id);
		res.status(200).json(post);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
};

export const updatePost = async (req, res) => {
	try {
		await Post.findByIdAndUpdate(req.params.id, { $set: req.body });
		res.status(200).json("Blog Update Successfully");
	} catch (err) {
		res.status(500).json(err);
	}
};

export const deletePost = async (req, res) => {
	try {
		let post = await Post.findById(req.params.id);
		await post.delete();
		res.status(200).json("Blog Delete Successfully");
	} catch (err) {
		res.status(500).json(err);
	}
};
