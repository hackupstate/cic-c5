const postJSON = window.localStorage.getItem("posts");
const posts = JSON.parse(postJSON);

console.log(posts);
