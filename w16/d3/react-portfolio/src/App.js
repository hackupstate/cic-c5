import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // import Home from "./Home";
import Home from "./Home";
import Page2 from "./Page2";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/page2",
			element: <Page2 />,
		},
	]);

	return (
		<div
			className="App container"
			// style={{
			// 	minHeight: "100vh",
			// 	backgroundImage:
			// 		'url("https://static.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png")',
			// }}
		>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
