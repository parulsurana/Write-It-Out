import {
	Box,
	Button,
	FormControl,
	InputBase,
	makeStyles,
	TextareaAutosize,
} from "@material-ui/core";
import React from "react";
import { AddCircle } from "@material-ui/icons";

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

export default function UpdateView() {
	const url =
		"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80    ";
	const classes = useStyles();
	return (
		<>
			<Box className={classes.container}>
				<img src={url} alt='Banner' className={classes.image} />
				<FormControl className={classes.form}>
					<AddCircle fontSize='large' color='action' />
					<InputBase placeholder='Title' className={classes.textfield} />
					<Button variant='contained' color='primary'>
						Update
					</Button>
				</FormControl>
				<TextareaAutosize
					rowsMin={5}
					placeholder='Write your thoughts out....'
					className={classes.textarea}
				/>
			</Box>
		</>
	);
}
