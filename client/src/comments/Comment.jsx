import { Box, makeStyles, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

import { deleteComment } from "../Service/api";

const useStyles = makeStyles({
	component: {
		marginTop: 30,
		background: "#F5F5F5",
		padding: 10,
	},
	container: {
		display: "flex",
		marginBottom: 5,
	},
	name: {
		fontSize: 18,
		fontWeight: 600,
		marginRight: 20,
	},
	date: {
		fontSize: 14,
		color: " #878787",
	},
	delete: {
		marginLeft: "auto",
	},
});

export default function Comment({ comment, setToggle }) {
	const classes = useStyles();

	const removeComment = async () => {
		await deleteComment(comment._id);
		setToggle((prev) => !prev);
	};

	return (
		<>
			<Box className={classes.component}>
				<Box className={classes.container}>
					<Typography className={classes.name}>{comment.name}</Typography>
					<Typography className={classes.date}>
						{new Date(comment.date).toDateString()}
					</Typography>
					<Delete onClick={() => removeComment()} className={classes.delete} />
				</Box>
				<Typography>{comment.comments}</Typography>
			</Box>
		</>
	);
}
