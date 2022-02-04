import { Box, Button, makeStyles, TextareaAutosize } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getComments, newComment } from "../Service/api";
import Comment from "./Comment";

const useStyles = makeStyles({
	component: {
		marginTop: 100,
		display: "flex",
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: "50%",
	},
	textarea: {
		width: "100%",
		margin: "0 20px",
		marginBottom: 20,
	},
	btn: {
		height: 40,
	},
});

const initialValues = {
	name: "",
	postId: "",
	date: new Date(),
	comments: "",
};

export default function Comments({ post }) {
	const [comment, setComment] = useState(initialValues);
	const [comments, setComments] = useState([]);
	const [toggle, setToggle] = useState(false);
	const classes = useStyles();

	console.log(post);

	const handleChange = (e) => {
		setComment({
			...comment,
			name: post.username,
			postId: post._id,
			comments: e.target.value,
		});
	};

	const postComment = async () => {
		await newComment(comment);
		setToggle((prev) => !prev);
	};

	useEffect(() => {
		const getData = async () => {
			let response = await getComments(post._id);
			setComments(response);
		};
		getData();
	}, [post, toggle]);

	const url = "https://static.thenounproject.com/png/12017-200.png";
	return (
		<>
			<Box className={classes.component}>
				<img src={url} alt='dp' className={classes.image} />
				<TextareaAutosize
					className={classes.textarea}
					rowsMin={5}
					onChange={(e) => handleChange(e)}
				/>
				<Button
					variant='contained'
					color='primary'
					size='medium'
					className={classes.btn}
					onClick={() => postComment()}
				>
					Post
				</Button>
			</Box>

			{comments &&
				comments.map((comment) => (
					<Comment comment={comment} setToggle={setToggle} />
				))}
		</>
	);
}
