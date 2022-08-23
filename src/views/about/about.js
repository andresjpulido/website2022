import HireMe from "../../components/hireme";
import "./about.css";
import img from "../../assets/images/abstract-tech-background.jpg";

export default function About(props) {
	return (
		<section id={props.id} >
			<div className="about-columns">
				<div className="about-image">
					<img src={img} />
				</div>
				<div className="about">
					<h3>WELCOME</h3>
					<h2>About Me</h2>
					<p>
						Software developer, walker, passionate about technology, interested
						in learning and creating fantastic things. Systems Engineer expert
						in business applications J2EE, SOA, web applications and single-page
						applications.
					</p>

					<div className="columns">
						<div>
							icon
							<h4>Web Design </h4>
							<p>
								A small river named Duden flows by their place and supplies.{" "}
							</p>
						</div>
						<div>
							icon
							<h4>Web Application</h4>
							<p>
								A small river named Duden flows by their place and supplies.
							</p>
						</div>
					</div>
					<div>200 FINISHED PROJECTS</div>
				</div>
			</div>
			<HireMe />
		</section>
	);
}
