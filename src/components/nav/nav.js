import React, { useState, useEffect } from "react";
import "./nav.css";
import logo from "../../assets/images/logo.svg";

export default function Nav( passive = false) {
 
	const [menu, setmenu] = useState([
		{ id: "home", label: "Home", isActive:true },
		{ id: "about", label: "About" },
		{ id: "mywork", label: "Projects" },
		{ id: "contact", label: "Contact" },
	]);

	const [transform, settransform] = useState(0);

	useEffect(() => {
		// initiate the event handler
		window.addEventListener("scroll", handleScroll, passive);

		// this will clean up the event every time the component is re-rendered
		return function cleanup() {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	const handleScroll = () => {
		/*
        let scrollTop = event.srcElement.body.scrollTop;
        let itemTranslate = Math.min(0, scrollTop / 3 - 60);
    */
 
		settransform(window.scrollY);

		let aboutTop = 0;
		if (document.getElementById("about"))
			aboutTop = document.getElementById("about").offsetTop;

		let experienceTop = 0;
		if (document.getElementById("experience"))
			experienceTop = document.getElementById("experience").offsetTop;

		let myworkTop = 0;
		if (document.getElementById("mywork"))
			myworkTop = document.getElementById("mywork").offsetTop;

		let contactTop = 0;
		if (document.getElementById("contact"))
			contactTop = document.getElementById("contact").offsetTop;

		let id = 0;
		let scrollY = parseInt(window.scrollY, 10);

		if (scrollY < aboutTop) id = "home";

		//if (scrollY >= aboutTop - 5 && scrollY < experienceTop) id = 2;

		if (scrollY >= aboutTop - 120 && scrollY < myworkTop) id = "about";

		if (scrollY >= myworkTop - 120 && scrollY < contactTop) id = "mywork";

		if (scrollY >= contactTop - 120) id = "contact";

		handlerItemMenu(null, id);
	};

	const handlerItemMenu = (e, id) => {
		let oldList = menu;

		const newList = oldList.map((item) => {
			if (item.id === id) {
				let updatedItem = {
					...item,
					isActive: true,
				};

				return updatedItem;
			} else {
				let updatedItem = {
					...item,
					isActive: false,
				};

				return updatedItem;
			}
		});

		setmenu(newList);
	};

	const items = menu.map((item, index) => {
		return (
			<div className="nav-item" key={index}>
				<a
					href={"#"+item.id}
					className={ item.isActive ? "nav-link-active" : "nav-link"}
					onClick={(e) => {
						handlerItemMenu(e, item.id);
					}}
				>
					{item.label}
				</a>
			</div>
		);
	});

	return (
		<div className="nav">
			<div className="nav-icon">
				<img className="nav-icon-img" src={logo} alt="ap" />
			</div>
			<div className="nav-items">{items}</div> 
		</div>
	);
}
