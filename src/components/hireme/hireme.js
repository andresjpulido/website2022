import "./hireme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HireMe() {
	return (
		<div className="hireme">
			<div>
				I'm <span className="hireme-bold">Available</span> for new projects
			</div>
			<FontAwesomeIcon icon={["fas", "earth-oceania"]} />
		</div>
	);
}
