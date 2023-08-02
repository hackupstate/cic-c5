import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // import Home from "./Home";
import Home from "./Home";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
	]);

	return (
		<div className="App container">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
