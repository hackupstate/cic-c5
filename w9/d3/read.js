const postJSON = window.localStorage.getItem("posts");
const posts = JSON.parse(postJSON);

const params = new URL(window.location.href);
const dateID = params.searchParams.get("timestamp");

//long version
// let matchingPost;
// for (const searchPost of posts) {
// 	if (searchPost.timestamp == dateID) {
// 		matchingPost = post;
// 	}
// }

// short version
const matchingPost = posts.find((searchPost) => searchPost.timestamp == dateID);

document.getElementById("postContent").innerHTML = `
			<h2>${matchingPost.title}</h2>
			<h5>${matchingPost.author}</h5>
			<h6>${new Date(matchingPost.timestamp).toLocaleString()}</h6>
			<hr />
			<p>${matchingPost.content}</p>`;

const deletePost = (event) => {
	if (window.confirm("Are you sure you want to delete this post")) {
		const postJSON = window.localStorage.getItem("posts");
		const posts = JSON.parse(postJSON);

		const updatedPosts = posts.filter(
			(postFilter) => postFilter.timestamp != dateID
		);

		const updatedJSON = JSON.stringify(updatedPosts);
		window.localStorage.setItem("posts", updatedJSON);
		window.location = "/";
	}
};
