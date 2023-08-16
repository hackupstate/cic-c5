import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";

// #11 messages in this line matches the props from #10
const MessagesList = ({ messages, updateMessages }) => {
	return (
		<div id="messagesList">
			{/* #12 Loop over all the messages */}
			{messages.map((message, index) => {
				console.log(message);
				//#13 Use the data in the message to determine which component
				//should render (sent or received)
				if (message.sent) {
					return (
						// #14 Send in all the props the component needs to show properly
						<SentMessage
							key={message.id}
							content={message.content}
							id={message.id}
							lastMessage={index + 1 === messages.length}
							updateMessages={updateMessages}
							timestamp={message.timestamp}
						/>
					);
				} else {
					return (
						<ReceivedMessage key={message.id} message={message} />
					);
				}
			})}
			{/* <SentMessage /> */}
			{/* <ReceivedMessage /> */}
		</div>
	);
};

export default MessagesList;
