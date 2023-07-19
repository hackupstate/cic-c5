const MessagesList = ({ messages }) => {
	return (
		<div id="messages">
			{messages.map((message) => {
				if (message.sent) {
					return <SentMessage content={message.content} />;
				} else {
					return <ReceivedMessage content={message.content} />;
				}
			})}
		</div>
	);
};

const SentMessage = (props) => {
	console.log(props);
	// const {content} = props;
	// const content = props.content;
	return (
		<div className="row">
			<div className="col-2">{/* Spacer no content in this col */}</div>
			<div className="col-10 text-end">
				<span className="messageText">{props.content}</span>
				{/* End of message text */}
			</div>
			{/* End of col-10 for message bubble */}
		</div>
	);
};

const ReceivedMessage = ({ content }) => {
	return (
		<div className="row">
			<div className="col-10">
				<span className="messageText receivedMessage">{content}</span>
				{/* End of message text */}
			</div>
			{/* End of col-10 for received message */}
		</div>
	);
};

export default MessagesList;
