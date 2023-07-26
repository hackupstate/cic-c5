import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Read.scss";

const Read = () => {
	const [post, setPost] = useState();
	const { timestamp } = useParams();

	// console.log(timestamp);

	useEffect(() => {
		//get and parse posts from local storage
		const postJSON = window.localStorage.getItem("posts");
		const posts = JSON.parse(postJSON);

		const matchingPost = posts.find(
			(searchPost) => searchPost.timestamp === parseInt(timestamp)
		);

		setPost(matchingPost);
	}, [timestamp]);

	const deletePost = () => {
		if (window.confirm("Are you sure you want to delete this post")) {
			const postJSON = window.localStorage.getItem("posts");
			const posts = JSON.parse(postJSON);

			const updatedPosts = posts.filter(
				(postFilter) => postFilter.timestamp !== parseInt(timestamp)
			);

			const updatedJSON = JSON.stringify(updatedPosts);
			window.localStorage.setItem("posts", updatedJSON);
			window.location = "/";
		}
	};

	if (!post) {
		return <h1>Hold your 🐴</h1>;
	}

	return (
		<div id="read">
			<h2>{post.title}</h2>
			<h5>{post.author}</h5>
			<h6>{new Date(post.timestamp).toLocaleString()}</h6>
			<hr />
			<p>{post.content}</p>
			<Link to="/">Return to Home</Link>
			<button className="btn btn-danger" onClick={deletePost}>
				Delete Post
			</button>
		</div>
	);
};

export default Read;
