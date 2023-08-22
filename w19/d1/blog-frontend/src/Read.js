import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Read.scss";

const Read = () => {
	const [post, setPost] = useState();
	// 31 Get the ID from the URL
	const { id } = useParams();

	// console.log(timestamp);

	useEffect(() => {
		const makeAPICall = async () => {
			//33 When the page loads make an API call to get the specific ID from the DB
			const response = await fetch(`http://localhost:3011/post/${id}`);
			// 35 Parses data from #34 on backend
			const data = await response.json();
			//36 Sets into state
			setPost(data.post);
		};

		makeAPICall();
	}, [id]);

	const deletePost = () => {
		// if (window.confirm("Are you sure you want to delete this post")) {
		// 	const postJSON = window.localStorage.getItem("posts");
		// 	const posts = JSON.parse(postJSON);
		// 	const updatedPosts = posts.filter(
		// 		(postFilter) => postFilter.timestamp !== parseInt(timestamp)
		// 	);
		// 	const updatedJSON = JSON.stringify(updatedPosts);
		// 	window.localStorage.setItem("posts", updatedJSON);
		// 	window.location = "/";
		// }
	};

	if (!post) {
		return <h1>Hold your 🐴</h1>;
	}

	//37 Show the info in state from the DB
	return (
		<div id="read">
			<h2>{post.title}</h2>
			<h5>{post.author}</h5>
			<h6>{new Date(post.updatedAt).toLocaleString()}</h6>
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
