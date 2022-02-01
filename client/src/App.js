import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import { Box } from "@material-ui/core";

function App() {
	return (
		<>
			<Header />
			<Box style={{ marginTop: 64 }}>
				<Home />
			</Box>
		</>
	);
}

export default App;
