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
import { Lock } from "@material-ui/icons";

import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
	const paperStyles = {
		padding: 20,
		height: "65vh",
		width: 350,
		margin: "200px auto",
	};
	const avtarStyles = { backgroundColor: "#1bbd7e" };
	const buttonStyles = { margin: "10px 0" };
	const checkStyles = { marginTop: 10 };
	const linkStyless = {
		textDecoration: "none",
		color: "inherit",
	};
	const linkStyles = {
		textDecoration: "none",
		color: "primary",
		marginLeft: 8,
	};
	const linkStylesSignup = {
		marginTop: 8,
	};
	return (
		<>
			<Grid>
				<Paper elevation={10} style={paperStyles}>
					<Grid align='center'>
						<Avatar style={avtarStyles}>
							<Lock />
						</Avatar>
						<h1>SignUp</h1>
					</Grid>
					<TextField label='Name' placeholder='Enter Name' fullWidth required />
					<TextField
						label='Email'
						placeholder='Enter Email'
						fullWidth
						required
					/>
					<TextField
						label='Phone Number'
						placeholder='Enter phone number'
						type='phone'
						fullWidth
						required
					/>
					<TextField
						label='Password'
						placeholder='Enter Password'
						type='password'
						fullWidth
						required
					/>
					<TextField
						label='Confirm Password'
						placeholder='Enter CPassword'
						type='password'
						fullWidth
						required
					/>
					<FormControlLabel
						control={<Checkbox name='checkedB' color='primary' />}
						label='Accept all the terms and conditions'
						style={checkStyles}
					/>

					<Button
						color='primary'
						variant='contained'
						// fullWidth
						style={buttonStyles}
					>
						SignUp
					</Button>

					<Typography style={linkStylesSignup}>
						Already have an account.
						<Link to='/login' style={linkStyles}>
							SignIn
						</Link>
					</Typography>
				</Paper>
			</Grid>
		</>
	);
}
