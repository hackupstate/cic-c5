const NewPost = () => {
	const createPost = (event) => {
		event.preventDefault();

		const post = {
			title: event.target.elements.title.value,
			content: event.target.elements.content.value,
			author: event.target.elements.author.value,
			timestamp: Date.now(),
		};

		//get the existing posts from local storage
		const postsString = window.localStorage.getItem("posts");
		let postsArray;

		if (!postsString) {
			//if the posts have not been created yet, make a new empty array
			postsArray = [];
		} else {
			//convert the local storage string to an array
			postsArray = JSON.parse(postsString);
		}

		//add our new post object to end of the array
		postsArray.push(post);

		//convert the array back to a string
		const newPostsArray = JSON.stringify(postsArray);

		//put the stringified array back into local storage
		window.localStorage.setItem("posts", newPostsArray);
		window.location = "/";
	};

	return (
		<div className="container">
			<h1>New Post</h1>
			<hr />
			<form onSubmit={createPost}>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input type="text" className="form-control" id="title" />
				</div>
				<div className="mb-3">
					<label htmlFor="content" className="form-label">
						Content
					</label>
					<textarea
						className="form-control"
						id="content"
						rows="3"
					></textarea>
				</div>
				<div className="mb-3">
					<label htmlFor="author" className="form-label">
						Author
					</label>
					<input type="text" className="form-control" id="author" />
				</div>
				<button type="submit" className="btn btn-success">
					Create Post
				</button>
			</form>
		</div>
	);
};

export default NewPost;
