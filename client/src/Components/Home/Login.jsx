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
		height: "50vh",
		width: 350,
		margin: "200px auto",
	};
	const avtarStyles = { backgroundColor: "#1bbd7e" };
	const buttonStyles = { margin: "10px 0" };
	const checkStyles = { marginTop: 10 };
	const linkStyless = {
		textDecoration: "none",
		color: "primary",
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
						<h1>SignIn</h1>
					</Grid>
					<TextField
						label='Username'
						placeholder='Enter Username'
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
					<FormControlLabel
						control={<Checkbox name='checkedB' color='primary' />}
						label='Remember me'
						style={checkStyles}
					/>
					<Grid>
						<Button color='primary' variant='contained' style={buttonStyles}>
							SignIn
						</Button>
					</Grid>

					<Typography>
						<Link to='/forgetpassword' style={linkStyless}>
							Forget Password ?
						</Link>
					</Typography>

					<Typography style={linkStylesSignup}>
						Create an account.
						<Link to='/signUp' style={linkStyles}>
							SignUp
						</Link>
					</Typography>
				</Paper>
			</Grid>
		</>
	);
}
