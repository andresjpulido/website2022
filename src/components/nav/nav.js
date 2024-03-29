import React, { useState, useEffect } from "react";
import "./nav.css";
import logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import menuData from "../../data/menu.json";

export default function Nav(props, passive = false) {
	//const [menu, setmenu] = useState(props.data);
	const [menu, setmenu] = useState(menuData);
	const [transform, settransform] = useState(0);
	const [ currentSection, setCurrentSection ] = useState(1);

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

		let portfolioTop = 0;
		if (document.getElementById("portfolio"))
		portfolioTop = document.getElementById("portfolio").offsetTop;
 	 
		let contactTop = 0;
		if (document.getElementById("contact"))
			contactTop = document.getElementById("contact").offsetTop;
 
		let id = 0;
		let scrollY = parseInt(window.scrollY, 10);

		if (scrollY < aboutTop) {
			id = 1;
			document.getElementById("n").classList.remove("nav-filled");
		}

		//if (scrollY >= aboutTop - 5 && scrollY < experienceTop) id = 2;

		if (scrollY >= aboutTop - 120 && scrollY < portfolioTop){
			id = 2; 
			document.getElementById("n").classList.add("nav-filled"); 
		} 

		if (scrollY >= portfolioTop - 120 && scrollY < contactTop) {
			id = 3;
			document.getElementById("n").classList.add("nav-filled"); 
		}

		if (scrollY >= contactTop - 120) {
			id = 4;
			document.getElementById("n").classList.add("nav-filled"); 
		}
  
		handlerItemMenu(null, id);

		console.log("id::", id, " currentSection ", currentSection)

		if(currentSection !== id){
			console.log("llamando", id)
			
			document.getElementById("logo").className=  ("nav-icon-img"); 
			
			setCurrentSection(id);
		} else{
			//document.getElementById("logo").className("nav-icon-img");
		}
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
					href={item.ref}
					className={item.isActive ? "nav-link-active" : "nav-link"}
					onClick={(e) => {
						handlerItemMenu(e, item.id);
					}}
				>
					<div className="nav-item-label">{item.label}</div>
					<div className="nav-item-icon">
						<FontAwesomeIcon
							icon={[item.iconFamily, item.icon]}
							key={item.id}
						/>
					</div>
				</a>
			</div>
		);
	});

	return (
		<nav >
			<div className="nav " id="n">
				<div className="nav-icon">
					<img className="nav-icon-img" id="logo" src={logo} alt="ap" key={currentSection} />
				</div>
				<div className="nav-items">{items}</div>
			</div>
		</nav>
	);
}
