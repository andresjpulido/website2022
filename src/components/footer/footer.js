import "./footer.css";
import contactItemsList from "../../data/contactItems.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
	const socialNet = contactItemsList.map((item) => (
		<ul key={item.id.toString()} className="footer-contact">
			<li>
				<a href={item.url} target="_blank" rel="noreferrer" title={item.label}>
					<div className="footer-item-contact">
						<FontAwesomeIcon
							icon={[item.iconFamily, item.icon]}
							key={item.id}
						/>
						<div> {item.text}</div>
					</div>
				</a>
			</li>
		</ul>
	));

	return (
		<div className="footer">
			<div className="footer-columns">
				<div>
					<h5>Lets talk about</h5>
					<p>
						Far far away, behind the word mountains, far from the countries
						Vokalia and Consonantia, there live the blind texts.
					</p>
				</div>
				<div>
					<h5>Links</h5>
					<ul className="footer-links">
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#mywork">Projects</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>

				<div>
					<h5>Contact</h5>
					{socialNet}
				</div>
			</div>
			<div className="footer-copy">
				Copyright ©2022 All rights reserved | Andres Pulido, Auckland, New
				Zealand
			</div>
		</div>
	);
}
