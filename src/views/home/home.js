import "./home.css";

export default function Home() {

	let goContact = (ev) => {
		ev.preventDefault();
	}

	return (
		<section id="home" className="home">
			<div className="home-slideset">
				<div>
					<div className="home-title">
						<div>
							<span className="home-greeting">Hello</span>
							<h1>
								I'm <span className="home-name">Andres Pulido</span>
							</h1>
							<div className="home-position">Software developer</div>
							<br />
							<br />

							<a href={"#contact"} className="home-cv">
								Contact me
							</a>
						</div>
					</div>
				</div>
				<div>
					<div className="home-title">
						<div>
							<h1>FullStack Developer</h1>

							<br />
							<br />
							<br />
							<a href={"#contact"} className="home-cv">
								Contact me
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="rightdiv"></div>
			<div className="centerdiv"></div>
		</section>
	);
}
