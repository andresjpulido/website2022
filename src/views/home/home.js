import "./home.css";
import logo from "../../assets/images/logo.svg";

export default function Home() {
	return (
		<section id="home" className="home">
			<div className="home-slideset">
				<div>
					<div className="home-title">
						<div>
							<h3>Hello</h3>
							<h1>
								I'm <span className="home-name">Andres Pulido</span>
							</h1>
							<div>A web developer</div>
							<br />
							<br />
							<br />
							<a href="#" target="_blank" className="home-cv">
								See my CV
							</a>
						</div>
						<div>
							<img src={logo} className="" alt="logo"/>
						</div>
					</div>
				</div>
				<div>
					<h1>I'm Software Developer</h1>
					 
					<br />
					<br /><br />
					<a href="#" target="_blank" className="home-cv">
								See my CV
							</a>
				</div>

				<div>
					<h1>I develop web applications</h1>
					<br />
					<br /><br />
					<a href="#" target="_blank" className="home-cv">
								See my CV
							</a>
				</div>
			</div>

			<div className="rightdiv"></div>
			<div className="leftdiv"></div>
			<div className="centerdiv"></div>
		</section>
	);
}
