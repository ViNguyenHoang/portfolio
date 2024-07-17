import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";

import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [isPreLoad, setIsPreLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsPreLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Router>
			<div id={isPreLoad ? "preloader" : "preloader-none"} />

			<div className="App">
				<Navbar />

				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/project" element={<Project />} />
					<Route path="/about" element={<About />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
