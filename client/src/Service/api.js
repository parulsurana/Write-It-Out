import axios from "axios";

const URL = "http://localhost:8000";

export const CreatePost = async (post) => {
	try {
		return await axios.post(`${URL}/create`, post);
	} catch (err) {
		console.log("Error while calling CreatePost API", err);
	}
};

export const getAllPost = async (param) => {
	try {
		let response = await axios.get(`${URL}/posts${param}`);
		return response.data;
	} catch (err) {
		console.log("Error while calling getAllPost API", err);
	}
};

export const getPost = async (id) => {
	try {
		let response = await axios.get(`${URL}/post${id}`);
		return response.data;
	} catch (err) {
		console.log("Error while calling getPost API", err);
	}
};

export const updatePost = async (id, post) => {
	try {
		await axios.post(`${URL}/update${id}`, post);
	} catch (err) {
		console.log("Error while calling updatePost API", err);
	}
};

export const deletePost = async (id) => {
	try {
		await axios.delete(`${URL}/delete${id}`);
	} catch (err) {
		console.log("Error while calling deletePost API", err);
	}
};
