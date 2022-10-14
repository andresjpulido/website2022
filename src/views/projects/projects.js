import "./projects.css";
import data from "../../data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects(props) {
	
	const projects = data
		.sort((a, b) => a.level - b.level)
		.map((item, index) => {
			return (
				<div className="project" key={index}>
					<img
						src={"/images/projects/" + item.image}
						alt={item.description}
						loading="lazy"
						className="project-img"
					/>

					<div className="overlay">
						<div className="project-content">
							<h5 className="title">{item.title}</h5>
							<p>{item.description}</p>
							<div className="project-tech">
								{item.tags.map((tag, index) => (
									<div className="project-tech-item" key={index}>{tag}</div>
								))}
							</div>
							<div  className="project-tech">
							<a href={item.url}>
								<FontAwesomeIcon
									icon={["fab", "github"]}
									className="project-tech-icon"
								/> 
							</a>
							</div>
						</div>
					</div>
				</div>
			);
		});

	return (
		<section id={props.id} className="projects">
			<h3>ACCOMPLISHMENTS</h3>
			<h2>Portfolio</h2>
			<p>
				Far far away, behind the word mountains, far from the countries Vokalia
				and Consonantia
			</p>
			<div>projects</div>
			<h2>Other projects</h2>
			<div className="projectlist">{projects}</div>
		</section>
	);
}
