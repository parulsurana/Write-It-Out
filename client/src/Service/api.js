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

export const uploadFile = async (data) => {
	console.log(data);
	try {
		return await axios.post(`${URL}/file/upload`, data);
	} catch (err) {
		console.log("Error while calling uploadFile API", err);
	}
};

export const newComment = async (data) => {
	try {
		return await axios.post(`${URL}/comment/new`, data);
	} catch (err) {
		console.log("Error while calling postCommnet API", err);
	}
};

export const getComments = async (id) => {
	try {
		let response = await axios.get(`${URL}/comments/${id}`);
		return response.data;
	} catch (err) {
		console.log("Error while calling getComments API", err);
	}
};

export const deleteComment = async (id) => {
	try {
		return await axios.delete(`${URL}/comment/delete/${id}`);
	} catch (err) {
		console.log("Error while calling deleteComment API", err);
	}
};

//Signup

export const CreateData = async (user) => {
	try {
		return await axios.post(`${URL}/register`, user);
	} catch (err) {
		console.log("Error while calling CreatePost API", err);
	}
};

//Signin
export const SaveLoginData = async (email, password) => {
	try {
		return await axios.post(`${URL}/signin`, email, password);
	} catch (err) {
		console.log("Error while calling CreatePost API", err);
	}
};
