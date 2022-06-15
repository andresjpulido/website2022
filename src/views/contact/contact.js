export default function Contact(props) {
	return (
		<section id={props.id} className="page">
			<h3>CONTACT</h3>
			<h2>Contact Me</h2>
			<p>
				Looking for new challenges and learning
			</p>
			<form action="#" className="bg-light p-4 p-md-5 contact-form">
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Your Name" />
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Your Email"
					/>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Subject" />
				</div>
				<div className="form-group">
					<textarea
						name=""
						id=""
						cols="30"
						rows="7"
						className="form-control"
						placeholder="Message"
					></textarea>
				</div>
				<div className="form-group">
					<input
						type="submit"
						value="Send Message"
						className="btn btn-primary py-3 px-5"
					/>
				</div>
			</form>
		</section>
	);
}
