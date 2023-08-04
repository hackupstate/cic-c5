const Contact = () => {
	return (
		<section id="contact">
			<h1>Contact</h1>
			<div className="row">
				<div className="col-sm-12 col-md-6">
					<p>
						Want to get in touch? Shoot me an
						<a href="mailto:max@zane.tech">email</a> or fill out the
						form.
					</p>
				</div>
				{/* <!-- End of contact text--> */}
				<div className="col-sm-12 col-md-6">
					<form action="https://formbold.com/s/602B1" method="POST">
						<div className="row">
							<div className="col">
								<input
									name="First"
									type="text"
									placeholder="First Name"
								/>
							</div>
							{/* <!-- End of first name col--> */}
							<div className="col">
								<input
									name="Last"
									type="text"
									placeholder="Last Name"
								/>
							</div>
						</div>
						<input
							id="email"
							type="email"
							placeholder="Email address"
							name="Email Address"
						/>
						<textarea
							placeholder="Enter your text here"
							name="Content"
						></textarea>
						{/* <!-- End of first row of form--> */}
						<button type="submit" className="btn btn-primary">
							Send 📬
						</button>
					</form>
					{/* <!-- end of contact form--> */}
				</div>
				{/* <!--end of col for form--> */}
			</div>
			{/* <!--end of row for contact text and form--> */}
		</section>
	);
};

export default Contact;
