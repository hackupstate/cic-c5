import "./App.css";
import Header from "./Header";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";
import { useEffect, useState } from "react";

function App() {
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		const makeAPICall = async () => {
			const response = await fetch(`http://localhost:3010/messages`);
			const data = await response.json();
			console.log(data.messages);
			setMessages(data.messages);
		};
		makeAPICall();
	}, []);
	return (
		<div className="App container">
			<Header />
			<MessagesList messages={messages} />
			<MessageInput />
		</div>
	);
}

export default App;
