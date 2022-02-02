import axios from "axios";

const URL = "http://localhost:8000";

export const CreatePost = async (post) => {
	try {
		return await axios.post(`${URL}/create`, post);
	} catch (err) {
		console.log("Error while calling CreatePost API", err);
	}
};
