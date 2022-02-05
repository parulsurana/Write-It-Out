import React from "react";

import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	component: {
		background: "#FFFFFF",
		color: "black",
	},
	container: {
		justifyContent: "center",
		"& > *": {
			padding: 20,
		},
	},
});

function Header() {
	const classes = useStyles();
	return (
		<>
			<AppBar className={classes.component}>
				<Toolbar className={classes.container}>
					<Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
						<Typography>HOME</Typography>
					</Link>
					<Typography>ABOUT</Typography>
					<Typography>CONTACT</Typography>
					<Link
						to='/login'
						style={{ textDecoration: "none", color: "inherit" }}
					>
						{" "}
						<Typography>LOGIN</Typography>
					</Link>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default Header;
