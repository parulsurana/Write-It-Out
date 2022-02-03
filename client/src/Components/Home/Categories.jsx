import {
	Button,
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import { categories } from "../../constants/data";

const useStyles = makeStyles({
	create: {
		margin: 20,
		background: "#6495ED",
		color: "#FFFF",
		width: "86%",
	},
	table: {
		border: "1px solid rgba(244,244,244,1)",
	},
	link: {
		textDecoration: "none",
		color: "inherit",
	},
});

export default function Categories() {
	const classes = useStyles();
	return (
		<>
			<Link to='/create' className={classes.link}>
				<Button variant='contained' className={classes.create}>
					Create Blog
				</Button>
			</Link>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>
							<Link to={`/`} className={classes.link}>
								All Categories
							</Link>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{categories.map((category) => (
						<TableRow>
							<TableCell>
								<Link to={`/?categories=${category}`} className={classes.link}>
									{category}
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}
