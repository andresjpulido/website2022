import "./home.css";
import logo from "../../assets/images/logo.svg";

export default function Home() {
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
							 
							<a href="#" target="_blank" className="home-cv">
							Contact me
							</a>
						</div>
						
					</div>
				</div>
				<div>
					<h1>Software Development</h1>

					<br />
					<br />
					<br />
					<a href="#" target="_blank" className="home-cv">
						Contact me
					</a>
				</div>
			</div>

			<div className="rightdiv"></div>
			<div className="centerdiv"></div>
		</section>
	);
}
