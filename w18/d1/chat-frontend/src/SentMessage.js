const SentMessage = (props) => {
	return (
		<div className="row">
			<div className="col-2">{/* Empty on purpose */}</div>
			<div className="col-10 text-end ">
				<span className="messageText sentMessageText">
					{props.content}
				</span>
			</div>
		</div>
	);
};

export default SentMessage;
