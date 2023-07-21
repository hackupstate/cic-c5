import { useState, useEffect } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";

const Home = () => {
	const [posts, setPosts] = useState([
		{
			title: "My First Placeholder Post",
			content: "Yay! I'm a crappy writer",
			timestamp: Date.now(),
			author: "Ze Best Writer",
		},
	]);

	useEffect(() => {
		const postJSON = window.localStorage.getItem("posts");
		const posts = JSON.parse(postJSON);

		setPosts(posts);
	}, []);

	return (
		<div>
			<div className="container">
				<h1>Max's Blog</h1>
				<hr />
				<div id="posts" className="row">
					{!posts ? (
						<p>No posts yet...</p>
					) : (
						posts.map((eachPost) => {
							return (
								<Post
									key={eachPost.timestamp}
									data={eachPost}
								/>
							);
						})
					)}
				</div>
				{/* <!-- end of posts row--> */}
				<div id="actionLinks">
					<Link to="/newPost">New Post</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
