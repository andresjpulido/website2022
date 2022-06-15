import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectList(props) {
	if (!props.data) return <div></div>;

	const projects = props.data
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
									<div className="project-tech-item" key={index}>
										{tag}
									</div>
								))}
							</div>
							<div className="project-tech">
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

	return <div>projectlist</div>;
}
