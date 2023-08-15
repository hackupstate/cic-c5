import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";

const MessagesList = ({ messages }) => {
	return (
		<div id="messagesList">
			{messages.map((message) => {
				console.log(message);
				if (message.sent) {
					return (
						<SentMessage
							key={message.id}
							content={message.content}
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
