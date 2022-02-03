import {
	Box,
	Button,
	FormControl,
	InputBase,
	makeStyles,
	TextareaAutosize,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { AddCircle } from "@material-ui/icons";
import { CreatePost, uploadFile } from "../../Service/api";
import { useNavigate } from "react-router-dom";

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
	username: "charles",
	categories: "Fashion",
	createDate: new Date(),
};

export default function CreateView() {
	const classes = useStyles();

	const [post, setPost] = useState(initialValues);
	const [file, setFile] = useState(``);
	const [image, setImage] = useState(``);

	const url = post.picture
		? post.picture
		: "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80    ";

	const history = useNavigate();

	const handleChange = (e) => {
		setPost({ ...post, [e.target.name]: e.target.value });
	};

	const savePost = async () => {
		await CreatePost(post);
		history("/");
	};

	useEffect(() => {
		const getImage = async () => {
			if (file) {
				console.log(file);
				const data = new FormData();
				data.append("name", file.name);
				data.append("file", file);

				const image = await uploadFile(data);
				post.picture = image.data;
				setImage(post.data);
			}
		};
		getImage();
	}, [file]);

	return (
		<>
			<Box className={classes.container}>
				<img src={url} alt='Banner' className={classes.image} />
				<FormControl className={classes.form}>
					<label htmlFor='fileinput'>
						<AddCircle fontSize='large' color='action' />
					</label>
					<input
						type='file'
						id='fileinput'
						style={{ display: "none" }}
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<InputBase
						onChange={(e) => handleChange(e)}
						placeholder='Title'
						className={classes.textfield}
						name='title'
					/>
					<Button
						onClick={() => savePost()}
						variant='contained'
						color='primary'
					>
						Publish
					</Button>
				</FormControl>
				<TextareaAutosize
					rowsMin={5}
					placeholder='Write your thoughts out....'
					className={classes.textarea}
					onChange={(e) => handleChange(e)}
					name='description'
				/>
			</Box>
		</>
	);
}
