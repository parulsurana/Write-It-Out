import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import { Box } from "@material-ui/core";
import DetailView from "./Components/Post/DetailView";
import CreateView from "./Components/Post/CreateView";
import UpdateView from "./Components/Post/UpdateView";
import Login from "./Components/Home/Login";
import SignUp from "./Components/Home/SignUp";
import ForgetPassword from "./Components/Home/ForgetPassword";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Box style={{ marginTop: 64 }}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/details/:id' element={<DetailView />} />
						<Route path='/create' element={<CreateView />} />
						<Route path='/update/:id' element={<UpdateView />} />
						<Route path='/login' element={<Login />} />
						<Route path='/signUp' element={<SignUp />} />
						<Route path='/forgetpassword' element={<ForgetPassword />} />
					</Routes>
				</Box>
			</Router>
		</>
	);
}

export default App;
