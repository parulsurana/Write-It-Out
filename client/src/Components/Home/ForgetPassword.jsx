import {
	Grid,
	Paper,
	Avatar,
	TextField,
	Checkbox,
	FormControlLabel,
	Button,
	Typography,
} from "@material-ui/core";

import React from "react";
import { Lock } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Login() {
	const paperStyles = {
		padding: 20,
		height: "40vh",
		width: 350,
		margin: "200px auto",
	};
	const avtarStyles = { backgroundColor: "#1bbd7e" };
	const buttonStyles = { margin: "20px 0" };

	return (
		<>
			<Grid>
				<Paper elevation={10} style={paperStyles}>
					<Grid align='center'>
						<Avatar style={avtarStyles}>
							<Lock />
						</Avatar>
						<h1>Reset your Password</h1>
					</Grid>
					<Typography>
						To reset your password, enter your email below and submit. An email
						will be sent to you with instructions about how to complete the
						process.
					</Typography>
					<TextField
						label='Email'
						placeholder='Enter Email'
						fullWidth
						required
					/>

					<Button color='primary' variant='contained' style={buttonStyles}>
						Reset Password
					</Button>
				</Paper>
			</Grid>
		</>
	);
}
