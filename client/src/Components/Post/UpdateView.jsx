import {
	Box,
	Button,
	FormControl,
	InputBase,
	makeStyles,
	TextareaAutosize,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { AddCircle } from "@material-ui/icons";
import { getPost, updatePost } from "../../Service/api";
import { useNavigate, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: "0 100px",
		[theme.breakpoints.down("md")]: {
			padding: 0,
		},
	},
	image: {
		width: "100%",
		height: "50vh",
		objectFit: "cover",
	},
	form: {
		display: "flex",
		flexDirection: "row",
		marginTop: 10,
	},
	textfield: {
		flex: 1,
		margin: "0 30px",
		fontSize: 25,
	},
	textarea: {
		width: "100%",
		marginTop: 50,
		border: "none",
		fontSize: 18,
		"&:focus-visible": {
			outline: "none",
		},
	},
}));

const initialValues = {
	title: "",
	description: "",
	picture: "",
	username: "lewis",
	categories: "All",
	createDate: new Date(),
};

export default function UpdateView() {
	const url =
		"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80    ";
	const classes = useStyles();

	const history = useNavigate();
	const [post, setPost] = useState(initialValues);

	const { id } = useParams();
	useEffect(() => {
		const fetchData = async () => {
			let data = await getPost(id);
			console.log(data);
			setPost(data);
		};
		fetchData();
	}, []);

	const handleChange = (e) => {
		setPost({ ...post, [e.target.name]: e.target.value });
	};

	const updateBlog = async () => {
		await updatePost(id, post);
		history(`/details/${id}`);
	};
	return (
		<>
			<Box className={classes.container}>
				<img src={url} alt='Banner' className={classes.image} />
				<FormControl className={classes.form}>
					<AddCircle fontSize='large' color='action' />
					<InputBase
						onChange={(e) => handleChange(e)}
						placeholder='Title'
						value={post && post.title}
						className={classes.textfield}
						name='title'
					/>
					<Button
						onClick={() => updateBlog()}
						variant='contained'
						color='primary'
					>
						Update
					</Button>
				</FormControl>
				<TextareaAutosize
					rowsMin={5}
					onChange={(e) => handleChange(e)}
					placeholder='Write your thoughts out....'
					className={classes.textarea}
					value={post && post.description}
					name='description'
				/>
			</Box>
		</>
	);
}
