import "./App.css";
import { useEffect, useState } from "react";
function App() {
	// 7 Set up a place in state to store the data coming from DB
	const [todos, setTodos] = useState([]);

	// 8A When the component first loads
	useEffect(() => {
		// 8B Make an async function
		const makeAPICall = async () => {
			// 8C Make API Call to tasks endpoint in backend
			const response = await fetch(`http://localhost:3001/tasks`);
			// 12 Parse the json in the response
			const data = await response.json();
			// 13 Set the data from 11 in the backend into our state from 7
			setTodos(data.todos);
		};
		makeAPICall();
	}, []);

	// 19 addTask is triggered from 18
	const addTask = async (event) => {
		// 20 We tell the browser not to refresh the page because we control the API
		//call we want to happen
		event.preventDefault();
		// 21 Make a req to the backend to /addTask endpoint
		const response = await fetch(`http://localhost:3001/addTask`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				//See 23
				task: event.target.elements.taskText.value,
			}),
		});
		//26 Parse the data from 25 from the backend
		const data = await response.json();
		//27 Set state to our data
		setTodos(data.todos);
	};
	return (
		<div className="App">
			<h1>To Do List App</h1>
			{/* 18 onSubmit addTask function is triggered */}
			<form onSubmit={addTask}>
				<label>New Task: </label>
				{/* 16 Task text is typed into input */}
				<input type="text" name="taskText" />
				{/* 17 Submit/add button is clicked */}
				<button type="submit">Add</button>
			</form>
			<ul>
				{/* 14 & 28 Map (loop) over each todo from the state which holds the info from the DB */}
				{todos.map((todo) => {
					// 15 & 29 Make a li show up for each item that uses the name col from the DB rows
					return <li key={todo.id}>{todo.name}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;
