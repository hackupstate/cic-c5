import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import NewPost from "./NewPost";
import Read from "./Read.js";

const myRoutes = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/newPost",
		element: <NewPost />,
	},
	{
		path: "/read/:timestamp",
		element: <Read />,
	},
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={myRoutes} />
		</div>
	);
}

export default App;
