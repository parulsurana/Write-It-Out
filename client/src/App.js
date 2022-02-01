import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import { Box } from "@material-ui/core";
import DetailView from "./Components/Post/DetailView";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Box style={{ marginTop: 64 }}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/details' element={<DetailView />} />
					</Routes>
				</Box>
			</Router>
		</>
	);
}

export default App;
