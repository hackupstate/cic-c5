import "./App.css";
import Header from "./Header";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";
import { useEffect, useState } from "react";

function App() {
	// #1 Set up messages in state so we have a place to put them
	// #9 Messages state is updated
	const [messages, setMessages] = useState([]);

	const makeAPICall = async () => {
		// #3 Fetch (GET) to backend on port 3010 hits /messages endpoint
		const response = await fetch(`http://localhost:3010/messages`);
		// #7 Parse JSON from backend
		const data = await response.json();
		console.log(data.messages);
		// #8 Set data from #6 & 7 into state
		setMessages(data.messages);
	};

	useEffect(() => {
		// #2 useEffect runs when the component first loads and triggers
		//the makeAPICall function
		makeAPICall();
	}, []);
	return (
		<div className="App container">
			<Header />
			{/* #10 Because state is updated, and <MessagesList/> uses the messages
			prop connected to state, we have to re-render this component */}
			<MessagesList messages={messages} updateMessages={makeAPICall} />
			<MessageInput setMessages={setMessages} />
		</div>
	);
}

export default App;
