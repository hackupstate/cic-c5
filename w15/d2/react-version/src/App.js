import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Page2 from "./Page2";

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/page2", element: <Page2 /> },
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
