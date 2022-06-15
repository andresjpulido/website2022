import { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import "./reset.css";
import "./app.css";
import Nav from "../components/nav";
import Home from "../views/home";
import About from "../views/about";
import Projects from "../views/projects";
import Contact from "../views/contact";
import Footer from "../components/footer";

export default function App(passive = false) {
 
	return (
		<div className="App">
			<Nav />

			<Home id="home" />

			<About id="about"/>

			<Projects id="mywork" />

			<Contact id="contact" />

			<Footer />
		</div>
	);
}
