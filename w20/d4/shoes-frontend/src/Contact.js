import APIURL from "./APIURL";
import { useState } from "react";

const Contact = () => {
	const [email, setEmail] = useState("abc@def.com");
	const [formSubmitted, setFormSubmitted] = useState(false);

	const contactFormSubmitted = async (event) => {
		event.preventDefault();
		// console.log("form submitted");

		const response = await fetch(`${APIURL}/contactForm`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: event.target.elements.name.value,
				email: email,
				message: event.target.elements.message.value,
			}),
		});

		//WRONG
		// email = "";
		//CORRECT
		setEmail("");

		setFormSubmitted(true);
	};

	if (formSubmitted) {
		return (
			<p>
				Your contact form has generated an email and has been sent. You
				are the weakest link. Goodbye!
			</p>
		);
	}

	return (
		<form onSubmit={contactFormSubmitted} id="form">
			<hr />
			<div className="row">
				<div className="col">
					<label>Name</label>
					<br />
					<input type="text" name="name" className="form-control" />
				</div>
				<div className="col">
					<label>Email</label>
					<br />
					<input
						onChange={(event) => setEmail(event.target.value)}
						value={email}
						type="email"
						name="email"
						className="form-control"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<label>Message</label>
					<textarea name="message" className="form-control" />
				</div>
			</div>
			<div className="row" style={{ marginTop: 15 }}>
				<div className="col-4">{/* empty spacer */}</div>
				<div className="col-4 d-grid">
					<button className="btn btn-primary" type="submit">
						Send
					</button>
				</div>
			</div>
		</form>
	);
};

export default Contact;
