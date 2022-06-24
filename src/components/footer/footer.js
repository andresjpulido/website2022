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
		<footer>
			<div className="footer-columns">
				<div>
					<h5 className="footer">Links</h5>
					<ul className="footer-links">
						<li>
							<a href="#home">
								<div className="footer-links-text">Home</div>
							</a>
						</li>
						<li>
							<a href="#about"><div className="footer-links-text">About</div></a>
						</li>
						<li>
							<a href="#mywork"><div className="footer-links-text">Projects</div></a>
						</li>
						<li>
							<a href="#contact"><div className="footer-links-text">Contact</div></a>
						</li>
					</ul>
				</div>

				<div>
					<h5 className="footer">Contact</h5>
					{socialNet}
				</div>
			</div>
			<div className="footer-copy">
				Copyright ©2022 All rights reserved | Andres Pulido, Auckland, New
				Zealand
			</div>
		</footer>
	);
}
