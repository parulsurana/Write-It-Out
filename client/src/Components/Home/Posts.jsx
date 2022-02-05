import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Post from "./Post";
import { getAllPost } from "../../Service/api.js";

export default function Posts() {
	const [posts, setPosts] = useState([]);
	const { search } = useLocation();

	useEffect(() => {
		const fetchData = async () => {
			const data = await getAllPost(search);
			console.log(data);
			setPosts(data);
		};
		fetchData();
	}, [search]);

	// let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		posts &&
		posts.map((post) => (
			<Grid items lg={3} sm={4} xs={12}>
				<Link
					to={`/details/${post._id}`}
					style={{ textDecoration: "none", color: "inherit" }}
				>
					<Post post={post} />
				</Link>
			</Grid>
		))
	);
}
