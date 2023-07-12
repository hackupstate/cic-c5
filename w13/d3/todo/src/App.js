//#2A Import useState from react so we can use in #2B
import { useState } from "react";
import "./App.css";

//#1 App where the entire react project starts
const App = () => {
	//#2B Items and setItems are variable and a function that come from
	//useState (a concept built into react) and items starts out as an empty array
	const [items, setItems] = useState([]);
	const [itemText, setItemText] = useState("");

	// #5B Runs when the form is submitted
	const addItem = (event) => {
		// #6 Prevent the page from refreshing
		event.preventDefault();

		//#8 We can't set items like a normal variable because it is a state variable.
		// Becuse of that we have to use the setItems functon from #2B.
		//The parameter of the setItems function is the new value we would like in state.
		//In this case we are taking all the existing items, spread them out in a new
		//array then put in the new itemText (from state) as another index in that array.

		//Modify our tasks to be an object instead of just a string so we can keep track of
		//not only the name, but also whether it is done or not
		setItems([...items, { taskName: itemText, done: false }]);
		setItemText("");
		console.log(items);
	};

	const markAsDone = (taskIndex) => {
		console.log(taskIndex);
		//Making a copy of our items
		const updatedTasks = [...items];
		//Using the index and the done property from the object, set it to true
		updatedTasks[taskIndex].done = !updatedTasks[taskIndex].done;
		//Then take all of our updated tasks and set them into state
		setItems(updatedTasks);

		console.log(updatedTasks);
	};

	return (
		<div>
			<h1>To Do List App</h1>
			{/* #5A Trigger the addItem function above */}
			<form onSubmit={addItem}>
				<label>New To Do Item: </label>
				<input
					type="text"
					name="task"
					// Connecting itemText to the state variable from line 9
					value={itemText}
					onChange={(event) => {
						// When a user types in a value to change the text box, update what they have
						//typed in into state
						setItemText(event.target.value);
					}}
				/>
				<button type="submit">Add Item</button>
			</form>
			{/* #3 Loop over all the items in our state variable */}
			{/* #9 setItems was called, so react auto-magically reruns this loop */}
			{items.map((item, index) => {
				// #4 Show each of the items in the bullet point...
				//but there aren't any items yet so this <li> doesn't show up at first
				// #10 Because the items array has our new items text in it, it will automagically
				//render a new li item for us
				return (
					<li
						key={index}
						className={item.done ? "done" : "todo"}
						// Add a ternary operator that applies some CSS if the task is done
						style={{
							textDecoration:
								item.done === true ? "line-through" : "",
						}}
					>
						<input
							type="checkbox"
							checked={item.done}
							onChange={() => {
								markAsDone(index);
							}}
						/>
						{/* Update item.taskName to use the object we set up above */}
						{item.taskName}{" "}
						{/* Add a new button called Done that updates the task when we click on it */}
						{/* <button
							onClick={() => {
								//Execute mark as done function and also pass in the index of this item so we know
								//which item is getting click done on
								markAsDone(index);
							}}
						>
							Done
						</button> */}
					</li>
				);
			})}
		</div>
	);
};

export default App;
