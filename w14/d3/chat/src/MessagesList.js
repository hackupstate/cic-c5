// #2 Add setMessages to props list of component so we can use it
const MessagesList = ({ messages, setMessages, username, messageColor }) => {
	return (
		<div id="messages">
			{messages.map((message, index) => {
				// console.log(message);
				if (message.sent) {
					return (
						<SentMessage
							messages={messages}
							key={index}
							content={message.content}
							// #3 & #4 Add index and setMessages props to sent message component
							// so that the parent can forward on the ability to update the messages
							//and also so the message knows what index it is to delete itself
							index={index}
							setMessages={setMessages}
							timestamp={message.timestamp}
							username={username}
						/>
					);
				} else {
					return (
						<ReceivedMessage
							index={index}
							setMessages={setMessages}
							key={index}
							message={message}
							messages={messages}
							messageColor={messageColor}
						/>
					);
				}
			})}
		</div>
	);
};

const SentMessage = (props) => {
	// console.log(props);
	// const {content} = props;
	// const content = props.content;

	// #6 Make on click function
	const deleteMessage = () => {
		// #7 Confirm the user wants to delete the message
		if (window.confirm("Are you sure you want to delete this message?")) {
			// #8 Make a copy of the messages sent in from the props from #3
			const existingMessages = [...props.messages];
			// #9 Delete the message that the delete button was clicked on from #4's prop
			existingMessages.splice(props.index, 1);
			// #10 Update the messags in state using setMessages sent in from prop through MessagesList to get to the state from App.js
			props.setMessages(existingMessages);
		}
	};
	console.log(props);

	return (
		<div className="row">
			<div className="col-2">{/* Spacer no content in this col */}</div>
			<div className="col-10 text-end">
				<div>{props.username}</div>
				<span className="messageText">{props.content}</span>
				{/* #5 Add a delete button and link it to an onclick */}
				<div>
					<span style={{ color: "gray", fontSize: 10 }}>
						{props.timestamp.toLocaleString()}
					</span>
					{" | "}
					<span
						style={{
							color: "red",
							fontSize: 10,
							cursor: "pointer",
						}}
						// onClick={() => {
						// 	deleteMessage();
						// }}
						onClick={deleteMessage}
					>
						delete
					</span>
				</div>
				{/* End of message text */}
			</div>
			{/* End of col-10 for message bubble */}
		</div>
	);
};

const ReceivedMessage = ({
	message,
	index,
	setMessages,
	messages,
	messageColor,
}) => {
	const reactToMessage = () => {
		const reactionEmoji = window.prompt("What is your reaction");
		if (reactionEmoji.length !== 2) {
			window.alert("That is too long of a reaction");
		} else {
			console.log(reactionEmoji);
			const updatedMessages = [...messages];
			updatedMessages[index].reaction = reactionEmoji;
			setMessages(updatedMessages);
		}
	};
	return (
		<div className="row">
			<div className="col-10">
				<span
					className="messageText receivedMessage"
					style={{ background: messageColor }}
				>
					{message.content}
				</span>
				<div>
					<span className="reactLink" onClick={reactToMessage}>
						react: {message.reaction}
					</span>
					{" | "}
					<span style={{ color: "gray", fontSize: 10 }}>
						{message.timestamp.toLocaleString()}
					</span>
				</div>
				{/* End of message text */}
			</div>
			{/* End of col-10 for received message */}
		</div>
	);
};

export default MessagesList;
