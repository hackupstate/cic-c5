import { useNavigate } from "react-router-dom";
const NewPost = () => {
	const navigateTo = useNavigate();

	//38 When the form is submitted to make a new post
	const createPost = async (event) => {
		event.preventDefault();

		//39 Gather the form values
		const post = {
			title: event.target.elements.title.value,
			content: event.target.elements.content.value,
			tagline: event.target.elements.tagline.value,
			timestamp: Date.now(),
		};

		//40 Send the form values to the backend via a post request
		await fetch(`http://localhost:3011/newPost`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(post),
		});
		//43 After the values are saved into the DB,
		//navigate back to the homepage
		navigateTo("/");
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
					<label htmlFor="tagline" className="form-label">
						Tagline
					</label>
					<input type="text" className="form-control" id="tagline" />
				</div>
				<button type="submit" className="btn btn-success">
					Create Post
				</button>
			</form>
		</div>
	);
};

export default NewPost;
