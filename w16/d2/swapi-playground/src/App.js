import "./App.css";
import Character from "./Character";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Login from "./Login";
import "animate.css";

function App() {
	// const character = "Han Solo";
	// const characters = ["Luke", "Leia", "Darth Vader"];

	const routes = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home name="SWAPI" />,
				},
				{
					path: "/character/:id",
					element: <Character />,
				},
			],
		},
		{
			path: "/login",
			element: <Login />,
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={routes} />
			{/* {characters.map((name) => {
				return <Character key={name} name={name}></Character>;
			})} */}
		</div>
	);
}

export default App;
