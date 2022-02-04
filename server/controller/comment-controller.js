import Comment from "../schema/commentSchema.js";

export const newComment = async (req, res) => {
	try {
		const comment = await new Comment(req.body);
		comment.save();

		res.status(200).json("Comments saved successfulyy!");
	} catch (err) {
		res.status(500).json(err);
	}
};

export const getComments = async (req, res) => {
	try {
		const comments = await Comment.find({ postId: req.params.id });
		res.status(200).json(comments);
	} catch (err) {
		res.status(500).json(err);
	}
};

export const deleteComment = async (req, res) => {
	try {
		let comment = await Comment.findById(req.params.id);
		await comment.delete();
		res.status(200).json("Comments deleted Successfully");
	} catch (err) {
		res.status(500).json(err);
	}
};
