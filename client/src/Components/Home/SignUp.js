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

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreateData } from "../../Service/api";

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

	const history = useNavigate();
	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
		cpassword: "",
	});

	let name, value;
	const handleInputs = (e) => {
		console.log(e);
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	};

	const saveData = async () => {
		await CreateData(user);
		history("/login");
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
					<TextField
						label='Name'
						placeholder='Enter Name'
						onChange={handleInputs}
						name='name'
						fullWidth
						required
					/>
					<TextField
						label='Email'
						placeholder='Enter Email'
						onChange={handleInputs}
						name='email'
						fullWidth
						required
					/>
					<TextField
						label='Phone Number'
						placeholder='Enter phone number'
						type='phone'
						onChange={handleInputs}
						name='phone'
						fullWidth
						required
					/>
					<TextField
						label='Password'
						placeholder='Enter Password'
						type='password'
						onChange={handleInputs}
						name='password'
						fullWidth
						required
					/>
					<TextField
						label='Confirm Password'
						placeholder='Enter CPassword'
						type='password'
						onChange={handleInputs}
						name='cpassword'
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
						onClick={() => saveData()}
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
