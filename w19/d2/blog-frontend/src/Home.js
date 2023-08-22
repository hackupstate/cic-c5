import { useState, useEffect } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import APIURL from "./APIURL";

const Home = () => {
	//20 Set up state to show our posts when the API call data comes in
	const [posts, setPosts] = useState([]);

	//21 When the page first loads
	useEffect(() => {
		const makeAPICall = async () => {
			//22 Fetch our posts from the backend /posts endpoint
			const response = await fetch(`${APIURL}/posts`);
			//25 Parse the data
			const data = await response.json();
			//26 Use the data to set that into state
			setPosts(data.posts);
			console.log(data.posts);
		};
		makeAPICall();
	}, []);

	return (
		<div>
			{/* Remove container div & h1 */}

			<div id="posts" className="row">
				{!posts ? (
					<p>No posts yet...</p>
				) : (
					// 27 Loop over each of the posts
					posts.map((eachPost) => {
						// 28 Make the Post component show for each post from the DB
						//and pass the post info in a prop called data
						return <Post key={eachPost.id} data={eachPost} />;
					})
				)}
			</div>
			{/* <!-- end of posts row--> */}
			<div id="actionLinks">
				<Link to="/newPost">New Post</Link>
			</div>
		</div>
	);
};

export default Home;
