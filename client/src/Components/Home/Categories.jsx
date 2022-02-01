import {
	Button,
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@material-ui/core";
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
});

export default function Categories() {
	const classes = useStyles();
	return (
		<>
			<Button variant='contained' className={classes.create}>
				Create Blog
			</Button>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>All Categories</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{categories.map((category) => (
						<TableRow>
							<TableCell>{category}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}
